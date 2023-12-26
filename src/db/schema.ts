import { bigint, pgTable, text, timestamp } from "drizzle-orm/pg-core";

const id = (name = "id") => text(name).primaryKey();
const createdAt = timestamp("createdAt")
	.notNull()
	.$defaultFn(() => new Date());
const updatedAt = timestamp("updatedAt");

export const projects = pgTable("projects", {
	id: id(),
	name: text("name").notNull(),
	ownerId: text("ownerId").notNull(),
	token: text("token").notNull(),
	createdAt,
	updatedAt,
});
export type Project = typeof projects.$inferSelect;

export const lines = pgTable("lines", {
	id: id(),
	content: text("content"),
	projectId: text("projectId").notNull(),
	deploymentId: text("deploymentId").default("unknown"),
	createdAt,
});
export type Line = typeof lines.$inferSelect;

export const user = pgTable("users", {
	id: id(),
});
export type User = typeof user.$inferSelect;

export const session = pgTable("sessions", {
	id: id(),
	userId: text("userId").notNull(),
	activeExpires: bigint("activeExpires", { mode: "bigint" }).notNull(),
	idleExpires: bigint("idleExpires", { mode: "bigint" }).notNull(),
});
export type Session = typeof session.$inferSelect;

export const key = pgTable("keys", {
	id: id(),
	hashedPassword: text("hashedPassword"),
	userId: text("userId").notNull(),
});
export type Key = typeof key.$inferSelect;
