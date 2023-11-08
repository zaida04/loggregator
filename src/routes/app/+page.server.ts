// import type { Project } from '$lib/db/drizzle';
import type { PageServerLoad } from './$types';
import { makeDB } from '$lib/db/client';
import { projects } from '$lib/db/drizzle';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const db = makeDB();
	const fetchedProjects = await db.client.select().from(projects).where(eq(projects.ownerId, 1));

	return { projects: fetchedProjects };
};
