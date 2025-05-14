import type db from "../";

import * as schema from "../schemas";
import users from "./data/users.json";

export async function seedUsers(db: db) {
  await Promise.all(
    users.map(async (user) => {
      await db
        .insert(schema.user)
        .values({
          ...user,
          emailVerified: true,
          phoneVerified: true,
        })
        .returning();
    }),
  );
}
