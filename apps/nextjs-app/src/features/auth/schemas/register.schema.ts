import { emailAddressSchema, passwordSchema, usernameSchema } from "@byltbasics/schemas";
import { z } from "zod";

/**
 * Zod schema for user registration form validation.
 *
 * This schema validates the following fields:
 * - `name`: Must conform to the `usernameSchema` rules.
 * - `email`: Must conform to the `emailAddressSchema` rules.
 * - `password`: Must conform to the `passwordSchema` rules.
 * - `password_confirm`: Must conform to the `passwordSchema` rules and match the `password` field.
 *
 * The schema also includes a refinement to ensure that the `password` and `password_confirm` fields match.
 * If they do not match, a validation error with the message "Passwords don't match" is returned on the `password_confirm` field.
 */
export const registerSchema = z.object({
  name: usernameSchema,
  email: emailAddressSchema,
  password: passwordSchema,
  password_confirm: passwordSchema,
}).refine(data => data.password === data.password_confirm, {
  message: "Passwords don't match",
  path: ["password_confirm"],
});
