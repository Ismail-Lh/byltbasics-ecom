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
  const res = await expressAdapter(request, createUserController);

  response.status(res.statusCode).json(res.body);
});

export { userRoutes };
