import { inject, injectable } from "inversify";

import type { ICreateUserUseCase } from "@/application/use-cases/user";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import { TYPES } from "@/infrastructure/di-container/types";

import type { IHttpRequest, IHttpResponse } from "../../helpers/interfaces";
import type { IHttpController } from "../controller.interface";

export interface ICreateUserController extends IHttpController<ICreateUserReqDTO, IUserOutReqDTO> {}

@injectable()
export class CreateUserController implements ICreateUserController {
  constructor(@inject(TYPES.CreateUserUseCase) private createUserUseCase: ICreateUserUseCase) {}

  async handle(request: IHttpRequest<ICreateUserReqDTO>): Promise<IHttpResponse<IUserOutReqDTO>> {
    const body = request.body;

    const userRes = await this.createUserUseCase.execute(body);

    return {
      statusCode: userRes.statusCode,
      body: userRes.data,
    };
  }
}
