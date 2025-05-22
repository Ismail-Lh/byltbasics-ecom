import type { IApiErrorResponse } from "@byltbasics/types";
import type { Request, Response } from "express";

import httpStatus from "http-status";

import { UserErrors } from "@/domain/user/enums";
import { BadRequestError, InternalServerError, UnauthorizedError } from "@/infrastructure/errors";
import { globalErrorMiddleware } from "@/presentation/express/middlewares";

describe("error Middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    nextFunction = jest.fn();
  });

  it("should handle BadRequestError for user already exists", () => {
    // Arrange
    const error = new BadRequestError(UserErrors.UserAlreadyExists);

    // Act
    globalErrorMiddleware(
      error,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    const errorRes: IApiErrorResponse = {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      body: {
        message: UserErrors.UserAlreadyExists,
        name: "BAD_REQUEST",
      },
    };

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(errorRes.statusCode);
    expect(mockResponse.json).toHaveBeenCalledWith(errorRes.body);
  });

  it("should handle UnauthorizedError", () => {
    // Arrange
    const error = new UnauthorizedError("Invalid credentials");

    // Act
    globalErrorMiddleware(
      error,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    const errorRes: IApiErrorResponse = {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      body: {
        message: "Invalid credentials",
        name: "UNAUTHORIZED",
      },
    };

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.UNAUTHORIZED);
    expect(mockResponse.json).toHaveBeenCalledWith(errorRes.body);
  });

  it("should handle generic Error with 500 status code", () => {
    // Arrange
    const error = new InternalServerError("Unexpected error");

    // Act
    globalErrorMiddleware(
      error,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    const errorRes: IApiErrorResponse = {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      body: {
        message: "Unexpected error",
        name: "INTERNAL_SERVER_ERROR",
      },
    };

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(errorRes.statusCode);
    expect(mockResponse.json).toHaveBeenCalledWith(errorRes.body);
  });
});
