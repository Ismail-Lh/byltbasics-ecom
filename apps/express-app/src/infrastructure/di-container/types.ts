export const TYPES = {
  Logger: Symbol.for("Logger"),
  CryptoProvider: Symbol.for("CryptoProvider"),
  ApiResponseSanitizer: Symbol.for("ApiResponseSanitizer"),
  UserRepository: Symbol.for("UserRepository"),
  CreateUserUseCase: Symbol.for("CreateUserUseCase"),
  CreateUserController: Symbol.for("CreateUserController"),
} as const;
