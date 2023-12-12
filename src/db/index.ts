import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from "$env/dynamic/private";

const connectionString = env.DATABASE_URL!;
const client = postgres(connectionString)
const db = drizzle(client);

export { client, db };