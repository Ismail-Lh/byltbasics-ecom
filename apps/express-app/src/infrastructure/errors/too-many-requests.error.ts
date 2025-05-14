import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Error for rate limiting
 */
export class TooManyRequestsError extends BaseError {
  /**
   * Create a new TooManyRequestsError
   *
   * @param {string} description - Error message
   * @param {object} metadata - Additional error metadata
   */
  constructor(description: string, metadata: Record<string, unknown> = {}) {
    super(
      "TOO_MANY_REQUESTS",
      httpStatus.TOO_MANY_REQUESTS,
      description,
      true,
      metadata,
    );
  }
}
