/**
 * Data Transfer Object for user authentication login.
 *
 * @property email - The user's email address used for authentication.
 * @property password - The user's password used for authentication.
 */
export interface IAuthLoginDto {
  email: string;
  password: string;
}
