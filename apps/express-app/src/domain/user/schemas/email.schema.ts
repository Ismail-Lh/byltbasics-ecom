import { z } from "zod";

import { UserErrors } from "../enums";

/**
 * Zod schema for validating email addresses.
 *
 * - Ensures the value is a string.
 * - Limits the maximum length to 255 characters.
 *   - Throws `UserErrors.EmailLengthLimitExceeded` if exceeded.
 * - Validates the string as a proper email address format.
 *   - Throws `UserErrors.InvalidEmailAddress` if invalid.
 *
 * @example
 * emailAddressSchema.parse('user@example.com'); // passes
 * emailAddressSchema.parse('invalid-email'); // throws UserErrors.InvalidEmailAddress
 */
export const emailAddressSchema = z
  .string()
  .max(255, { message: UserErrors.EmailLengthLimitExceeded })
  .email({ message: UserErrors.InvalidEmailAddress });
