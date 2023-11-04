import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: varchar('email').notNull().unique()
});
export type User = typeof users.$inferSelect;

export const projects = pgTable('projects', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	ownerId: serial('ownerId').notNull()
});
export type Project = typeof projects.$inferSelect;

export const logs = pgTable('logs', {
	id: serial('id').primaryKey(),
	projectId: serial('projectId').notNull(),
	content: text('content').notNull(),
	receivedAt: timestamp('receivedAt')
		.notNull()
		.$defaultFn(() => new Date()),
	generatedAt: timestamp('generatedAt').notNull()
});
export type Log = typeof logs.$inferSelect;
