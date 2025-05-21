import type { IAuthLoginDto, IAuthResponseDto } from "@/domain/auth/dtos";

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
   * @returns {Promise<IAuthResponseDto>} - A promise that resolves to the authentication response DTO.
   */
  execute: (data: IAuthLoginDto) => Promise<IAuthResponseDto>;
}
