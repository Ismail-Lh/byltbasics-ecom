import { inject, injectable } from "inversify";

import type { ICryptoProvider, IJwtTokenProvider, ILogger } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { IAuthLoginDto, IAuthResponseDto } from "@/domain/auth/dtos";

import { Email, Password } from "@/domain/user/value-objects";
import { TYPES } from "@/infrastructure/di-container/types";
import { ForbiddenError, NotFoundError } from "@/infrastructure/errors";

import type { IAuthLoginUseCase } from "./auth-login.interface";

/**
 * AuthLoginUseCase
 *
 * This class implements the IAuthLoginUseCase interface and provides the functionality
 * for user authentication login. It handles the process of validating user credentials,
 * checking password matches, and generating authentication tokens.
 */
@injectable()
export class AuthLoginUseCase implements IAuthLoginUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository,
    @inject(TYPES.CryptoProvider) private cryptoProvider: ICryptoProvider,
    @inject(TYPES.JwtTokenProvider) private jwtTokenProvider: IJwtTokenProvider,
    @inject(TYPES.Logger) private logger: ILogger,
  ) {}

  /**
   * Executes the auth login use case.
   *
   * @async
   * @param {IAuthLoginDto} data - The data for user authentication login.
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response DTO.
   */
  async execute(data: IAuthLoginDto): Promise<IAuthResponseDto> {
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

    const authTokens = this.jwtTokenProvider.signAuthTokens(user.id);

    this.logger.info("User logged in successfully", {
      userId: user.id,
      email,
    });

    return authTokens;
  }
}
