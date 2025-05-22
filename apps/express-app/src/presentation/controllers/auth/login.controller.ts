import { inject, injectable } from "inversify";

import type { IAuthLoginUseCase } from "@/application/use-cases/auth";
import type { IAuthLoginDto, IAuthResponseDto } from "@/domain/auth/dtos";

import { TYPES } from "@/infrastructure/di-container/types";

import type { IHttpRequest } from "../../types";
import type { IHttpController } from "../controller.interface";

export interface IAuthLoginController extends IHttpController<IAuthLoginDto, IAuthResponseDto> {}

/**
 * Controller responsible for handling HTTP requests related to user login.
 *
 * @remarks
 * This controller receives user login requests, delegates the business logic to the injected
 * `AuthLoginUseCase`, and returns the appropriate HTTP response.
 *
 * @see IAuthLoginController
 * @see IAuthLoginUseCase
 */
@injectable()
export class AuthLoginController implements IAuthLoginController {
  /**
   * Creates an instance of the controller with the injected AuthLoginUseCase dependency.
   *
   * @param authLoginUseCase - The use case responsible for handling user login logic.
   */
  constructor(@inject(TYPES.AuthLoginUseCase) private authLoginUseCase: IAuthLoginUseCase) {}

  /**
   * Handles the HTTP request to log in a user.
   *
   * @param request - The HTTP request containing the user login data in the body.
   * @returns A promise that resolves to an HTTP response with the authentication tokens.
   */
  async handle(request: IHttpRequest<IAuthLoginDto>): Promise<IAuthResponseDto> {
    const body = request.body;

    const authTokens = await this.authLoginUseCase.execute(body);

    return authTokens;
  }
}
