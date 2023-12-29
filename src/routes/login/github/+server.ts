import { dev } from "$app/environment";
import { githubAuth } from "$lib/server/auth";
import type { RequestEvent } from "./$types";

export async function GET({ cookies }: RequestEvent) {
	const [url, state] = await githubAuth.getAuthorizationUrl();
	// store state
	cookies.set("github_oauth_state", state, {
		httpOnly: true,
		secure: !dev,
		path: "/",
		maxAge: 60 * 60,
	});
	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
		},
	});
}
