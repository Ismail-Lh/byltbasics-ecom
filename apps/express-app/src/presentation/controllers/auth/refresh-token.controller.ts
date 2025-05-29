import { inject, injectable } from "inversify";

import type { IRefreshTokenUseCase } from "@/application/use-cases/auth";
import type { IAuthResponseDto } from "@/domain/auth/dtos";

import { envConfig } from "@/config";
import { TYPES } from "@/infrastructure/di-container/types";
import { UnauthorizedError } from "@/infrastructure/errors";

import type { EmptyRecord, IHttpRequest } from "../../types";
import type { IHttpController } from "../controller.interface";

export interface IRefreshTokenController extends IHttpController<EmptyRecord, IAuthResponseDto> {}

/**
 * Controller responsible for handling HTTP requests related to user login.
 *
 * @remarks
 * This controller receives user login requests, delegates the business logic to the injected
 * `RefreshTokenUseCase`, and returns the appropriate HTTP response.
 *
 * @see IRefreshTokenController
 * @see IRefreshTokenUseCase
 */
@injectable()
export class RefreshTokenController implements IRefreshTokenController {
  /**
   * Creates an instance of the controller with the injected RefreshTokenUseCase dependency.
   *
   * @param refreshTokenUseCase - The use case responsible for handling user login logic.
   */
  constructor(@inject(TYPES.RefreshTokenUseCase) private refreshTokenUseCase: IRefreshTokenUseCase) {}

  /**
   * Handles the HTTP request to log in a user.
   *
   * @param request - The HTTP request containing the user login data in the body.
   * @returns A promise that resolves to an HTTP response with the authentication tokens.
   */
  async handle(request: IHttpRequest<EmptyRecord>): Promise<IAuthResponseDto> {
    const cookies = request.cookies;

    const deviceId = [
      request.headers["user-agent"],
      request.headers["accept-language"],
      request.headers["sec-ch-ua-platform"],
    ].join("|");

    const ipAddress = request.ip as string;

    const userRefreshToken = cookies[envConfig.auth.refresh_token_name];

    if (!userRefreshToken || typeof userRefreshToken !== "string") {
      throw new UnauthorizedError("Refresh token is missing or invalid");
    }

    const authTokens = await this.refreshTokenUseCase.execute({ token: userRefreshToken, deviceId, ipAddress });

    return authTokens;
  }
}
