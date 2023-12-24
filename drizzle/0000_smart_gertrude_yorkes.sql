CREATE TABLE IF NOT EXISTS "lines" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text,
	"projectId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" text NOT NULL,
	"ownerId" text NOT NULL
);
