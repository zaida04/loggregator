import { auth } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const session = await event.locals.auth.validate();

	// Check if URL contains /app and if user is not authenticated
	if (event.url.pathname.startsWith("/app") && !session?.user?.userId) {
		return new Response("", {
			status: 302,
			headers: {
				location: "/login",
			},
		});
	}

	return await resolve(event);
};
