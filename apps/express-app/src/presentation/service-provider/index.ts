// Import reflect-metadata to enable decorators
import "reflect-metadata";

import type { IApiResponseSanitizer, ICryptoProvider, ILogger } from "@/application/providers";
import type { IAuthLoginController, IAuthRegisterController, IRefreshTokenController } from "@/presentation/controllers/auth";

import { container } from "@/infrastructure/di-container/container";
import { TYPES } from "@/infrastructure/di-container/types";

export const logger = container.get<ILogger>(TYPES.Logger);

export const cryptoProvider = container.get<ICryptoProvider>(TYPES.CryptoProvider);

export const apiResponseSanitizer = container.get<IApiResponseSanitizer>(
  TYPES.ApiResponseSanitizer,
);

export const authRegisterController = container.get<IAuthRegisterController>(
  TYPES.AuthRegisterController,
);

export const authLoginController = container.get<IAuthLoginController>(
  TYPES.AuthLoginController,
);

export const refreshTokenController = container.get<IRefreshTokenController>(
  TYPES.RefreshTokenController,
);
