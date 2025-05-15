// Import reflect-metadata to enable decorators
import "reflect-metadata";

import type { ILogger } from "@/application/providers";
import type { ICreateUserController } from "@/presentation/http/controllers/user";

import { container } from "./container";
import { TYPES } from "./types";

export const logger = container.get<ILogger>(TYPES.Logger);

export const createUserController = container.get<ICreateUserController>(
  TYPES.CreateUserController,
);
