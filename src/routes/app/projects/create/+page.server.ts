import { db } from "$db";
import { projects } from "$db/schema";
import { generateJWT } from "$lib/jwt";
import { generateId } from "$lib/nanoid";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import type { Actions } from "./$types";
import { formSchema } from "./schema";
import { getUser } from "$lib/utils";

export async function load() {
	return {
		form: await superValidate(formSchema),
	};
}

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, { form });
		}

		const userId = await getUser(event);
		const newId = generateId();
		await db.insert(projects).values({
			id: newId,
			name: form.data.name,
			token: await generateJWT(newId),
			ownerId: userId,
		});

		throw redirect(303, `/app/projects/${newId}`);
	},
};
