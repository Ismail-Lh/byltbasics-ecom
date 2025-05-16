import type { Request, Response } from "express";

import { Router } from "express";

import { expressAdapter } from "@/presentation/adapters/express";
import { createUserController } from "@/presentation/service-provider";

/**
 * Router for handling user-related routes.
 */
const userRoutes = Router();

/**
 * Endpoint to create a new user.
 */
userRoutes.post("/", async (request: Request, response: Response) => {
  const adapter = await expressAdapter(request, createUserController);

  response.status(adapter.statusCode).json(adapter.body);
});

export { userRoutes };
