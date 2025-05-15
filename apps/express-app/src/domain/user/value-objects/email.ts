import { z } from "zod";

import { UserErrors } from "../enums";

/**
 * Zod schema for validating email addresses.
 *
 * @constant
 * @type {z.ZodObject}
 */
const emailAddressSchema = z
  .string()
  .max(255, { message: UserErrors.EmailLengthLimitExceeded })
  .email({ message: UserErrors.InvalidEmailAddress });

/**
 * Class representing an email address.
 *
 * @class
 */
export class Email {
  private _address: string;

  /**
   * Creates an instance of the Email class.
   *
   * @constructor
   * @param {string} address - The email address to validate.
   * @throws {Error} Throws an error if the email address is invalid.
   */
  constructor(address: string) {
    const parsed = emailAddressSchema.safeParse(address);

    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }
    // If the parsing is successful, assign the validated email address to the private property
    this._address = parsed.data;
  }

  /**
   * Getter for the email address.
   *
   * @readonly
   * @returns {string} The email address.
   */
  get address(): string {
    return this._address;
  }
}
