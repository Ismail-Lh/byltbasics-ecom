/**
 * Data transfer object for refresh token requests.
 * This interface defines the structure of data required for refreshing user authentication tokens.
 */
export interface IRefreshTokenReqDto {
  /**
   * The current refresh token that will be validated and exchanged for a new one
   */
  token: string;

  /**
   * Unique identifier of the device from which the refresh request is made
   */
  deviceId: string;

  /**
   * IP address of the client making the refresh token request
   */
  ipAddress: string;
}
