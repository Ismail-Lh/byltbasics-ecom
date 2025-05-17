import type { Request, Response } from "express";

import { Router } from "express";

import { createUserSchema } from "@/domain/user/schemas";
import { expressAdapter } from "@/presentation/adapters/express";
import { authRegisterController } from "@/presentation/service-provider";

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

export { authRoutes };
