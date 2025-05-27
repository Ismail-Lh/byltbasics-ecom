import { cryptoProvider } from "@/presentation/service-provider";

/**
 * Represents a secure authentication token.
 *
 * This class is responsible for storing and validating token values
 * that are used for authentication purposes. Tokens must be at least
 * 64 characters in length for security purposes.
 */
export class Token {
  /**
   * The actual token value stored internally.
   * @private
   */
  private value: string;

  /**
   * Creates a new Token instance.
   * @param value - The token string value to store
   * @throws Error if the token format is invalid (less than 64 characters)
   * @private
   */
  private constructor(value: string) {
    if (value.length < 64) {
      throw new Error("Invalid token format");
    }
    this.value = value;
  }

  /**
   * Generates a new secure token.
   * Creates a random token and then hashes it without salt.
   * @returns A new Token instance containing the hashed value
   * @static
   */
  static generate(): Token {
    const randomToken = cryptoProvider.generateSecureToken();
    const tokenHash = cryptoProvider.generateUnsaltedHash(randomToken);

    return new Token(tokenHash);
  }

  /**
   * Retrieves the token's value.
   * @returns The string value of the token
   */
  get getValue(): string {
    return this.value;
  }
}
