/* eslint-disable ts/no-require-imports */
import { mock, mockReset } from "jest-mock-extended";

import type { ICryptoProvider } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";

import { CreateUserUseCase } from "@/application/use-cases/user/create-user/create-user";
import { UserErrors } from "@/domain/user/enums";
import { BadRequestError } from "@/infrastructure/errors";

// Mock the UserEntity static method
jest.mock("@/domain/user/entity", () => ({
  UserEntity: {
    create: jest.fn().mockImplementation(data => data),
  },
}));

describe("createUserUseCase", () => {
  let sut: CreateUserUseCase;
  const userRepositoryMock = mock<IUserRepository>();
  const cryptoProviderMock = mock<ICryptoProvider>();

  beforeEach(() => {
    // Reset mocks
    mockReset(userRepositoryMock);
    mockReset(cryptoProviderMock);

    // Create SUT (System Under Test)
    sut = new CreateUserUseCase(userRepositoryMock, cryptoProviderMock);
  });

  it("should throw an error if user with email already exists", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    // Mock findByEmail to return an existing user
    userRepositoryMock.findByEmail.mockResolvedValue({
      id: 1,
      name: "Existing User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    });

    // Act & Assert
    await expect(sut.execute(userData)).rejects.toThrow(
      new BadRequestError(UserErrors.UserAlreadyExists),
    );
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
  });

  it("should create a new user with hashed password", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    const hashedPassword = "hashed_password_123";

    const createdUser = {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    };

    // Mock repository and provider responses
    userRepositoryMock.findByEmail.mockResolvedValue(null);
    cryptoProviderMock.generateHash.mockResolvedValue(hashedPassword);
    userRepositoryMock.create.mockResolvedValue(createdUser);

    // Act
    const result = await sut.execute(userData);

    // Assert
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(cryptoProviderMock.generateHash).toHaveBeenCalledWith(userData.password);
    expect(userRepositoryMock.create).toHaveBeenCalledWith({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });

    expect(result).toEqual({
      success: true,
      statusCode: 201,
      message: "User created successfully",
      data: createdUser,
    });
  });

  it("should handle repository errors during email check", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    // Mock findByEmail to throw an error
    userRepositoryMock.findByEmail.mockRejectedValue(new Error("Database connection error"));

    // Act & Assert
    await expect(sut.execute(userData)).rejects.toThrow("Database connection error");
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
  });

  it("should handle errors when generating password hash", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    // Mock repository and provider responses
    userRepositoryMock.findByEmail.mockResolvedValue(null);
    cryptoProviderMock.generateHash.mockRejectedValue(new Error("Hashing failure"));

    // Act & Assert
    await expect(sut.execute(userData)).rejects.toThrow("Hashing failure");
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(cryptoProviderMock.generateHash).toHaveBeenCalledWith(userData.password);
  });

  it("should handle repository errors during user creation", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    const hashedPassword = "hashed_password_123";

    // Mock repository and provider responses
    userRepositoryMock.findByEmail.mockResolvedValue(null);
    cryptoProviderMock.generateHash.mockResolvedValue(hashedPassword);
    userRepositoryMock.create.mockRejectedValue(new Error("User creation failed"));

    // Act & Assert
    await expect(sut.execute(userData)).rejects.toThrow("User creation failed");
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(cryptoProviderMock.generateHash).toHaveBeenCalledWith(userData.password);
    expect(userRepositoryMock.create).toHaveBeenCalledWith({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });
  });

  it("should properly handle validation with UserEntity", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    const hashedPassword = "hashed_password_123";

    const createdUser = {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    };

    // Reset the UserEntity mock to check its usage
    const UserEntityMock = require("@/domain/user/entity").UserEntity;
    UserEntityMock.create.mockClear();

    // Mock repository and provider responses
    userRepositoryMock.findByEmail.mockResolvedValue(null);
    cryptoProviderMock.generateHash.mockResolvedValue(hashedPassword);
    userRepositoryMock.create.mockResolvedValue(createdUser);

    // Act
    await sut.execute(userData);

    // Assert
    expect(UserEntityMock.create).toHaveBeenCalledWith(userData);
  });

  it("should return a response with a 201 status code", async () => {
    // Arrange
    const userData = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    const hashedPassword = "hashed_password_123";

    const createdUser = {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    };

    // Mock repository and provider responses
    userRepositoryMock.findByEmail.mockResolvedValue(null);
    cryptoProviderMock.generateHash.mockResolvedValue(hashedPassword);
    userRepositoryMock.create.mockResolvedValue(createdUser);

    // Act
    const result = await sut.execute(userData);

    // Assert specific status code and success flag
    expect(result.statusCode).toBe(201);
    expect(result.success).toBe(true);
  });

  it("should handle malformed user data gracefully", async () => {
    // We're going to test how the use case handles malformed data that somehow gets past schema validation
    // Arrange - deliberately leave out fields to see how the Entity creation handles it
    const incompleteUserData = {
      name: "Test User",
      // missing email
      password: "password123",
    } as any; // Type assertion to bypass TypeScript checks

    // Mock the UserEntity to throw on invalid data
    const UserEntityMock = require("@/domain/user/entity").UserEntity;
    UserEntityMock.create.mockImplementationOnce(() => {
      throw new Error("Invalid user data: missing email");
    });

    // Act & Assert
    await expect(sut.execute(incompleteUserData)).rejects.toThrow("Invalid user data");
  });
});
