import { db } from "$db";
import { lines } from "$db/schema";
import { generateId } from "$lib/nanoid";
import { type RequestEvent, json } from "@sveltejs/kit";
import { z } from "zod";

export async function POST(event: RequestEvent) {
	const data: z.infer<typeof _validator> = await event.request.json();

	await db.insert(lines).values({
		id: generateId(),
		content: data.content,
		projectId: data.projectId,
	});

	return json({ success: true });
}

export async function GET() {
	const line = await db.select().from(lines);
	return json({ success: true, line });
}

export const _validator = z.object({
	content: z.string(),
	projectId: z.string(),
});
