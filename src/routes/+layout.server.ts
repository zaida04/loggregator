import type { RequestEvent } from "./$types";
import { getUser, withUser } from "$lib/utils";

export async function load(event: RequestEvent) {
	return await withUser(event, {});
}
