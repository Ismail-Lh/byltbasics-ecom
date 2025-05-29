import { inject, injectable } from "inversify";

import type { IJwtTokenProvider } from "@/application/providers";
import type { IRefreshTokenRepository } from "@/application/repositories";
import type { IAuthResponseDto } from "@/domain/auth/dtos";
import type { IRefreshTokenReqDto } from "@/domain/auth/refresh-token";

import { envConfig } from "@/config";
import { RefreshTokenEntity } from "@/domain/auth/refresh-token";
import { TYPES } from "@/infrastructure/di-container/types";
import { UnauthorizedError } from "@/infrastructure/errors";

/**
 * Interface for the use case of user authentication refresh token.
 *
 * @interface
 */
export interface IRefreshTokenUseCase {
  /**
   * Executes the refresh token use case.
   *
   * @async
   * @param {IRefreshTokenReqDto} data - The data for refreshing the authentication token.
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response DTO.
   */
  execute: (data: IRefreshTokenReqDto) => Promise<IAuthResponseDto>;
}

@injectable()
export class RefreshTokenUseCase implements IRefreshTokenUseCase {
  constructor(@inject(TYPES.RefreshTokenRepository) private refreshTokenRepository: IRefreshTokenRepository, @inject(TYPES.JwtTokenProvider) private jwtTokenProvider: IJwtTokenProvider) {}

  /**
   * Executes the refresh token use case.
   *
   * @async
   * @param {IRefreshTokenReqDto} data - The data for refreshing the authentication token.
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response DTO.
   */
  async execute(data: IRefreshTokenReqDto): Promise<IAuthResponseDto> {
    const { token, deviceId, ipAddress } = data;

    const refreshTokenEntity = new RefreshTokenEntity();

    const tokenHash = refreshTokenEntity.generateHashedToken(token);

    const tokenRecord = await this.refreshTokenRepository.findByToken(tokenHash);

    if (!tokenRecord) {
      throw new UnauthorizedError("Invalid refresh token");
    }

    const deviceIdHash = refreshTokenEntity.generateDeviceIdHash(deviceId);
    const ipAddressHash
      = refreshTokenEntity.generateIpAddressHash(ipAddress);

    if (
      tokenRecord.deviceId !== deviceIdHash
      || tokenRecord.ipAddress !== ipAddressHash
    ) {
      await this.refreshTokenRepository.revokeAllUserTokens(
        tokenRecord.userId,
        "suspicious_activity_detected",
      );

      throw new UnauthorizedError("Invalid device or IP address");
    }

    const createTokenBody = refreshTokenEntity.createTokenRequestBody({
      userId: tokenRecord.userId,
      deviceId,
      ipAddress,
      ttl: envConfig.auth.refresh_token_expires_in,
    });

    // Revoke the old token
    await this.refreshTokenRepository.revokeToken(tokenRecord.id, "refresh_token_used");

    await this.refreshTokenRepository.create(createTokenBody);

    const accessToken = this.jwtTokenProvider.signAccessToken(tokenRecord.userId);

    return { accessToken, refreshToken: refreshTokenEntity.unhashedToken };
  }
}
