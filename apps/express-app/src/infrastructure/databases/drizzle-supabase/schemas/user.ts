import { relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { refreshTokensTable } from "./refresh-token";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  isEmailVerified: boolean("is_email_verified").notNull().default(false),
  emailVerifiedAt: timestamp("email_verified_at", { mode: "string" }),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

// Define relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  refreshTokens: many(refreshTokensTable),
}));
