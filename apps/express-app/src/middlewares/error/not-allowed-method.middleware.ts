import type { NextFunction, Request, Response } from "express";

import { HttpMethodNotAllowedError } from "@/api-errors";

/**
 * Middleware to handle HTTP method not allowed errors.
 * This middleware is used to respond with a 405 Method Not Allowed error
 * when a request is made with an unsupported HTTP method.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} _res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 */
export function notAllowedMethodMiddleware(req: Request, _res: Response, next: NextFunction) {
  const error = new HttpMethodNotAllowedError(`Http Method not allowed: ${req.method} to this route: ${req.originalUrl}`);

  next(error);
}
