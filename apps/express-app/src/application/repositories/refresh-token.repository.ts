import type { ICreateRefreshTokenReqDto, IRefreshToken } from "@/domain/auth/refresh-token";

/**
 * Interface for refresh token repository operations.
 * Provides methods to manage refresh tokens in the persistence layer.
 */
export interface IRefreshTokenRepository {
  /**
   * Creates a new refresh token in the repository.
   * @param data - Data required to create a refresh token
   * @returns A promise that resolves when the token is successfully created
   */
  create: (data: ICreateRefreshTokenReqDto) => Promise<void>;

  /**
   * Finds a refresh token by its token string.
   * @param token - The refresh token string to search for in the repository
   * @returns A promise that resolves to the found refresh token or null if not found
   */
  findByToken: (token: string) => Promise<IRefreshToken | null>;

  /**
   * Revokes all refresh tokens for a specific user.
   * @param userId - The ID of the user whose tokens are to be revoked
   * @param revocationReason - The reason for revoking the tokens
   * @return A promise that resolves when all tokens are successfully revoked
   */
  revokeAllUserTokens: (userId: string, revocationReason: string) => Promise<void>;

  /**
   * Revokes a specific refresh token by its token string.
   * @param tokenId - The ID of the refresh token to be revoked
   * @param revocationReason - The reason for revoking the token
   * @returns A promise that resolves when the token is successfully revoked
   */
  revokeToken: (tokenId: string, revocationReason: string) => Promise<void>;
}
