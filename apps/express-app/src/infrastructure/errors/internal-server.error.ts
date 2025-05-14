import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents an internal server error.
 * This error is typically used to indicate that something went wrong on the server side.
 *
 * @extends {BaseError}
 */
export class InternalServerError extends BaseError {
  constructor(description: string) {
    super(
      "INTERNAL_SERVER_ERROR",
      httpStatus.INTERNAL_SERVER_ERROR,
      description,
      false,
    );
  }
}
