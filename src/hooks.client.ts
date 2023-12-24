// Or for headless mode:
// import { initializeClerkClient } from 'clerk-sveltekit/headless'
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";
import { dark } from "@clerk/themes";
import type { HandleClientError } from "@sveltejs/kit";
// To use Clerk components:
import { initializeClerkClient } from "clerk-sveltekit/client";

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
	afterSignInUrl: "/app",
	afterSignUpUrl: "/app",
	signInUrl: "/sign-in",
	signUpUrl: "/sign-up",
	appearance: {
		baseTheme: dark,
	},
});

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event);
};
