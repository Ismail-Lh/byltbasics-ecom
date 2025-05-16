import bcrypt from "bcryptjs";
import { injectable } from "inversify";
import crypto from "node:crypto";

import type { ICryptoProvider } from "@/application/providers";

import { envConfig } from "@/config";

@injectable()
export class CryptoProvider implements ICryptoProvider {
  private readonly SALT_ROUNDS = 12;
  private readonly TOKEN_BYTES = 64;

  /**
   * Generates a hashed value from the given plain text.
   * @param plainText - The plain text to be hashed.
   * @returns A promise that resolves to the hashed value.
   */
  async generateHash(plainText: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.SALT_ROUNDS);

    return await bcrypt.hash(plainText, salt);
  }

  /**
   * Validates whether the given plain text matches the provided hashed value.
   * @param plainText - The plain text to validate.
   * @param hashedValue - The hashed value to compare against.
   * @returns A promise that resolves to a boolean indicating whether the plain text matches the hashed value.
   */
  async validateHashMatch(
    plainText: string,
    hashedValue: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainText, hashedValue);
  }

  /**
   * Generates an unsalted hash from the given plain text.
   * @param plainText - The plain text to be hashed.
   * @returns The unsalted hashed value.
   */
  generateUnsaltedHash(plainText: string): string {
    const hashAlgorithm = envConfig.crypto.hash_algorithm;

    return crypto.hash(hashAlgorithm, plainText, "hex");
  }

  /**
   * Generates a secure random token.
   * @returns A secure random token as a string.
   */
  generateSecureToken(): string {
    return crypto.randomBytes(this.TOKEN_BYTES).toString("hex");
  }
}
