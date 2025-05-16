/**
 * Interface representing a cryptographic provider for hashing and token generation.
 */
export interface ICryptoProvider {
  /**
   * Generates a hashed value from the given plain text.
   *
   * @param plainText - The plain text to be hashed.
   * @returns A promise that resolves to the hashed value.
   */
  generateHash: (plainText: string) => Promise<string>;

  /**
   * Validates whether the given plain text matches the provided hashed value.
   *
   * @param plainText - The plain text to validate.
   * @param hashedValue - The hashed value to compare against.
   * @returns A promise that resolves to a boolean indicating whether the plain text matches the hashed value.
   */
  validateHashMatch: (plainText: string, hashedValue: string) => Promise<boolean>;

  /**
   * Generates an unsalted hash from the given plain text.
   *
   * @param plainText - The plain text to be hashed.
   * @returns The unsalted hashed value.
   */
  generateUnsaltedHash: (plainText: string) => string;

  /**
   * Generates a secure random token.
   *
   * @returns A secure random token as a string.
   */
  generateSecureToken: () => string;
}
