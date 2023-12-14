import { json, type RequestEvent } from '@sveltejs/kit'
import { z } from 'zod';
import { db } from '$db';
import { lines } from '$db/schema';
import { generateId } from '$lib/nanoid';

export async function POST(event: RequestEvent) {
    const data: z.infer<ReturnType<typeof _validator>> = await event.request.json();
    await db.insert(lines).values({
        id: generateId(),
        content: data.content,
        projectId: data.projectId,
    });

    return json({ success: true })
}

export const _validator = z.object({
    content: z.string(),
    projectId: z.string(),
});