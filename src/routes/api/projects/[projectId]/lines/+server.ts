import { accumulateDeployments } from "$lib/deployments";
import { getLines } from "$lib/lines";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent) {
	const fetched_lines = await getLines(event.params.projectId!);
	const deployments = await accumulateDeployments(fetched_lines);

	return json({ success: true, lines: fetched_lines, deployments });
}
