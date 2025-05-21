/**
 * Represents the structure of a decoded authentication token payload.
 *
 * @property payload - The actual payload data of type T.
 * @property iat - The issued-at timestamp (in seconds since epoch).
 * @property exp - The expiration timestamp (in seconds since epoch).
 */
export interface IDecodedToken {
  userId: string | number;
  iat: number;
  exp: number;
}

/**
 * Represents the structure of a decoded authentication token.
 *
 * @property decodedToken - The decoded token payload, or `null` if decoding failed.
 * @property isError - Indicates whether an error occurred during token decoding.
 * @property error - The error encountered during decoding, or `null` if no error occurred.
 */
export interface IDecodedTokenDto {
  decodedToken: IDecodedToken | null;
  isError: boolean;
  error: Error | null;
}
