/**
 * Represents the expiration time of a refresh token.
 * This value object encapsulates the logic for token expiration.
 */
export class ExpiresAt {
  /**
   * The underlying expiration date value
   * @private
   */
  private value: Date;

  /**
   * Private constructor to enforce creation through static factory methods
   * @param value - The expiration date
   */
  private constructor(value: Date) {
    this.value = value;
  }

  /**
   * Creates an ExpiresAt instance based on a time-to-live value in seconds
   * @param ttl - Time-to-live in seconds
   * @returns A new ExpiresAt instance set to expire after the specified TTL
   */
  static createFromTTL(ttl: string): ExpiresAt {
    const ttlInSeconds = this.parseTTL(ttl);
    const expirationDate = new Date(Date.now() + ttlInSeconds * 1000);
    return new ExpiresAt(expirationDate);
  }

  /**
   * Parses a TTL string into seconds
   * @param ttl - The TTL string to parse (e.g., "1h", "30m", "15s")
   * @returns The TTL in seconds
   */
  static parseTTL(ttl: string): number {
    const match = ttl.match(/^(\d+)([smhd])$/);
    if (!match) {
      throw new Error("Invalid TTL format. Use '1h', '30m', '15s', etc.");
    }
    const value = Number.parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
      case "s": return value; // seconds
      case "m": return value * 60; // minutes
      case "h": return value * 3600; // hours
      case "d": return value * 86400; // days
      default: throw new Error("Invalid TTL unit. Use 's', 'm', 'h', or 'd'.");
    }
  }

  /**
   * Checks if the token has expired
   * @returns true if the token's expiration date is in the past, false otherwise
   */
  isExpired(): boolean {
    return this.value <= new Date();
  }

  /**
   * Gets the underlying Date value
   * @returns The expiration date
   */
  get getValue(): Date {
    return this.value;
  }

  /**
   * Gets the ISO string representation of the expiration date
   * @returns The expiration date as an ISO string
   */
  get toString(): string {
    return this.value.toISOString();
  }
}
