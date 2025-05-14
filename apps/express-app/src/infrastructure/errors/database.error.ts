import httpStatus from "http-status";

import { BaseError } from "./base.error";

/**
 * Represents an database error.
 * This error is typically used to indicate that something went wrong on the database side.
 *
 * @extends {BaseError}
 */
export class DatabaseError extends BaseError {
  constructor(description: string) {
    super(
      "DATABASE_ERROR",
      httpStatus.INTERNAL_SERVER_ERROR,
      description,
      false,
    );
  }
}
