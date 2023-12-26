import { relations } from "drizzle-orm";
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

export const users = pgTable("users", {
	id: id(),
	username: text("username").notNull(),
});
export const usersRelations = relations(users, ({ many }) => ({
	auth_session: many(sessions),
	key: many(keys),
}));
export type User = typeof users.$inferSelect;

export const sessions = pgTable("sessions", {
	id: id(),
	userId: text("user_id").notNull(),
	activeExpires: bigint("active_expires", { mode: "bigint" }).notNull(),
	idleExpires: bigint("idle_expires", { mode: "bigint" }).notNull(),
});
export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users),
}));
export type Session = typeof sessions.$inferSelect;

export const keys = pgTable("keys", {
	id: id(),
	hashedPassword: text("hashed_password"),
	userId: text("user_id").notNull(),
});
export const keysRelations = relations(keys, ({ one }) => ({
	user: one(users),
}));
export type Key = typeof keys.$inferSelect;
