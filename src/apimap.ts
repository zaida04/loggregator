import { type Handle, json } from "@sveltejs/kit";
import { z } from "zod";
import { _validator as loggerValidator } from "./routes/api/logger/+server";

const map: Record<string, Record<string, z.ZodTypeAny>> = {
	"/api/logger": {
		POST: loggerValidator,
	},
};

export const validation: Handle = async ({ event, resolve }) => {
	for (const url of Object.keys(map)) {
		if (event.url.pathname.indexOf(url) > -1) {
			const method = event.request.method;
			const req = event.request.clone();

			let body: Record<string, unknown>;
			try {
				body = await req.json();
			} catch (e) {
				console.log("incoming request body", await req.text());
				return json(
					{
						error: {
							message: "Please attach a valid JSON payload with your request.",
							details: [],
						},
					},
					{ status: 400 },
				);
			}

			if (url in map && method in map[url] && map[url]) {
				try {
					map[url][method].parse(body);
				} catch (error) {
					if (error instanceof z.ZodError) {
						const response = {
							error: {
								message: "unknown validation error",
								details: [] as unknown[],
							},
						};
						if (error.issues) {
							response.error.message = "VALIDATION_ERR";
							response.error.details = error.issues.map((issue) => {
								return {
									code: issue.code,
									path: issue.path,
									message: issue.message,
								};
							});
						}

						return json(response, { status: 400 });
					}
				}
			}
		}
	}

	return resolve(event);
};
