import type { Request, Response } from "express";

import { Router } from "express";

import { envConfig } from "@/config";
import { authLoginSchema } from "@/domain/auth/schemas";
import { createUserSchema } from "@/domain/user/schemas";
import { expressAdapter } from "@/presentation/adapters/express";
import { authLoginController, authRegisterController } from "@/presentation/service-provider";

import { accessTokenCookieConfig, refreshTokenCookieConfig } from "../config/cookies";
import { validateRequest } from "../middlewares";

/**
 * Router for handling user-related routes.
 */
const authRoutes = Router();

/**
 * Endpoint to create a new user.
 */
authRoutes.post("/register", validateRequest({ body: createUserSchema }), async (request: Request, response: Response) => {
  const res = await expressAdapter(request, authRegisterController);

  response.status(res.statusCode).json(res.body);
});

/**
 * Endpoint to log in a user.
 */
authRoutes.post("/login", validateRequest({ body: authLoginSchema }), async (request: Request, response: Response) => {
  const res = await expressAdapter(request, authLoginController);

  const { accessToken, refreshToken } = res.body.data;

  // Set the access and refresh token cookies
  response.cookie(envConfig.auth.access_token_name, accessToken, accessTokenCookieConfig);
  response.cookie(envConfig.auth.refresh_token_name, refreshToken, refreshTokenCookieConfig);

  response.status(res.statusCode).json({ message: res.body.message, accessToken });
});

export { authRoutes };
