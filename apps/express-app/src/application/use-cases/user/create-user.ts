import { inject, injectable } from "inversify";

import type { ICryptoProvider } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import { UserEntity } from "@/domain/user/entity";
import { UserErrors } from "@/domain/user/enums";
import { TYPES } from "@/infrastructure/di-container/types";
import { BadRequestError } from "@/infrastructure/errors";

/**
 * Interface for the use case of creating a new user.
 *
 * @interface
 */
export interface ICreateUserUseCase {
  /**
   * Executes the create user use case.
   *
   * @async
   * @param {ICreateUserReqDTO} data - The data for creating a new user.
   * @returns {Promise<IUserOutReqDTO>} The response data.
   */
  execute: (data: ICreateUserReqDTO) => Promise<IUserOutReqDTO>;
}

/**
 * Use case for creating a new user in the system.
 *
 * This class handles the business logic for registering a new user,
 * including checking for existing users, hashing the password, and
 * persisting the user data.
 *
 * @remarks
 * - Depends on a user repository for data access.
 * - Uses a crypto provider for password hashing.
 *
 */
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  /**
   * Creates an instance of the class with injected dependencies.
   *
   * @param userRepository - The repository used for user data operations.
   * @param cryptoProvider - The provider used for cryptographic operations such as hashing passwords.
   */
  constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository, @inject(TYPES.CryptoProvider) private cryptoProvider: ICryptoProvider) {}

  /**
   * Executes the user creation process.
   *
   * @param data - The user registration data (name, email, password).
   * @returns A response DTO containing the created user data.
   * @throws {BadRequestError} If a user with the given email already exists.
   */
  async execute(data: ICreateUserReqDTO): Promise<IUserOutReqDTO> {
    const userEntity = UserEntity.create(data);
    const { name, email, password } = userEntity;

    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new BadRequestError(UserErrors.UserAlreadyExists);
    }

    const passwordHash = await this.cryptoProvider.generateHash(password);

    const newUser = await this.userRepository.create({ name, email, password: passwordHash });

    return newUser;
  }
}
