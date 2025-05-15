import { injectable } from "inversify";

import type { IUserRepository } from "@/application/repositories";
import type { IResponseDTO } from "@/domain/shared/dtos";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import { UserEntity } from "@/domain/user/entity";

import type { ICreateUserUseCase } from "../interfaces";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: ICreateUserReqDTO): Promise<IResponseDTO<IUserOutReqDTO>> {
    const { name, email, password } = new UserEntity(data);

    const newUser = await this.userRepository.create({ name, email, password });

    return {
      success: true,
      statusCode: 201,
      message: "User created successfully",
      data: newUser,
    };
  }
}
