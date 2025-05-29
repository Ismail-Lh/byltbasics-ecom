/**
 * Interface defining the data required to create a refresh token entity.
 */
export interface ICreateRefreshTokenEntityDto {
  /** The unique identifier of the user the token belongs to */
  userId: string;
  /** Time to live for the token in string format (e.g., '1h', '30m', '1d') */
  ttl: string; // Time to live (e.g., 1h, 30m, 1d, etc.)
  /** Identifier for the device from which the authentication request originated */
  deviceId: string;
  /** IP address from which the authentication request originated */
  ipAddress: string;
}
