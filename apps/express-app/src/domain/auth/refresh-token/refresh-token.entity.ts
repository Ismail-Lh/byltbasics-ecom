import type { ICreateRefreshTokenEntityDto, ICreateRefreshTokenReqDto } from "./dtos";

import { DeviceId, ExpiresAt, IpAddress, Token } from "./value-objects";

/**
 * Represents a refresh token entity used for authentication purposes.
 * This entity contains user identification, token value, and related metadata.
 */
export class RefreshTokenEntity {
  readonly unhashedToken: string;

  constructor() {
    const token = new Token();

    this.unhashedToken = token.getUnhashedTokenValue;
  }

  createTokenRequestBody(data: ICreateRefreshTokenEntityDto): ICreateRefreshTokenReqDto {
    return {
      userId: data.userId,
      token: this.generateHashedToken(this.unhashedToken),
      expiresAt: ExpiresAt.createFromTTL(data.ttl).toString,
      deviceId: this.generateDeviceIdHash(data.deviceId),
      ipAddress: this.generateIpAddressHash(data.ipAddress),
    };
  }

  generateHashedToken(rawToken: string): string {
    return new Token().generateHashedToken(rawToken);
  }

  generateDeviceIdHash(deviceId: string): string {
    return DeviceId.generateHash(deviceId).getValue;
  }

  generateIpAddressHash(ipAddress: string): string {
    return IpAddress.generateHash(ipAddress).getValue;
  }
}
