import type { ICreateRefreshTokenReqDto } from "@/domain/auth/refresh-token";

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
}
