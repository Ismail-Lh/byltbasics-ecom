import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents an error for a bad request (HTTP 400).
 * This error should be thrown when the client sends a request that the server cannot or will not process.
 *
 * @extends {BaseError}
 */
export class BadRequestError extends BaseError {
  constructor(description: string) {
    super("BAD_REQUEST", httpStatus.BAD_REQUEST, description, true);
  }
}
