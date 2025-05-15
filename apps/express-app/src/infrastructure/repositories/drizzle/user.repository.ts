import { eq } from "drizzle-orm";
import { injectable } from "inversify";

import type { IUserRepository } from "@/application/repositories";
import type { ICreateUserReqDTO, IUserOutReqDTO } from "@/domain/user/dtos";

import db from "@/infrastructure/databases/drizzle-supabase";
import { usersTable } from "@/infrastructure/databases/drizzle-supabase/schemas";

/**
 * Repository class for managing user-related database operations.
 * Implements the `IUserRepository` interface.
 */
@injectable()
export class UserRepository implements IUserRepository {
  constructor() {}

  /**
   * Creates a new user in the database.
   *
   * @param data - The data required to create a new user, adhering to the `ICreateUserReqDTO` interface.
   * @returns A promise that resolves to the created user's data, adhering to the `IUserOutReqDTO` interface.
   * @throws An error if the user creation fails.
   */
  async create(data: ICreateUserReqDTO): Promise<IUserOutReqDTO> {
    const newUser = await db.insert(usersTable).values(data).returning();

    if (newUser.length === 0) {
      throw new Error("Failed to create user");
    }

    return newUser[0];
  }

  /**
   * Finds a user by their email address in the database.
   *
   * @param email - The email address of the user to find.
   * @returns A promise that resolves to the found user's data, or null if no user is found.
   */
  async findByEmail(email: string): Promise<IUserOutReqDTO | null> {
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    return user.length > 0 ? user[0] : null;
  }
}
