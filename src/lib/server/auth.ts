import { dev } from "$app/environment";
import { client } from "$db";
import { env } from "$env/dynamic/private";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { github } from "@lucia-auth/oauth/providers";
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";

export const auth = lucia({
	adapter: postgresAdapter(client, {
		key: "keys",
		session: "sessions",
		user: "users",
	}),
	middleware: sveltekit(),
	env: dev ? "DEV" : "PROD",
});

export const githubAuth = github(auth, {
	clientId: env.GITHUB_CLIENT_ID!,
	clientSecret: env.GITHUB_CLIENT_SECRET!,
});

export type Auth = typeof auth;
