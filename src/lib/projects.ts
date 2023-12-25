import { db } from "$db";
import { projects } from "$db/schema";
import { eq } from "drizzle-orm";

export async function getProject(projectId: string) {
	return db
		.select()
		.from(projects)
		.where(eq(projects.id, projectId))
		.then((x) => x[0]);
}
