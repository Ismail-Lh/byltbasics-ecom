import type { Request, Response } from "express";

import { Router } from "express";

import { createUserController } from "@/config/inversify";
import { expressAdapter } from "@/presentation/adapters/express";

/**
 * Router for handling user-related routes.
 */
const userRoutes = Router();

/**
 * Endpoint to create a new user.
 */
userRoutes.post("/", async (request: Request, _response: Response) => {
  const adapter = await expressAdapter(request, createUserController);

  console.log("adapter", adapter);
  // return response.status(adapter.statusCode).json(adapter.body);
});

export { userRoutes };
