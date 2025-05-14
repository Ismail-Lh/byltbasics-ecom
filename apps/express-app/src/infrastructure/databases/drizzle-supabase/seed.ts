import type { Table } from "drizzle-orm";

import { getTableName, sql } from "drizzle-orm";

import { envConfig } from "@/config";
import { logger } from "@/config/inversify";

import { connection, db } from "./";
import * as schema from "./schemas";
import * as seeds from "./seeds";

if (!envConfig.db.db_seeding) {
  throw new Error("You must set DB_SEEDING to \"true\" when running seeds");
}

async function resetTable(db: db, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`),
  );
}

async function main() {
  for (const table of [
    schema.user,
  ]) {
    // await db.delete(table); // clear tables without truncating / resetting ids
    await resetTable(db, table);
  }

  await seeds.seedUsers(db);

  await connection.end();
}

main()
  .then(() => {
    logger.info("Seeding completed");
    process.exit(0);
  })
  .catch((error) => {
    logger.error("Seeding failed", error);
    process.exit(1);
  });
