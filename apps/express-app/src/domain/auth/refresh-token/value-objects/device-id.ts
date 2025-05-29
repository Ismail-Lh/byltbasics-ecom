import { cryptoProvider } from "@/presentation/service-provider";

/**
 * Represents the identifier for a device in the authentication system.
 *
 * This class encapsulates a device identifier and provides functionality to generate a hash
 * from a given input value. The device ID is a crucial part of the refresh token mechanism,
 * allowing the system to identify the device from which authentication requests originate.
 */
export class DeviceId {
  /**
   * The hashed value of the device identifier.
   * @private
   */
  private value: string;

  /**
   * Private constructor that creates a new DeviceId instance.
   * @param value - The hashed device identifier string.
   * @throws Error when the value is falsy.
   * @private
   */
  private constructor(value: string) {
    if (!value) {
      throw new Error("Invalid token format");
    }
    this.value = value;
  }

  /**
   * Generates a DeviceId instance by hashing the provided value.
   * @param value - The raw device identifier string to be hashed.
   * @returns A new DeviceId instance containing the hashed value.
   * @static
   */
  static generateHash(value: string): DeviceId {
    const deviceIdHash = cryptoProvider.generateUnsaltedHash(value);

    return new DeviceId(deviceIdHash);
  }

  /**
   * Gets the hashed device identifier value.
   * @returns The hashed device identifier string.
   */
  get getValue(): string {
    return this.value;
  }
}
