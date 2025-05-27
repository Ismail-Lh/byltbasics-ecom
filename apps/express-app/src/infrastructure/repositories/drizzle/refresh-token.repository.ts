import { injectable } from "inversify";

import type { IRefreshTokenRepository } from "@/application/repositories";
import type { ICreateRefreshTokenReqDto } from "@/domain/auth/refresh-token";

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
}
