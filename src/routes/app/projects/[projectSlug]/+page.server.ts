import { db } from "$db";
import { type Line, type Project, lines, projects } from "$db/schema";
import {
	type Actions,
	type RequestEvent,
	error,
	redirect,
} from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	const [project]: Project[] = await db
		.select()
		.from(projects)
		.where(eq(projects.id, event.params.projectSlug!));
	if (!project)
		return error(404, {
			message: "Not found",
		});

	const fetched_lines: Line[] = await db
		.select()
		.from(lines)
		.where(eq(lines.projectId, project.id));

	return { project, lines: fetched_lines };
};

export const actions: Actions = {
	deleteProject: async (event) => {
		const [project]: Project[] = await db
			.select()
			.from(projects)
			.where(eq(projects.id, event.params.projectSlug!));
		if (!project)
			return error(404, {
				message: "Not found",
			});

		await db.delete(lines).where(eq(lines.projectId, project.id));
		await db.delete(projects).where(eq(projects.id, event.params.projectSlug!));

		throw redirect(303, "/app");
	},
};
