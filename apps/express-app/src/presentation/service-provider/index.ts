// Import reflect-metadata to enable decorators
import "reflect-metadata";

import type { ILogger } from "@/application/providers";
import type { ICreateUserController } from "@/presentation/http/controllers/user";

import { container } from "@/infrastructure/di-container/container";
import { TYPES } from "@/infrastructure/di-container/types";

export const logger = container.get<ILogger>(TYPES.Logger);

export const createUserController = container.get<ICreateUserController>(
  TYPES.CreateUserController,
);
