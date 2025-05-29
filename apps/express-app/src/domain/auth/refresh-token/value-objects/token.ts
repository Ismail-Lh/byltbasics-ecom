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
   * The hashed value of the token.
   * @private
   */
  private hashedTokenValue: string;

  /**
   * The raw token value before hashing.
   * This value is not stored in the database for security reasons.
   * It is only used for comparison during authentication.
   * @private
   */
  private unhashedTokenValue: string;

  /**
   *  Constructor for the Token class.
   */
  constructor() {
    this.unhashedTokenValue = cryptoProvider.generateSecureToken();
    this.hashedTokenValue = this.generateHashedToken(this.unhashedTokenValue);
  }

  /**
   * Generates a new secure token.
   * Creates a random token and then hashes it without salt.
   * @returns A new Token instance containing the hashed value
   */
  generateHashedToken(unhashedTokenValue: string): string {
    const hashedTokenValue = cryptoProvider.generateUnsaltedHash(unhashedTokenValue);

    return hashedTokenValue;
  }

  /**
   * Retrieves the unhashedToken's value.
   * @returns The string value of the unhashedToken
   */
  get getUnhashedTokenValue(): string {
    return this.unhashedTokenValue;
  }

  /**
   * Retrieves the hashedToken's value.
   * @returns The string value of the hashedToken
   */
  get getHashedTokenValue(): string {
    return this.hashedTokenValue;
  }
}
