import { inject, injectable } from "inversify";

import type { ICreateUserUseCase } from "@/application/use-cases/user";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import { TYPES } from "@/infrastructure/di-container/types";

import type { IHttpRequest, IHttpResponse } from "../../helpers/interfaces";
import type { IHttpController } from "../controller.interface";

export interface ICreateUserController extends IHttpController<ICreateUserReqDTO, IUserOutReqDTO> {}

/**
 * Controller responsible for handling HTTP requests related to user creation.
 *
 * @remarks
 * This controller receives user creation requests, delegates the business logic to the injected
 * `CreateUserUseCase`, and returns the appropriate HTTP response.
 *
 * @see ICreateUserController
 * @see ICreateUserUseCase
 */
@injectable()
export class CreateUserController implements ICreateUserController {
  /**
   * Creates an instance of the controller with the injected CreateUserUseCase dependency.
   *
   * @param createUserUseCase - The use case responsible for handling user creation logic.
   */
  constructor(@inject(TYPES.CreateUserUseCase) private createUserUseCase: ICreateUserUseCase) {}

  /**
   * Handles the HTTP request to create a new user.
   *
   * @param request - The HTTP request containing the user creation data in the body.
   * @returns A promise that resolves to an HTTP response with the created user data.
   */
  async handle(request: IHttpRequest<ICreateUserReqDTO>): Promise<IHttpResponse<IUserOutReqDTO>> {
    const body = request.body;

    const userRes = await this.createUserUseCase.execute(body);

    return {
      statusCode: userRes.statusCode,
      body: userRes.data,
    };
  }
}
