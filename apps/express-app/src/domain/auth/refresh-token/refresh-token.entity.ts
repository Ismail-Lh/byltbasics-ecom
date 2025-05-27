import type { ICreateRefreshTokenEntityDto } from "./dtos";

import { DeviceId, ExpiresAt, IpAddress, Token } from "./value-objects";

/**
 * Represents a refresh token entity used for authentication purposes.
 * This entity contains user identification, token value, and related metadata.
 */
export class RefreshTokenEntity {
  /** Unique identifier of the user this token belongs to */
  readonly userId: string;

  /** The secure token value generated using cryptographically safe methods */
  readonly token: string;

  /** ISO timestamp string representing when this token will expire */
  readonly expiresAt: string;

  /** Hashed identifier of the device used during authentication */
  readonly deviceId: string;

  /** Hashed IP address from which the authentication request originated */
  readonly ipAddress: string;

  /**
   * Creates a new refresh token entity
   * @param data - The data required to create a refresh token
   */
  constructor(data: ICreateRefreshTokenEntityDto) {
    this.userId = data.userId;
    this.token = Token.generate().getValue;
    this.expiresAt = ExpiresAt.createFromTTL(data.ttl).toString;
    this.deviceId = DeviceId.generateHash(data.deviceId).getValue;
    this.ipAddress = IpAddress.generateHash(data.ipAddress).getValue;
  }
}
