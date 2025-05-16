import { defineConfig } from "drizzle-kit";

import { envConfig } from "./src/config";

export default defineConfig({
  schema: "./src/infrastructure/databases/drizzle-supabase/schemas/index.ts",
  out: "./src/infrastructure/databases/drizzle-supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: envConfig.db.db_url,
  },
  verbose: true,
  strict: true,
});
