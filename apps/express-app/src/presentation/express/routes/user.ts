import type { Request, Response } from "express";

import { Router } from "express";

import { createUserSchema } from "@/domain/user/schemas";
import { expressAdapter } from "@/presentation/adapters/express";
import { createUserController } from "@/presentation/service-provider";

import { validateRequest } from "../middlewares";

/**
 * Router for handling user-related routes.
 */
const userRoutes = Router();

/**
 * Endpoint to create a new user.
 */
userRoutes.post("/", validateRequest({ body: createUserSchema }), async (request: Request, response: Response) => {
  const adapter = await expressAdapter(request, createUserController);

  response.status(adapter.statusCode).json(adapter.body);
});

export { userRoutes };
