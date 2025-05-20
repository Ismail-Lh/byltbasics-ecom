import type { IUser } from "@byltbasics/types";

import type { IAuthLoginDto } from "@/domain/auth/dtos";
import type { IResponseDTO } from "@/domain/shared/dtos";

/**
 * Interface for the use case of user authentication login.
 *
 * @interface
 */
export interface IAuthLoginUseCase {
  /**
   * Executes the auth login use case.
   *
   * @async
   * @param {IAuthLoginDto} data - The data for user authentication login.
   * @returns {Promise<IResponseDTO<IUser>>} The response data.
   */
  execute: (data: IAuthLoginDto) => Promise<IResponseDTO<IUser>>;
}
