import type { Line } from "$db/schema";

export async function accumulateDeployments(lines: Line[]) {
	return lines.reduce(
		(prev, curr) => {
			const deploymentId = curr.deploymentId ?? "unknown";

			return {
				// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
				...prev,
				[deploymentId]: curr.createdAt,
			};
		},
		{} as Record<string, Date>,
	);
}

export function sortDeployments(deployments: Deployment) {
	return Object.keys(deployments).toSorted(
		(a, b) => deployments[b].getTime() - deployments[a].getTime(),
	);
}
export type Deployment = Record<string, Date>;
