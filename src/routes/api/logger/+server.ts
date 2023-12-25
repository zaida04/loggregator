import { db } from "$db";
import { lines, projects } from "$db/schema";
import { decodeJWT } from "$lib/jwt";
import { generateId } from "$lib/nanoid";
import { type RequestEvent, json } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { z } from "zod";

export async function POST(event: RequestEvent) {
	const data: z.infer<typeof _validator> = await event.request.json();
	const header = event.request.headers.get("Authorization");
	if (!header) {
		return json({ success: false, error: "No Authorization header" });
	}

	const [type, token] = header.split(" ");
	if (type !== "Bearer") {
		return json({ success: false, error: "Invalid Authorization type" });
	}
	const { id: projectId } = await decodeJWT<{ id: string }>(token);
	const project = await db
		.select()
		.from(projects)
		.where(eq(projects.id, projectId));

	if (!project) {
		return json({ success: false, error: "Project not found" });
	}

	await db.insert(lines).values({
		id: generateId(),
		content: data.content,
		deploymentId: data.deploymentId,
		projectId,
	});

	return json({ success: true });
}

export const _validator = z.object({
	content: z.string(),
	deploymentId: z.string().optional(),
});
