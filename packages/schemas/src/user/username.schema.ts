import { z } from "zod";

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
    message: "Username must contain only letters, digits, and underscores.",
  })
  .min(3, { message: "Username must be at least 3 characters long." })
  .max(20, { message: "Username must not exceed 20 characters." })
  .refine(value => !/['"<>;(){}]/.test(value), {
    message: "Username must not contain any of the following characters: ', \", <, >, ;, (, ), {, }.",
  });
