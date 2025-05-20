import { z } from "zod";

/**
 * Zod schema for validating user passwords.
 *
 * This schema enforces the following rules:
 * - Must be a string.
 * - Must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
 * - Must be at least 8 characters long.
 * - Must not exceed 128 characters.
 * - Must not contain any of the following characters: ', ", <, >, ;, (, ), {, }.
 *
 * Custom error messages are provided for each validation rule using the `UserErrors` enum.
 */
export const passwordSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/, {
    message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",
  })
  .min(8, { message: "Password must be at least 8 characters long." })
  .max(128, { message: "Password must not exceed 128 characters." })
  .refine(value => !/['"<>;(){}]/.test(value), {
    message: "Password must not contain any of the following characters: ', \", <, >, ;, (, ), {, }.",
  });
