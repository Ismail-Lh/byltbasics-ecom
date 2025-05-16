import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Class representing a NotFoundError.
 * This error is thrown when a requested resource cannot be found.
 *
 * @extends {BaseError}
 */
export class NotFoundError extends BaseError {
  constructor(description: string) {
    super("NOT_FOUND", httpStatus.NOT_FOUND, description, true);
  }
}
