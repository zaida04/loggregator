import { db } from "$db";
import { type Line, type Project, lines, projects } from "$db/schema";
import { accumulateDeployments } from "$lib/deployments";
import { getLines } from "$lib/lines";
import { getProject } from "$lib/projects";
import { getUser } from "$lib/utils";
import { type Actions, error, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import type { RequestEvent } from "./$types";

export async function load(event: RequestEvent) {
	const userId = await getUser(event);
	const project = await getProject(userId, event.params.projectSlug!);
	if (!project)
		throw error(404, {
			message: "Not found",
		});

	const fetched_lines: Line[] = await getLines(project.id);
	const deployments = await accumulateDeployments(fetched_lines);

	return { project, lines: fetched_lines, deployments };
}

export const actions: Actions = {
	deleteProject: async (event) => {
		const [project]: Project[] = await db.select().from(projects).where(eq(projects.id, event.params.projectSlug!));
		if (!project)
			return error(404, {
				message: "Not found",
			});

		await db.delete(lines).where(eq(lines.projectId, project.id));
		await db.delete(projects).where(eq(projects.id, project.id));

		throw redirect(303, "/app");
	},
};
