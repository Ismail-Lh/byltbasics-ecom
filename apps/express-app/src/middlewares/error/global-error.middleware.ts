import type { NextFunction, Request, Response } from "express";

import httpStatus from "http-status";

import type { BaseError } from "@/api-errors";

import { envConfig } from "@/config";
import { loggerService } from "@/config/inversify";

export function globalErrorMiddleware(
  err: BaseError,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = err.httpCode
    ? err.httpCode
    : httpStatus.INTERNAL_SERVER_ERROR;

  loggerService.error(`${err.name} - ${statusCode}: ${err.message}.`);

  if (envConfig.node_env === "development") {
    loggerService.debug(`Error Stack: ${err.stack}`);
  }

  res.status(statusCode).json({
    message: err.message,
    statusCode,
    name: err.name,
  });

  next();
}
