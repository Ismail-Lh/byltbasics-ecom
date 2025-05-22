import { usernameSchema } from "@byltbasics/schemas";

/**
 * Value object representing a user's name.
 *
 * This class validates the provided name using the `usernameSchema` and ensures
 * that only valid names are accepted. If the validation fails, an error is thrown
 * with the corresponding validation message.
 *
 * @example
 * ```typescript
 * const userName = new UserName("JohnDoe");
 * console.log(userName.value); // "JohnDoe"
 * ```
 *
 * @throws {Error} If the provided name does not pass validation.
 */
export class UserName {
  private _name: string;

  /**
   * Creates a new instance of the class with a validated username.
   *
   * @param name - The username to be validated and assigned.
   * @throws {Error} Throws an error if the provided name does not pass validation.
   */
  constructor(name: string) {
    const parsedName = usernameSchema.safeParse(name);

    if (!parsedName.success) {
      throw new Error(parsedName.error.errors[0].message);
    }

    this._name = parsedName.data;
  }

  /**
   * Gets the value of the user's name.
   *
   * @returns The current name as a string.
   */
  get value(): string {
    return this._name;
  }
}
