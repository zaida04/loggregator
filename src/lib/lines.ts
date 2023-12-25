import { db } from "$db";
import { lines } from "$db/schema";
import { eq } from "drizzle-orm";

export async function getLines(projectId: string) {
	return db.select().from(lines).where(eq(lines.projectId, projectId));
}
