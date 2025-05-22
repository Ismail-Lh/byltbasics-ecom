/**
 * Data Transfer Object representing the response returned after a successful authentication.
 *
 * @property accessToken - The JWT access token used for authenticating subsequent requests.
 * @property refreshToken - The JWT refresh token used to obtain new access tokens when the current one expires.
 */
export interface IAuthResponseDto {
  accessToken: string;
  refreshToken: string;
}
