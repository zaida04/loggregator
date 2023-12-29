import { withUser } from "$lib/utils";
import type { RequestEvent } from "./$types";

export async function load(event: RequestEvent) {
	return await withUser(event, {});
}
