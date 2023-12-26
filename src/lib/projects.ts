import { db } from "$db";
import { projects } from "$db/schema";
import { eq, and } from "drizzle-orm";

export async function getProject(userId: string, projectId: string) {
	return db
		.select()
		.from(projects)
		.where(and(eq(projects.id, projectId), eq(projects.ownerId, userId)))
		.then((x) => x[0]);
}
