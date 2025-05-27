/**
 * Data Transfer Object for creating a refresh token.
 * This DTO contains all necessary information to create a new refresh token in the system.
 */
export interface ICreateRefreshTokenReqDto {
  /** Unique identifier of the user this token belongs to */
  userId: string;
  /** The refresh token string value */
  token: string;
  /** ISO string representation of the token's expiration date */
  expiresAt: string;
  /** Unique identifier of the device that requested the token */
  deviceId: string;
  /** IP address from which the token was requested */
  ipAddress: string;
  /** Optional reason for token revocation, if applicable */
  revocationReason?: string;
}
