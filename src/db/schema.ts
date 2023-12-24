import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const id = (name = "id") => text(name).primaryKey();
const createdAt = timestamp("createdAt").notNull().$defaultFn(() => new Date());
const updatedAt = timestamp("updatedAt");

export const projects = pgTable("projects", {
	id: id(),
	name: text("name").notNull(),
	ownerId: text("ownerId").notNull(),
	token: text("token").notNull(),
	createdAt,
	updatedAt,
});

export const lines = pgTable("lines", {
	id: id(),
	content: text("content"),
	projectId: text("projectId").notNull(),
	createdAt
});
