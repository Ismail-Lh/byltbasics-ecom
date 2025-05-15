import { z } from "zod";

import { UserErrors } from "../enums";

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

export class UserName {
  private _name: string;

  constructor(name: string) {
    const parsedName = usernameSchema.safeParse(name);

    if (!parsedName.success) {
      throw new Error(parsedName.error.errors[0].message);
    }

    this._name = parsedName.data;
  }

  get value(): string {
    return this._name;
  }
}
