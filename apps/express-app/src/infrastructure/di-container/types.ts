export const TYPES = {
  Logger: Symbol.for("Logger"),
  CryptoProvider: Symbol.for("CryptoProvider"),
  ApiResponseSanitizer: Symbol.for("ApiResponseSanitizer"),
  UserRepository: Symbol.for("UserRepository"),
  CreateUserUseCase: Symbol.for("CreateUserUseCase"),
  AuthRegisterController: Symbol.for("AuthRegisterController"),
} as const;
