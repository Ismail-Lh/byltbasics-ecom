import "reflect-metadata";
import { Container } from "inversify";

import type { IApiResponseSanitizer, ICryptoProvider, IJwtTokenProvider, ILogger } from "@/application/providers";
import type { IRefreshTokenRepository, IUserRepository } from "@/application/repositories";
import type { IAuthLoginUseCase, IRefreshTokenUseCase } from "@/application/use-cases/auth";
import type { ICreateUserUseCase } from "@/application/use-cases/user";
import type { IAuthLoginController, IAuthRegisterController, IRefreshTokenController } from "@/presentation/controllers/auth";

import { AuthLoginUseCase, RefreshTokenUseCase } from "@/application/use-cases/auth";
import { CreateUserUseCase } from "@/application/use-cases/user";
import { ApiResponseSanitizer, CryptoProvider, JwtTokenProvider, Logger } from "@/infrastructure/providers";
import { RefreshTokenRepository, UserRepository } from "@/infrastructure/repositories/drizzle";
import { AuthLoginController, AuthRegisterController, RefreshTokenController } from "@/presentation/controllers/auth";

import { TYPES } from "./types";

// Create and configure the container
const container = new Container({ defaultScope: "Singleton" });

// Initialize container - this function sets up all the bindings
function bootstrapContainer() {
  container
    .bind<ILogger>(TYPES.Logger)
    .to(Logger);

  container
    .bind<ICryptoProvider>(TYPES.CryptoProvider)
    .to(CryptoProvider);

  container
    .bind<IApiResponseSanitizer>(TYPES.ApiResponseSanitizer)
    .to(ApiResponseSanitizer);

  container
    .bind<IJwtTokenProvider>(TYPES.JwtTokenProvider)
    .to(JwtTokenProvider);

  container
    .bind<IUserRepository>(TYPES.UserRepository)
    .to(UserRepository);

  container
    .bind<ICreateUserUseCase>(TYPES.CreateUserUseCase)
    .to(CreateUserUseCase);

  container
    .bind<IAuthRegisterController>(TYPES.AuthRegisterController)
    .to(AuthRegisterController);

  container
    .bind<IAuthLoginUseCase>(TYPES.AuthLoginUseCase)
    .to(AuthLoginUseCase);

  container
    .bind<IAuthLoginController>(TYPES.AuthLoginController)
    .to(AuthLoginController);

  container
    .bind<IRefreshTokenRepository>(TYPES.RefreshTokenRepository)
    .to(RefreshTokenRepository);

  container
    .bind<IRefreshTokenUseCase>(TYPES.RefreshTokenUseCase)
    .to(RefreshTokenUseCase);

  container
    .bind<IRefreshTokenController>(TYPES.RefreshTokenController)
    .to(RefreshTokenController);

  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
