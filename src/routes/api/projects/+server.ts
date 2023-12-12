import { json, type RequestEvent } from '@sveltejs/kit'
import { z } from 'zod';

// /api/newsletter POST

export async function POST(event: RequestEvent) {
    const data = await event.request.json();
    console.log(data);

    // it's common to return JSON, so SvelteKit has a helper
    return json({ success: true })
}

export const _validator = z.object({
    email: z.string().email(),
    name: z.string().min(2).max(100),
});