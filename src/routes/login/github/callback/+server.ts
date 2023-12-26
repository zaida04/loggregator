import { auth, githubAuth } from "$lib/server/auth";
import { OAuthRequestError } from "@lucia-auth/oauth";

export async function GET({ url, cookies, locals }) {
	const storedState = cookies.get("github_oauth_state");
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");
	// validate state
	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, {
			status: 400,
		});
	}
	try {
		const { getExistingUser, githubUser, createUser } = await githubAuth.validateCallback(code);

		const getUser = async () => {
			const existingUser = await getExistingUser();
			if (existingUser) return existingUser;
			console.log("creating user", githubUser);

			const user = await createUser({
				attributes: {
					username: githubUser.login,
				},
			});
			return user;
		};

		const user = await getUser();
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {},
		});
		locals.auth.setSession(session);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/app",
			},
		});
	} catch (e) {
		console.log(e);

		if (e instanceof OAuthRequestError) {
			// invalid code
			return new Response(null, {
				status: 400,
			});
		}
		return new Response(null, {
			status: 500,
		});
	}
}
