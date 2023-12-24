import { db } from "$db";
import { lines } from "$db/schema";
import { json } from "@sveltejs/kit";

export async function GET() {
    const fetched_lines = await db.select().from(lines);
    return json({ success: true, lines: fetched_lines });
}