import { mock, mockReset } from "jest-mock-extended";

import type { IApiResponseSanitizer } from "@/application/providers";
import type { ICreateUserUseCase } from "@/application/use-cases/user";
import type { IResponseDTO } from "@/domain/shared/dtos";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";
import type { IHttpRequest } from "@/presentation/http/helpers/interfaces";

import { AuthRegisterController } from "@/presentation/http/controllers/auth/auth-register.controller";

describe("authRegisterController", () => {
  let controller: AuthRegisterController;

  const createUserUseCaseMock = mock<ICreateUserUseCase>();
  const apiResponseSanitizerMock = mock<IApiResponseSanitizer>();

  const createUserReqDto: ICreateUserReqDTO = {
    name: "Test User",
    email: "test@example.com",
    password: "password123",
  };

  const createUserUseCaseRes: IResponseDTO<IUserOutReqDTO> = {
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    },
  };

  const registerFormattedRes = {
    statusCode: 201,
    success: true,
    body: {
      message: "User created successfully",
      data: {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        createdAt: expect.any(String),
      },
    },
  };

  const registerHttpRequest: IHttpRequest<ICreateUserReqDTO> = {
    body: createUserReqDto,
    params: {},
    query: {},
  };

  beforeEach(() => {
    // Reset mocks
    mockReset(createUserUseCaseMock);
    mockReset(apiResponseSanitizerMock);

    // Create CONTROLLER
    controller = new AuthRegisterController(createUserUseCaseMock, apiResponseSanitizerMock);
  });

  it("should call CreateUserUseCase with correct values", async () => {
    // Arrange
    createUserUseCaseMock.execute.mockResolvedValue(createUserUseCaseRes);

    apiResponseSanitizerMock.successResponse.mockReturnValue(registerFormattedRes);

    // Act
    await controller.handle(registerHttpRequest);

    // Assert
    expect(createUserUseCaseMock.execute).toHaveBeenCalledWith(createUserReqDto);
  });

  it("should return sanitized response with correct status code", async () => {
    createUserUseCaseMock.execute.mockResolvedValue(createUserUseCaseRes);
    apiResponseSanitizerMock.successResponse.mockReturnValue(registerFormattedRes);

    // Act
    const result = await controller.handle(registerHttpRequest);

    // Assert
    expect(apiResponseSanitizerMock.successResponse).toHaveBeenCalledWith({
      data: createUserUseCaseRes.data,
      message: createUserUseCaseRes.message,
      statusCode: createUserUseCaseRes.statusCode,
    });
    expect(result).toEqual(registerFormattedRes);
  });
});
