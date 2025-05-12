import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Class representing a MethodNotAllowed error.
 * This error is thrown when a request method is not allowed for a specific route.
 *
 * @extends {BaseError}
 */
export class HttpMethodNotAllowedError extends BaseError {
  constructor(description: string) {
    super("METHOD_NOT_ALLOWED", httpStatus.METHOD_NOT_ALLOWED, description, true);
  }
}
