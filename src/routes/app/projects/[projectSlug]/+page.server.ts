import { db } from "$db";
import { projects } from "$db/schema";
import { eq } from "drizzle-orm";
import { error, type RequestEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event: RequestEvent) => {
    const [project] = await db.select().from(projects).where(
        eq(projects.id, event.params.projectSlug!)
    );

    if (!project) return error(404, {
        message: 'Not found',
    });

    return { project };
}