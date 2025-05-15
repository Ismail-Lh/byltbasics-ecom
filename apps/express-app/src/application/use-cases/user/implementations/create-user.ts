import { inject, injectable } from "inversify";

import type { ICryptoProvider } from "@/application/providers";
import type { IUserRepository } from "@/application/repositories";
import type { IResponseDTO } from "@/domain/shared/dtos";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import { TYPES } from "@/config/inversify";
import { UserEntity } from "@/domain/user/entity";
import { UserErrors } from "@/domain/user/enums";
import { BadRequestError } from "@/infrastructure/errors";

import type { ICreateUserUseCase } from "../interfaces";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository, @inject(TYPES.CryptoProvider) private cryptoProvider: ICryptoProvider) {}

  async execute(data: ICreateUserReqDTO): Promise<IResponseDTO<IUserOutReqDTO>> {
    const { name, email, password } = new UserEntity(data);

    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new BadRequestError(UserErrors.UserAlreadyExists);
    }

    const passwordHash = await this.cryptoProvider.generateHash(password);

    const newUser = await this.userRepository.create({ name, email, password: passwordHash });

    return {
      success: true,
      statusCode: 201,
      message: "User created successfully",
      data: newUser,
    };
  }
}
