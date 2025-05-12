import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents a conflict error that occurs when a request cannot be completed due to a conflict with the current state of the target resource.
 *
 * @extends {BaseError}
 */
export class ConflictError extends BaseError {
  constructor(description: string) {
    super("CONFLICT", httpStatus.CONFLICT, description, true);
  }
}
