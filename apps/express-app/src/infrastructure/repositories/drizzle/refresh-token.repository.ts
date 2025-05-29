import { eq } from "drizzle-orm";
import { injectable } from "inversify";

import type { IRefreshTokenRepository } from "@/application/repositories";
import type { ICreateRefreshTokenReqDto, IRefreshToken } from "@/domain/auth/refresh-token";

import db from "@/infrastructure/databases/drizzle-supabase";
import { refreshTokensTable } from "@/infrastructure/databases/drizzle-supabase/schemas";

/**
 * Repository class for managing refresh tokens using Drizzle ORM.
 * This class implements the IRefreshTokenRepository interface and provides
 * functionality for creating refresh tokens in the database.
 */
@injectable()
export class RefreshTokenRepository implements IRefreshTokenRepository {
  /**
   * Creates a new instance of the RefreshTokenRepository.
   */
  constructor() {}

  /**
   * Creates a new refresh token record in the database.
   *
   * @param data - The data transfer object containing the refresh token information
   * @returns A promise that resolves when the refresh token has been successfully created
   */
  async create(data: ICreateRefreshTokenReqDto): Promise<void> {
    await db.insert(refreshTokensTable).values(data);
  }

  /**
   * Finds a refresh token by its token string.
   * @param token - The refresh token string to search for in the repository
   * @returns A promise that resolves to the found refresh token or null if not found
   */
  async findByToken(token: string): Promise<IRefreshToken | null> {
    const result = await db.select().from(refreshTokensTable).where(eq(refreshTokensTable.token, token)).limit(1);

    return result.length > 0 ? result[0] : null;
  }

  /**
   * Revokes all refresh tokens for a specific user.
   * @param userId - The ID of the user whose tokens are to be revoked
   * @param revocationReason - The reason for revoking the tokens
   * @return A promise that resolves when all tokens are successfully revoked
   */
  async revokeAllUserTokens(userId: string, revocationReason: string): Promise<void> {
    await db.update(refreshTokensTable).set({ isRevoked: true, revocationReason }).where(eq(refreshTokensTable.userId, userId));
  }

  /**
   * Revokes a specific refresh token by its token string.
   * @param tokenId - The ID of the refresh token to be revoked
   * @param revocationReason - The reason for revoking the token
   * @returns A promise that resolves when the token is successfully revoked
   */
  async revokeToken(tokenId: string, revocationReason: string): Promise<void> {
    await db.update(refreshTokensTable).set({ isRevoked: true, revocationReason }).where(eq(refreshTokensTable.id, tokenId));
  }
}
