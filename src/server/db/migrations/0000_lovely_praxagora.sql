CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid,
	"name" text,
	"email" text,
	"password" text,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
