CREATE TABLE IF NOT EXISTS "lines" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text,
	"projectId" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"ownerId" text NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp
);
