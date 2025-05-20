import type { IUser } from "@byltbasics/types";

import { inject, injectable } from "inversify";

import type { ICryptoProvider, ILogger } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { IAuthLoginDto } from "@/domain/auth/dtos";
import type { IResponseDTO } from "@/domain/shared/dtos";

import { Email, Password } from "@/domain/user/value-objects";
import { TYPES } from "@/infrastructure/di-container/types";
import { ForbiddenError, NotFoundError } from "@/infrastructure/errors";

import type { IAuthLoginUseCase } from "./auth-login.interface";

/**
 * Use case for authenticating a user with email and password.
 *
 * The AuthLoginUseCase class handles the login process by verifying the user's credentials.
 * It interacts with the user repository to fetch user data, uses a crypto provider to validate
 * the password, and logs authentication attempts. If authentication is successful, it returns
 * the authenticated user data wrapped in a response DTO. Otherwise, it throws appropriate errors.
 *
 * Dependencies are injected via InversifyJS:
 * - IUserRepository: For accessing user data.
 * - ICryptoProvider: For password hash validation.
 * - ILogger: For logging authentication events.
 */
@injectable()
export class AuthLoginUseCase implements IAuthLoginUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository,
    @inject(TYPES.CryptoProvider) private cryptoProvider: ICryptoProvider,
    @inject(TYPES.Logger) private logger: ILogger,
  ) {}

  /**
   * Authenticates a user with the provided email and password.
   *
   * This method attempts to find a user by their email address and validates the provided password
   * against the stored password hash. If authentication is successful, it returns a response DTO
   * containing the user data. If the user does not exist or the password is invalid, appropriate
   * errors are thrown and login attempts are logged.
   *
   * @param data - The login credentials containing the user's email and password.
   * @returns A promise that resolves to a response DTO containing the authenticated user.
   * @throws NotFoundError If the user with the given email does not exist.
   * @throws ForbiddenError If the password is invalid.
   */
  async execute(data: IAuthLoginDto): Promise<IResponseDTO<IUser>> {
    const { email, password } = data;

    const validatedEmail = new Email(email);
    const validatedPassword = new Password(password);

    // Get the user first to check if they exist
    const user = await this.userRepository.findByEmail(validatedEmail.address);

    if (!user) {
      this.logger.warn("Login attempt with non-existent email", {
        email,
      });

      throw new NotFoundError("User not found");
    }

    const isPasswordMatch = await this.cryptoProvider.validateHashMatch(validatedPassword.value, user.password);

    if (!isPasswordMatch) {
      this.logger.warn("Failed login attempt - invalid password", {
        userId: user.id,
        email,
      });

      throw new ForbiddenError("Invalid password or email");
    }

    this.logger.info("User logged in successfully", {
      userId: user.id,
      email,
    });

    return {
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: user,
    };
  }
}
