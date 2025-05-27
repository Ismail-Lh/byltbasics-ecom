/**
 * Data Transfer Object for user authentication login.
 *
 * @property email - The user's email address used for authentication.
 * @property password - The user's password used for authentication.
 * @property deviceId - The unique identifier for the device used for authentication.
 * @property ipAddress - The IP address of the device used for authentication.
 */
export interface IAuthLoginDto {
  email: string;
  password: string;
  deviceId: string;
  ipAddress: string;
}
