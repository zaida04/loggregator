import { db } from '$db';
import { projects } from '$db/schema';

export async function load() {
	const fetched_projects = await db.select().from(projects);
	return {
		projects: fetched_projects
	};
}
