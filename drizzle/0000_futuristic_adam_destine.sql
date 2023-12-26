CREATE TABLE IF NOT EXISTS "keys" (
	"id" text PRIMARY KEY NOT NULL,
	"hashed_password" text,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lines" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text,
	"projectId" text NOT NULL,
	"deploymentId" text DEFAULT 'unknown',
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"ownerId" text NOT NULL,
	"token" text NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"active_expires" bigint NOT NULL,
	"idle_expires" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL
);
