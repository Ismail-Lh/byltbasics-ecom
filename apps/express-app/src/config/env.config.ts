import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const stringBoolean = z.coerce.string().transform((val) => {
  return val === "true";
}).default("false");

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.string({ message: "PORT must be a string" }).default("8080"),
  SERVER_URL: z.string({ message: "SERVER_URL must be a string" }),
  CLIENT_URL: z.string({ message: "CLIENT_URL must be a string" }),
  DB_URL: z.string({ message: "DB_URL must be a string" }),
  DB_MIGRATING: stringBoolean,
  DB_SEEDING: stringBoolean,
  DB_LOGGING: stringBoolean,
  HASH_ALGORITHM: z.enum(["sha256", "sha512"]).default("sha256"),
  ACCESS_TOKEN_NAME: z.string({ message: "ACCESS_TOKEN_NAME must be a string" }).default("access_token"),
  ACCESS_TOKEN_SECRET: z.string({ message: "ACCESS_TOKEN_SECRET must be a string" }).min(20, { message: "ACCESS_TOKEN_SECRET must be at least 20 characters long" }),
  ACCESS_TOKEN_EXPIRES_IN: z.string({ message: "ACCESS_TOKEN_EXPIRES_IN must be a string" }).default("15m"),
  REFRESH_TOKEN_NAME: z.string({ message: "REFRESH_TOKEN_NAME must be a string" }).default("refresh_token"),
  REFRESH_TOKEN_SECRET: z.string({ message: "REFRESH_TOKEN_SECRET must be a string" }).min(20, { message: "REFRESH_TOKEN_SECRET must be at least 20 characters long" }),
  REFRESH_TOKEN_EXPIRES_IN: z.string({ message: "REFRESH_TOKEN_EXPIRES_IN must be a string" }).default("1d"),
});

type EnvSchema = z.infer<typeof envSchema>;

function validateEnv(env: NodeJS.ProcessEnv): EnvSchema {
  try {
    return envSchema.parse(env);
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        issue => `${issue.path.join(".")}: ${issue.message}`,
      );
      throw new Error(
        `Environment variable validation error: \n${errorMessages.join("\n")}`,
      );
    }
    throw error;
  }
}

// eslint-disable-next-line node/no-process-env
const validatedEnv = validateEnv(process.env);

export const envConfig = {
  node_env: validatedEnv.NODE_ENV,
  server: {
    port: validatedEnv.PORT,
    url: validatedEnv.SERVER_URL,
  },
  client: {
    url: validatedEnv.CLIENT_URL,
  },
  auth: {
    access_token_name: validatedEnv.ACCESS_TOKEN_NAME,
    access_token_secret: validatedEnv.ACCESS_TOKEN_SECRET,
    access_token_expires_in: validatedEnv.ACCESS_TOKEN_EXPIRES_IN,
    refresh_token_name: validatedEnv.REFRESH_TOKEN_NAME,
    refresh_token_secret: validatedEnv.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: validatedEnv.REFRESH_TOKEN_EXPIRES_IN,
  },
  db: {
    db_url: validatedEnv.DB_URL,
    db_migrating: validatedEnv.DB_MIGRATING,
    db_seeding: validatedEnv.DB_SEEDING,
    db_logging: validatedEnv.DB_LOGGING,
  },
  crypto: {
    hash_algorithm: validatedEnv.HASH_ALGORITHM,
  },
} as const;
