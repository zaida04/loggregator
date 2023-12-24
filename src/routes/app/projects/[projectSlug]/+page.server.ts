import { db } from "$db";
import { lines, projects, type Project, type Line } from "$db/schema";
import { eq } from "drizzle-orm";
import { error, type RequestEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const [project]: Project[] = await db.select().from(projects).where(
        eq(projects.id, event.params.projectSlug!)
    );
    if (!project) return error(404, {
        message: 'Not found',
    });

    const fetched_lines: Line[] = await db.select().from(lines).where(
        eq(lines.projectId, project.id)
    );

    return { project, lines: fetched_lines };
}