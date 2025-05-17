import "reflect-metadata";
import { Container } from "inversify";

import type { IApiResponseSanitizer, ICryptoProvider, ILogger } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { ICreateUserUseCase } from "@/application/use-cases/user";
import type { ICreateUserController } from "@/presentation/http/controllers/user";

import { CreateUserUseCase } from "@/application/use-cases/user";
import { ApiResponseSanitizer, CryptoProvider, Logger } from "@/infrastructure/providers";
import { UserRepository } from "@/infrastructure/repositories/drizzle";
import { CreateUserController } from "@/presentation/http/controllers/user";

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
    .bind<IUserRepository>(TYPES.UserRepository)
    .to(UserRepository);

  container
    .bind<ICreateUserUseCase>(TYPES.CreateUserUseCase)
    .to(CreateUserUseCase);

  container
    .bind<ICreateUserController>(TYPES.CreateUserController)
    .to(CreateUserController);

  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
