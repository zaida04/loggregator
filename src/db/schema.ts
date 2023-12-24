import { pgTable, text } from "drizzle-orm/pg-core";

const id = (name = "id") => text(name).primaryKey();

export const projects = pgTable("projects", {
	id: id(),
	name: text("id").notNull(),
	ownerId: text("ownerId").notNull(),
});

export const lines = pgTable("lines", {
	id: id(),
	content: text("content"),
	projectId: text("projectId").notNull(),
});
