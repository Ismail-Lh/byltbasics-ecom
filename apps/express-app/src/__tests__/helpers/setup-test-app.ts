import cors from "cors";
import "express-async-errors";
import express from "express";
import helmet from "helmet";

import { globalErrorMiddleware } from "@/presentation/express/middlewares/";
import { authRoutes } from "@/presentation/express/routes/auth.routes";

/**
 * Creates an Express app instance configured for testing
 *
 * @returns {express.Application} Configured Express app
 */
export function setupTestApp(): express.Application {
  const app = express();

  // Middleware setup
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  // Routes setup
  app.use("/api/auth", authRoutes);

  // Error handling
  app.use(globalErrorMiddleware);

  app.use();

  return app;
}
