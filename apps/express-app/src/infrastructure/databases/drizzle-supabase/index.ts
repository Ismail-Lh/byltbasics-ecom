import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { envConfig } from "@/config";

import * as schema from "./schemas";

export const connection = postgres(envConfig.db.db_url, {
  max: (envConfig.db.db_migrating || envConfig.db.db_seeding) ? 1 : undefined,
  onnotice: envConfig.db.db_seeding ? () => {} : undefined,
});

export const db = drizzle(connection, {
  schema,
  logger: envConfig.db.db_logging,
});

export type db = typeof db;

export default db;
