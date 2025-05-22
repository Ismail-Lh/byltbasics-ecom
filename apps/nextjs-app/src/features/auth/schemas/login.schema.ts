import { emailAddressSchema, passwordSchema } from "@byltbasics/schemas";
import { z } from "zod";

/**
 * Zod schema for user login form validation.
 *
 * This schema validates the following fields:
 * - `email`: Must conform to the `emailAddressSchema` rules.
 * - `password`: Must conform to the `passwordSchema` rules.
 */
export const loginSchema = z.object({
  email: emailAddressSchema,
  password: passwordSchema,
}).strict();
