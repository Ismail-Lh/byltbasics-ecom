import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents a Forbidden Error.
 * This error is thrown when a user attempts to access a resource they do not have permission to access.
 *
 * @extends {BaseError}
 */
export class ForbiddenError extends BaseError {
  constructor(description: string) {
    super("FORBIDDEN", httpStatus.FORBIDDEN, description, true);
  }
}
