import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './drizzle';
import postgres from 'postgres';
import { env } from "$env/dynamic/private";

export const makeDB = (DATABASE_URL?: string) => {
	const db = postgres(DATABASE_URL ?? env.DATABASE_URL);
	const client = drizzle(db, { schema });
	return { client, db };
};
