import type { IUser } from "@byltbasics/types";

import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

/**
 * Interface representing a User Repository.
 * Provides methods for managing user data in the application.
 */
export interface IUserRepository {
  /**
   * Creates a new user in the repository.
   *
   * @async
   * @param {ICreateUserRequestDTO} data - The data required to create a new user, adhering to the ICreateUserReqDTO structure.
   * @returns {Promise<IUserOutReqDTO>} - A promise that resolves to the created user's data, adhering to the IUserOutReqDTO structure.
   */
  create: (data: ICreateUserReqDTO) => Promise<IUserOutReqDTO>;

  /**
   * Finds a user by their email address in the repository.
   *
   * @async
   * @param {string} email - The email address of the user to find.
   * @returns {Promise<IUser | null>} - A promise that resolves to the found user's data, or null if no user is found.
   */
  findByEmail: (email: string) => Promise<IUser | null>;
}
