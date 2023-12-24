import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const id = (name = "id") => text(name).primaryKey();
const created_at = timestamp("created_at").notNull().$defaultFn(() => new Date());
const updated_at = timestamp("updated_at");

export const projects = pgTable("projects", {
	id: id(),
	name: text("name").notNull(),
	ownerId: text("ownerId").notNull(),
	token: text("token").notNull(),
	created_at,
	updated_at,
});

export const lines = pgTable("lines", {
	id: id(),
	content: text("content"),
	projectId: text("projectId").notNull(),
	created_at
});
