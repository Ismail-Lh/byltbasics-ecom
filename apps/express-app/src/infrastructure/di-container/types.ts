export const TYPES = {
  Logger: Symbol.for("Logger"),
  CryptoProvider: Symbol.for("CryptoProvider"),
  ApiResponseSanitizer: Symbol.for("ApiResponseSanitizer"),
  JwtTokenProvider: Symbol.for("JwtTokenProvider"),
  UserRepository: Symbol.for("UserRepository"),
  CreateUserUseCase: Symbol.for("CreateUserUseCase"),
  AuthRegisterController: Symbol.for("AuthRegisterController"),
  AuthLoginUseCase: Symbol.for("AuthLoginUseCase"),
  AuthLoginController: Symbol.for("AuthLoginController"),
  RefreshTokenRepository: Symbol.for("RefreshTokenRepository"),
} as const;
