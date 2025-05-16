import { z } from "zod";

import { UserErrors } from "../enums";

/**
 * Schema for validating a username using Zod.
 *
 * - Must be a string containing only word characters (letters, digits, and underscores).
 * - Must be at least 3 characters long.
 * - Must not exceed 20 characters.
 * - Must not contain any of the following special characters: ', ", <, >, ;, (, ), {, }.
 *
 * Custom error messages are provided for:
 * - Invalid format (non-word characters)
 * - Minimum length violation
 * - Maximum length violation
 * - Presence of restricted special characters
 *
 * @see UserErrors for specific error messages used in validation.
 */
export const usernameSchema = z
  .string()
  .regex(/^\w+$/, {
    message: UserErrors.UserNameInvalidFormat,
  })
  .min(3, { message: UserErrors.UserNameMinLength })
  .max(20, { message: UserErrors.UserNameLengthLimitExceeded })
  .refine(value => !/['"<>;(){}]/.test(value), {
    message: UserErrors.UserNameSpecialCharacterLimit,
  });
