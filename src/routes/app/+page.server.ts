import { db } from "$db";
import { lines, projects } from "$db/schema";
import { asc, count, eq } from "drizzle-orm";

export async function load() {
	const fetched_projects = await db.select().from(projects);
	const line_infos = await Promise.all(
		fetched_projects.map((project) =>
			db
				.select()
				.from(lines)
				.where(eq(lines.projectId, project.id))
				.orderBy(asc(lines.createdAt))
				.then((x) => ({
					id: project.id,
					line_count: x.length,
					last_line: x[x.length - 1],
				})),
		),
	);
	const condensed_projects = fetched_projects.map((project) => {
		const line_info = line_infos.find((row) => row.id === project.id);

		return {
			...project,
			line_count: line_info?.line_count ?? 0,
			last_line: line_info?.last_line ?? null,
		};
	});

	return {
		projects: condensed_projects,
	};
}
