// import { Container } from "inversify";
// import request from "supertest";

// import type { ICryptoProvider } from "@/application/providers";
// import type { IUserRepository } from "@/application/repositories";

// import { setupTestApp } from "@/__tests__/helpers/setup-test-app";
// import { TYPES } from "@/infrastructure/di-container/types";

// // Mock the DI container
// jest.mock("@/infrastructure/di-container", () => {
//   const container = new Container();

//   // Mock repository
//   const userRepositoryMock = {
//     findByEmail: jest.fn(),
//     create: jest.fn(),
//   };

//   // Mock crypto provider
//   const cryptoProviderMock = {
//     generateHash: jest.fn(),
//   };

//   // Mock API response sanitizer
//   const apiResponseSanitizerMock = {
//     successResponse: jest.fn().mockImplementation(response => ({
//       statusCode: response.statusCode,
//       body: {
//         success: response.success,
//         message: response.message,
//         data: response.data,
//       },
//     })),
//     errorResponse: jest.fn(),
//   };

//   container.bind(TYPES.UserRepository).toConstantValue(userRepositoryMock);
//   container.bind(TYPES.CryptoProvider).toConstantValue(cryptoProviderMock);
//   container.bind(TYPES.ApiResponseSanitizer).toConstantValue(apiResponseSanitizerMock);

//   return { container };
// });

// describe("pOST /api/auth/register Integration", () => {
//   let app: Express.Application;
//   let userRepositoryMock: jest.Mocked<IUserRepository>;
//   let cryptoProviderMock: jest.Mocked<ICryptoProvider>;

//   beforeEach(() => {
//     // Reset mocks
//     jest.clearAllMocks();

//     // Get the mocked dependencies
//     const container = require("@/infrastructure/di-container").container;
//     userRepositoryMock = container.get(TYPES.UserRepository);
//     cryptoProviderMock = container.get(TYPES.CryptoProvider);

//     // Setup test app
//     app = setupTestApp();
//   });

//   it("should return 400 if email already exists", async () => {
//     // Arrange
//     const userData = {
//       name: "Test User",
//       email: "existing@example.com",
//       password: "password123",
//     };

//     // Mock existing user
//     userRepositoryMock.findByEmail.mockResolvedValue({
//       id: 1,
//       name: "Existing User",
//       email: "existing@example.com",
//       createdAt: new Date().toISOString(),
//     });

//     // Act
//     const response = await request(app)
//       .post("/api/auth/register")
//       .send(userData);

//     // Assert
//     expect(response.status).toBe(400);
//     expect(response.body).toHaveProperty("message");
//     expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
//     expect(userRepositoryMock.create).not.toHaveBeenCalled();
//   });

//   it("should return 201 and user data when registration is successful", async () => {
//     // Arrange
//     const userData = {
//       name: "New User",
//       email: "new@example.com",
//       password: "password123",
//     };

//     const hashedPassword = "hashed_password_123";

//     const createdUser = {
//       id: 2,
//       name: "New User",
//       email: "new@example.com",
//       createdAt: new Date().toISOString(),
//     };

//     // Mock repository responses
//     userRepositoryMock.findByEmail.mockResolvedValue(null);
//     cryptoProviderMock.generateHash.mockResolvedValue(hashedPassword);
//     userRepositoryMock.create.mockResolvedValue(createdUser);

//     // Act
//     const response = await request(app)
//       .post("/api/auth/register")
//       .send(userData);

//     // Assert
//     expect(response.status).toBe(201);
//     expect(response.body).toEqual({
//       success: true,
//       message: "User created successfully",
//       data: {
//         id: 2,
//         name: "New User",
//         email: "new@example.com",
//         createdAt: expect.any(String),
//       },
//     });

//     expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(userData.email);
//     expect(cryptoProviderMock.generateHash).toHaveBeenCalledWith(userData.password);
//     expect(userRepositoryMock.create).toHaveBeenCalledWith({
//       name: userData.name,
//       email: userData.email,
//       password: hashedPassword,
//     });
//   });

//   it("should return 400 if required fields are missing", async () => {
//     // Arrange - missing email
//     const invalidUserData = {
//       name: "Test User",
//       password: "password123",
//     };

//     // Act
//     const response = await request(app)
//       .post("/api/auth/register")
//       .send(invalidUserData);

//     // Assert
//     expect(response.status).toBe(400);
//     expect(response.body).toHaveProperty("message");
//     expect(userRepositoryMock.create).not.toHaveBeenCalled();
//   });
// });
