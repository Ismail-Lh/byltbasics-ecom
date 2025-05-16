import { migrate } from "drizzle-orm/postgres-js/migrator";

import { envConfig } from "@/config";
import { logger } from "@/presentation/service-provider";
import config from "$/drizzle.config";

import { connection, db } from "./";

async function main() {
  if (!envConfig.db.db_migrating) {
    throw new Error("You must set DB_MIGRATING to \"true\" when running migrations");
  }

  await migrate(db, { migrationsFolder: config.out! });

  await connection.end();
}

main()
  .then(() => {
    logger.info("Migration completed");
    process.exit(0);
  })
  .catch((error) => {
    logger.error("Migration failed", error);
    process.exit(1);
  });
