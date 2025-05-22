import type { IApiErrorResponse, IApiSuccessResponse } from "@byltbasics/types";

import httpStatus from "http-status";
import { injectable } from "inversify";

import type { IApiResponseSanitizer, IErrorResponseOptions, ISanitizationOptions, ISanitizationRule, ISuccessResponsePayload } from "@/application/providers";

/**
 * Class responsible for sanitizing API responses to remove sensitive data.
 */
@injectable()
export class ApiResponseSanitizer implements IApiResponseSanitizer {
  /**
   * Default sanitization rules for common sensitive data
   * These rules define patterns for fields that should be removed from responses
   * @private
   * @readonly
   */
  private readonly _defaultSanitizationRules: ISanitizationRule[] = [
    { fieldPattern: /password/i },
    { fieldPattern: /userIds/i },
    { fieldPattern: /token|api[_-]?key|secret/i },
    { fieldPattern: /credit[_-]?card|card[_-]?number/i },
    { fieldPattern: /ssn|social[_-]?security/i },
    { fieldPattern: /auth/i },
    { fieldPattern: /key/i },
    { fieldPattern: /private[_-]?key/i },
    { fieldPattern: /secret[_-]?key/i },
  ];

  /**
   * Default sanitization options
   */
  private readonly _defaultOptions: ISanitizationOptions = {
    sanitize: true,
    sanitizationRules: [...this._defaultSanitizationRules],
  };

  /**
   * Sanitizes sensitive data in the provided object or array.
   *
   * @param data - The data to be sanitized (can be an object, array, or primitive).
   * @param rules - An optional array of sanitization rules to override default rules.
   * @returns The sanitized data with sensitive fields removed.
   */
  sanitizeData<T>(
    data: T,
    rules: ISanitizationRule[] = this._defaultSanitizationRules,
  ): T {
    if (!data)
      return data;

    // Handle arrays
    if (Array.isArray(data)) {
      return data.map(item => this.sanitizeData(item, rules)) as unknown as T;
    }

    // Handle objects
    if (typeof data === "object" && data !== null) {
      const sanitized = { ...data };

      for (const key in sanitized) {
        // Check if the current field matches any sensitive data pattern
        if (this.isFieldSensitive(key, rules)) {
          delete (sanitized as any)[key];
        }
        else if (
          typeof (sanitized as any)[key] === "object"
          && (sanitized as any)[key] !== null
        ) {
          // Recursively sanitize nested objects
          (sanitized as any)[key] = this.sanitizeData(
            (sanitized as any)[key],
            rules,
          );
        }
      }

      return sanitized;
    }

    return data;
  }

  /**
   * Checks if a field name matches any of the sensitive data patterns.
   *
   * @param fieldName - The name of the field to check.
   * @param rules - An array of sanitization rules to check against.
   * @returns A boolean indicating whether the field is sensitive.
   */
  isFieldSensitive(fieldName: string, rules: ISanitizationRule[]): boolean {
    return rules.some((rule) => {
      if (rule.fieldPattern instanceof RegExp) {
        return rule.fieldPattern.test(fieldName);
      }
      return rule.fieldPattern === fieldName;
    });
  }

  /**
   * Formats a successful API response with the provided payload.
   *
   * @param payload - The payload for the success response.
   * @param sanitizationOptions - Optional sanitization options to override defaults.
   * @returns A standardized success response object.
   *
   */
  successResponse<T>(
    payload: ISuccessResponsePayload<T>,
    sanitizationOptions?: ISanitizationOptions,
  ): IApiSuccessResponse<T> {
    const {
      statusCode = httpStatus.OK,
      message,
      data,
    } = payload;

    const sanitization = {
      ...this._defaultOptions,
      ...sanitizationOptions,
    };

    const sanitizedData = sanitization.sanitize
      ? this.sanitizeData(data, sanitization.sanitizationRules)
      : data;

    const response: IApiSuccessResponse<T> = {
      success: true,
      statusCode,
      body: {
        message,
        data: sanitizedData,
      },
    };

    return response;
  }

  /**
   * Formats an error response with the provided options.
   *
   * @param options - The options for the error response.
   * @returns A standardized error response object.
   */
  errorResponse(options: IErrorResponseOptions): IApiErrorResponse {
    const {
      message,
      name,
      errorDetails,
      statusCode = httpStatus.INTERNAL_SERVER_ERROR,
    } = options;

    const response: IApiErrorResponse = {
      success: false,
      statusCode,
      body: {
        message,
        name,
        errorDetails,
      },
    };

    return response;
  }
}
