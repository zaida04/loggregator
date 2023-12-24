import "dotenv/config";

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

// this will automatically run needed migrations on the database
async function main() {
	migrate(db, { migrationsFolder: "./drizzle" })
		.then(() => {
			console.log("Migrations complete!");
			process.exit(0);
		})
		.catch((err) => {
			console.error("Migrations failed!", err);
			process.exit(1);
		});
}

main();
