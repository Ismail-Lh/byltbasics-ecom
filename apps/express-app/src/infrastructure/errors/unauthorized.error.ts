import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents an Unauthorized Error.
 *
 * This error is thrown when a user attempts to access a resource
 * without proper authentication or authorization.
 *
 * @extends {BaseError}
 */
export class UnauthorizedError extends BaseError {
  constructor(description: string) {
    super("UNAUTHORIZED", httpStatus.UNAUTHORIZED, description, true);
  }
}
