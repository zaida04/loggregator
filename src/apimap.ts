import { json, type Handle } from '@sveltejs/kit';
import { _validator as projectsValidator } from './routes/api/projects/+server';
import { z } from 'zod';

const map: Record<string, Record<string, z.ZodTypeAny>> = {
    '/api/projects': {
        "POST": projectsValidator,
    }
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
                return json({
                    error: {
                        message: 'You are missing a JSON payload. Please attach one with your request.',
                        details: [],
                    }
                }, { status: 400 });
            }

            if (url in map && method in map[url] && map[url]) {
                try {
                    map[url][method].parse(body);
                } catch (error) {
                    if (error instanceof z.ZodError) {
                        const response = {
                            error: {
                                message: 'unknown validation error',
                                details: [] as unknown[],
                            }
                        }
                        if (error.issues) {
                            response.error.message = 'VALIDATION_ERR';
                            response.error.details = error.issues.map(issue => {
                                return {
                                    code: issue.code,
                                    path: issue.path,
                                    message: issue.message,
                                }
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
