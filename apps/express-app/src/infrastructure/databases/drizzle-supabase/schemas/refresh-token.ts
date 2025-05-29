import { relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { usersTable } from "./user";

export const refreshTokensTable = pgTable("refreshTokens", {
  id: uuid().primaryKey().defaultRandom().unique(),
  token: varchar("token", { length: 255 }).notNull(),
  deviceId: varchar("device_id", { length: 255 }).notNull(),
  ipAddress: varchar("ip_address", { length: 255 }),
  revocationReason: varchar("revocation_reason", { length: 255 }),
  isRevoked: boolean("is_revoked").notNull().default(false),
  // revokedAt: timestamp("revoked_at", { mode: "string" }).notNull(),
  expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
  // Foreign key reference to users table
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
});

export const refreshTokensRelations = relations(refreshTokensTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [refreshTokensTable.userId],
    references: [usersTable.id],
  }),
}));
