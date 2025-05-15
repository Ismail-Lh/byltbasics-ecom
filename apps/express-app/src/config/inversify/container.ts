import "reflect-metadata";
import { Container } from "inversify";

import type { ILogger } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { ICreateUserUseCase } from "@/application/use-cases/user";

import { CreateUserUseCase } from "@/application/use-cases/user";
import { Logger } from "@/infrastructure/providers";
import { UserRepository } from "@/infrastructure/repositories/drizzle";

import { TYPES } from "./types";

// Create and configure the container
const container = new Container();

// Initialize container - this function sets up all the bindings
function bootstrapContainer() {
  container
    .bind<ILogger>(TYPES.Logger)
    .to(Logger)
    .inSingletonScope();

  container
    .bind<IUserRepository>(TYPES.UserRepository)
    .to(UserRepository)
    .inSingletonScope();

  container
    .bind<ICreateUserUseCase>(TYPES.CreateUserUseCase)
    .to(CreateUserUseCase)
    .inSingletonScope();

  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
