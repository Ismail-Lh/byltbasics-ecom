import { z } from "zod";

/**
 * Zod schema for validating user login credentials.
 *
 * This schema enforces the following constraints:
 * - `email`: Must be a valid email address.
 * - `password`: Must be a string with a minimum length of 8 characters.
 *
 * The `.strict()` method ensures that no additional properties are allowed.
 */
export const authLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
}).strict();
