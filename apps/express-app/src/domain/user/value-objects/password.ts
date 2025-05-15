import { z } from "zod";

import { UserErrors } from "../enums";

export const passwordSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/, {
    message: UserErrors.PasswordSpecialCharacter,
  })
  .min(8, { message: UserErrors.PasswordMinLength })
  .max(128, { message: UserErrors.PasswordLengthLimitExceeded })
  .refine(value => !/['"<>;(){}]/.test(value), {
    message: UserErrors.PasswordSpecialCharacterLimit,
  });

export class Password {
  private readonly _value: string;

  constructor(value: string) {
    const parsedValue = passwordSchema.safeParse(value);

    if (!parsedValue.success) {
      throw new Error(parsedValue.error.errors[0].message);
    }

    this._value = parsedValue.data;
  }

  get value(): string {
    return this._value;
  }
}
