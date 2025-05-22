/**
 * Data Transfer Object for verifying authentication tokens.
 *
 * @property token - The JWT or authentication token to be verified.
 * @property secret - The secret key used to verify the token's signature.
 */
export interface IVerifyTokenDto {
  token: string;
  secret: string;
}
