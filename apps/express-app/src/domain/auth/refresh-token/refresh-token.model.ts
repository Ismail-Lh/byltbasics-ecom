/**
 * Interface representing a refresh token in the authentication system.
 * This interface defines the structure of a refresh token, including its properties and their types.
 */
export interface IRefreshToken {
  /**
   * Unique identifier for the refresh token.
   */
  id: string;

  /**
   * The actual refresh token string.
   */
  token: string;

  /**
   * The user ID associated with this refresh token.
   */
  userId: string;

  /**
   * The device ID from which the refresh token was issued.
   */
  deviceId: string;

  /**
   * The IP address of the client that issued the refresh token.
   */
  ipAddress: string | null;

  /**
   * The expiration date of the refresh token.
   */
  expiresAt: string;

  /**
   * Indicates whether the refresh token is revoked.
   */

  isRevoked: boolean;
  /**
   * The reason for revocation, if applicable.
   */
  revocationReason: string | null;

  /**
   * The date and time when the refresh token was created.
   */
  createdAt: string;
  /**
   * The date and time when the refresh token was last updated.
   */
  updatedAt: string;

}
