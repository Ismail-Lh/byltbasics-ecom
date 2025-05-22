/* eslint-disable ts/ban-ts-comment */
import { inject, injectable } from "inversify";
import { sign, verify } from "jsonwebtoken";

import type { IJwtTokenProvider, ILogger } from "@/application/providers";
import type { IAuthResponseDto } from "@/domain/auth/dtos";
import type { IDecodedToken, IDecodedTokenDto, IVerifyTokenDto } from "@/domain/auth/dtos/jwt-token";

import { envConfig } from "@/config";
import { TYPES } from "@/infrastructure/di-container/types";

/**
 * JWT Token Provider
 *
 * This class provides methods for generating, verifying, and managing JWT tokens.
 * It includes methods for generating access and refresh tokens, verifying tokens,
 * and checking if a token is expiring soon.
 */
@injectable()
export class JwtTokenProvider implements IJwtTokenProvider {
  // Define the minimum remaining validity time in milliseconds (3 minutes)
  private readonly MIN_TOKEN_VALIDITY_MS: number = 3 * 60 * 1000; // 3 minutes

  constructor(
      @inject(TYPES.Logger) private logger: ILogger,
  ) {}

  /**
   * Verifies a JWT token using the provided secret.
   *
   * @param data - An object containing the JWT token and the secret key.
   * @returns An object containing the decoded token if verification is successful,
   *          or an error if verification fails.
   *
   * @remarks
   * - If the token is valid, `decodedToken` will contain the decoded payload,
   *   `isError` will be `false`, and `error` will be `null`.
   * - If the token is invalid or verification fails, `decodedToken` will be `null`,
   *   `isError` will be `true`, and `error` will contain the error information.
   */
  verifyToken(data: IVerifyTokenDto): IDecodedTokenDto {
    const { token, secret } = data;

    try {
      const decodedToken = verify(token, secret) as IDecodedToken;

      return {
        decodedToken,
        isError: false,
        error: null,
      };
    }
    catch (err) {
      return {
        decodedToken: null,
        isError: true,
        error: err instanceof Error ? err : new Error(String(err)),
      };
    }
  }

  /**
   * Generates an access token for the specified user.
   *
   * @param userId - The ID of the user for whom the token is being generated.
   * @returns The generated access token as a string.
   */
  signAccessToken(userId: string | number): string {
    const { access_token_secret, access_token_expires_in } = envConfig.auth;

    // @ts-ignore
    return sign({
      userId,
    }, access_token_secret, { expiresIn: access_token_expires_in });
  }

  /**
   * Generates a refresh token for the specified user.
   *
   * @param userId - The ID of the user for whom the token is being generated.
   * @returns The generated refresh token as a string.
   */
  signRefreshToken(userId: string | number): string {
    const { refresh_token_secret, refresh_token_expires_in } = envConfig.auth;

    // @ts-ignore
    return sign({
      userId,
    }, refresh_token_secret, { expiresIn: refresh_token_expires_in });
  }

  /**
   * Generates both access and refresh tokens for the specified user.
   *
   * @param userId - The ID of the user for whom the tokens are being generated.
   * @returns An object containing the generated authentication tokens.
   */
  signAuthTokens(userId: string | number): IAuthResponseDto {
    return {
      accessToken: this.signAccessToken(userId),
      refreshToken: this.signRefreshToken(userId),
    };
  }

  /**
   * Checks if the token is expiring soon based on its expiration time.
   *
   * @param exp - The expiration time of the token (in seconds since epoch).
   * @returns True if the token is expiring soon, otherwise false.
   */
  isTokenExpiringSoon(exp: number): boolean {
    // Check if token is expiring soon (within 3 minutes)
    const currentTimeMs = Date.now();
    const expirationTimeMs = exp * 1000; // Convert seconds to milliseconds
    const timeRemainingMs = expirationTimeMs - currentTimeMs;

    if (timeRemainingMs < this.MIN_TOKEN_VALIDITY_MS) {
      this.logger.warn(
        `Token is expiring soon. Remaining validity: ${Math.floor(
          timeRemainingMs / 1000,
        )} seconds.`,
      );

      return true;
    }

    return false;
  }
}
