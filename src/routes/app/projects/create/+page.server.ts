import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { db } from "$db";
import { projects } from "$db/schema";
import { generateId } from "$lib/nanoid";
import { generateJWT } from "$lib/jwt";

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

		const new_id = generateId();
		await db.insert(projects).values({
			id: new_id,
			name: form.data.name,
			token: await generateJWT(new_id),
			ownerId: "test",
		});

		throw redirect(303, "/app");
	},
};
