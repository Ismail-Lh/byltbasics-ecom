import { z } from "zod";

/**
 * Schema for validating user creation input.
 *
 * This schema enforces the following fields:
 * - `name`: The full name of the user as a string.
 * - `email`: The user's email address as a string.
 * - `password`: The user's password as a string.
 *
 * All fields are required. Additional properties are not allowed.
 */
export const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
}).strict();
