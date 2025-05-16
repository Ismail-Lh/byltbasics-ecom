import type { IResponseDTO } from "@/domain/shared/dtos";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

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
   * @returns {Promise<IResponseDTO<IUserOutReqDTO>>} The response data.
   */
  execute: (data: ICreateUserReqDTO) => Promise<IResponseDTO<IUserOutReqDTO>>;
}
