import type { IAuthResponseDto } from "@/domain/auth/dtos";
import type { IDecodedTokenDto, IVerifyTokenDto } from "@/domain/auth/dtos/jwt-token";

/**
 * Interface for JWT Token Provider
 *
 * Defines methods for verifying, signing, and generating JWT tokens,
 * as well as checking token expiration.
 */
export interface IJwtTokenProvider {
  /**
   * Verifies the provided token data and returns the decoded token payload.
   * @param data - The data required to verify the token.
   * @returns The decoded token data.
   */
  verifyToken: (data: IVerifyTokenDto) => IDecodedTokenDto;

  /**
   * Generates a new access token for the specified user.
   * @param userId - The ID of the user for whom the token is being generated.
   * @returns The generated access token as a string.
   */
  signAccessToken: (userId: string | number) => string;

  /**
   * Generates a new refresh token for the specified user.
   * @param userId - The ID of the user for whom the token is being generated.
   * @returns The generated refresh token as a string.
   */
  signRefreshToken: (userId: string | number) => string;

  /**
   * Generates both access and refresh tokens for the specified user.
   * @param userId - The ID of the user for whom the tokens are being generated.
   * @returns An object containing the generated authentication tokens.
   */
  signAuthTokens: (userId: string | number) => IAuthResponseDto;

  /**
   * Checks if the token is expiring soon based on its expiration time.
   * @param exp - The expiration time of the token (in seconds since epoch).
   * @returns True if the token is expiring soon, otherwise false.
   */
  isTokenExpiringSoon: (exp: number) => boolean;
}
