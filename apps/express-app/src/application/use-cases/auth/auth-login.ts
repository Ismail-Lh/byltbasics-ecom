import { inject, injectable } from "inversify";

import type { ICryptoProvider, IJwtTokenProvider, ILogger } from "@/application/providers";
import type { IRefreshTokenRepository, IUserRepository } from "@/application/repositories";
import type { IAuthLoginDto, IAuthResponseDto } from "@/domain/auth/dtos";

import { envConfig } from "@/config";
import { RefreshTokenEntity } from "@/domain/auth/refresh-token";
import { Email, Password } from "@/domain/user/value-objects";
import { TYPES } from "@/infrastructure/di-container/types";
import { ForbiddenError } from "@/infrastructure/errors";

/**
 * Interface for the use case of user authentication login.
 *
 * @interface
 */
export interface IAuthLoginUseCase {
  /**
   * Executes the auth login use case.
   *
   * @async
   * @param {IAuthLoginDto} data - The data for user authentication login.
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response DTO.
   */
  execute: (data: IAuthLoginDto) => Promise<IAuthResponseDto>;
}

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
    @inject(TYPES.RefreshTokenRepository) private refreshTokenRepository: IRefreshTokenRepository,
    @inject(TYPES.CryptoProvider) private cryptoProvider: ICryptoProvider,
    @inject(TYPES.JwtTokenProvider) private jwtTokenProvider: IJwtTokenProvider,
    @inject(TYPES.Logger) private logger: ILogger,
  ) {}

  /**
   * Executes the auth login use case.
   *
   * This method validates the user's credentials, checks if the user exists,
   * verifies the password, creates a refresh token, and generates an access token.
   * It also logs authentication events for security monitoring.
   *
   * @async
   * @param {IAuthLoginDto} data - The login data containing email, password, deviceId, and ipAddress
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response with access and refresh tokens
   * @throws {ForbiddenError} - If the email doesn't exist or the password is incorrect
   */
  async execute(data: IAuthLoginDto): Promise<IAuthResponseDto> {
    const { email, password, deviceId, ipAddress } = data;

    const validatedEmail = new Email(email);
    const validatedPassword = new Password(password);

    // Get the user first to check if they exist
    const user = await this.userRepository.findByEmail(validatedEmail.address);

    if (!user) {
      this.logger.warn("Login attempt with non-existent email", {
        email,
      });

      throw new ForbiddenError("Invalid password or email.");
    }

    const isPasswordMatch = await this.cryptoProvider.validateHashMatch(validatedPassword.value, user.password);

    if (!isPasswordMatch) {
      this.logger.warn("Failed login attempt - invalid password", {
        userId: user.id,
        email,
      });

      throw new ForbiddenError("Invalid password or email");
    }

    const refreshToken = new RefreshTokenEntity({ userId: user.id, deviceId, ipAddress, ttl: envConfig.auth.refresh_token_expires_in });

    await this.refreshTokenRepository.create(refreshToken);

    const accessToken = this.jwtTokenProvider.signAccessToken(user.id);

    this.logger.info("User logged in successfully", {
      userId: user.id,
      email,
    });

    return { accessToken, refreshToken: refreshToken.token };
  }
}
