import { join } from "path";
import { config } from "dotenv";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./index";
config({ path: join(__dirname, "..", "..", "..", ".env") });

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
