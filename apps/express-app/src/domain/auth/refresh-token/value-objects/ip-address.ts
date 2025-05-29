import { cryptoProvider } from "@/presentation/service-provider";

/**
 * Represents an IP address as a value object, storing it as a hashed value.
 *
 * This class encapsulates an IP address and provides functionality to generate
 * a hash from a raw IP address string. The original IP address is never stored,
 * only its hashed representation for security and privacy purposes.
 */
export class IpAddress {
  /**
   * The hashed representation of the IP address
   * @private
   */
  private value: string;

  /**
   * Private constructor to enforce creation through static factory methods
   * @param value - The hashed IP address string
   * @throws {Error} When the provided value is empty or falsy
   * @private
   */
  private constructor(value: string) {
    if (!value) {
      throw new Error("Invalid token format");
    }
    this.value = value;
  }

  /**
   * Creates an IpAddress instance by generating a hash of the provided IP address
   * @param value - The raw IP address string to hash
   * @returns A new IpAddress instance containing the hashed value
   * @static
   */
  static generateHash(value: string): IpAddress {
    const ipAddressHash = cryptoProvider.generateUnsaltedHash(value);

    return new IpAddress(ipAddressHash);
  }

  /**
   * Gets the hashed IP address value
   * @returns The hashed IP address string
   */
  get getValue(): string {
    return this.value;
  }
}
