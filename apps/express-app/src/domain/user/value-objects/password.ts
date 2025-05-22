import { passwordSchema } from "@byltbasics/schemas";

/**
 * Represents a user's password as a value object.
 *
 * This class validates the password using the `passwordSchema` upon instantiation.
 * If the password is invalid, an error is thrown with the validation message.
 * The password value is immutable and can be accessed via the `value` getter.
 */
export class Password {
  private readonly _value: string;

  /**
   * Creates a new Password instance after validating the provided value.
   *
   * @param value - The raw password string to be validated and stored.
   * @throws {Error} If the password does not conform to the `passwordSchema`.
   */
  constructor(value: string) {
    const parsedValue = passwordSchema.safeParse(value);

    if (!parsedValue.success) {
      throw new Error(parsedValue.error.errors[0].message);
    }

    this._value = parsedValue.data;
  }

  /**
   * Gets the validated password value.
   *
   * @returns The validated password string.
   */
  get value(): string {
    return this._value;
  }
}
