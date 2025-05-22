import type { IApiErrorResponse, IApiSuccessResponse, IErrorDetails } from "@byltbasics/types";

/**
 * Options for formatting a response.
 */
export interface ISuccessResponsePayload<T> {
  /**
   * The HTTP status code for the response.
   */
  statusCode?: number;

  /**
   * The message describing the result of the operation.
   */
  message: string;

  /**
   * The data to include in the response.
   */
  data: T;
}

/**
 * Options for formatting an error response.
 */
export interface IErrorResponseOptions {
  /**
   * A message describing the error.
   */
  message: string;

  /**
   * The HTTP status code for the error.
   */
  statusCode: number;

  /**
   * A code identifying the type of error.
   */
  name?: string;

  /**
   * Additional details about the error.
   */
  errorDetails?: IErrorDetails;

  /**
   * The stack trace for the error (only included in development).
   */
  stack?: string;

  /**
   * Additional metadata to include in the response.
   */
  metadata?: Record<string, any>;
}

/**
 * Represents a rule for sanitizing data fields.
 *
 * @property fieldPattern - A pattern used to match fields that need to be sanitized.
 *                          This can be a regular expression or a string.
 */
export interface ISanitizationRule {
  fieldPattern: RegExp | string;
}
/**
 * Represents options for sanitization.
 *
 * @property sanitize - A boolean indicating whether to sanitize the data or not.
 * @property sanitizationRules - An array of rules that define how to sanitize specific fields.
 */
export interface ISanitizationOptions {
  sanitize?: boolean;
  sanitizationRules?: ISanitizationRule[];
}

/**
 * Interface for API response sanitization.
 *
 * @property successResponse - Formats a successful API response with the provided data and options.
 * @property errorResponse - Formats an error API response with the provided error details.
 */
export interface IApiResponseSanitizer {
  /**
   * Formats a successful API response with the provided payload.
   *
   * @param payload - The payload for the success response.
   * @param sanitizationOptions - Optional sanitization options to override defaults.
   * @returns A standardized success response object.
   */
  successResponse: <T>(
    payload: ISuccessResponsePayload<T>,
    sanitizationOptions?: ISanitizationOptions
  ) => IApiSuccessResponse<T>;

  /**
   * Formats an error response with the provided options.
   *
   * @param options - The options for the error response.
   * @returns A standardized error response object.
   */
  errorResponse: (options: IErrorResponseOptions) => IApiErrorResponse;
}
