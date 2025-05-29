import type { Request, Response } from "express";

import { Router } from "express";
import httpStatus from "http-status";

import type { IAuthLoginDto, IAuthResponseDto } from "@/domain/auth/dtos";

import { envConfig } from "@/config";
import { expressAdapter } from "@/presentation/adapters/express";
import { apiResponseSanitizer, authLoginController, authRegisterController, refreshTokenController } from "@/presentation/service-provider";

import type { EmptyRecord } from "../../types";

import { accessTokenCookieConfig, refreshTokenCookieConfig } from "../config/cookies";
import { validateRequest } from "../middlewares";
import { authLoginSchema, createUserSchema } from "../middlewares/validations/schemas";

/**
 * Router for handling user-related routes.
 */
const authRoutes = Router();

/**
 * Endpoint to create a new user.
 */
authRoutes.post("/register", validateRequest({ body: createUserSchema }), async (request: Request, response: Response) => {
  await expressAdapter(request, authRegisterController);

  response.status(httpStatus.CREATED).json(apiResponseSanitizer.successResponse({ message: "User registered successfully", statusCode: httpStatus.CREATED }));
});

/**
 * Endpoint to log in a user.
 */
authRoutes.post("/login", validateRequest({ body: authLoginSchema }), async (request: Request, response: Response) => {
  const data = await expressAdapter<IAuthLoginDto, IAuthResponseDto, EmptyRecord, EmptyRecord>(request, authLoginController);

  const { accessToken, refreshToken } = data;

  // Set the access and refresh token cookies
  response.cookie(envConfig.auth.access_token_name, accessToken, accessTokenCookieConfig);
  response.cookie(envConfig.auth.refresh_token_name, refreshToken, refreshTokenCookieConfig);

  response.status(httpStatus.OK).json(apiResponseSanitizer.successResponse({ message: "Login successful" }));
});

/**
 * Endpoint to refresh access token.
 */
authRoutes.post("/refresh", async (request: Request, response: Response) => {
  const data = await expressAdapter(request, refreshTokenController);

  const { accessToken, refreshToken } = data;

  // Set the access and refresh token cookies
  response.cookie(envConfig.auth.access_token_name, accessToken, accessTokenCookieConfig);
  response.cookie(envConfig.auth.refresh_token_name, refreshToken, refreshTokenCookieConfig);

  response.status(httpStatus.OK).json(apiResponseSanitizer.successResponse({ message: "Refresh token successful" }));
});

export { authRoutes };
