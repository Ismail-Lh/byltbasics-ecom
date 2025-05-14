CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"contact_phone" varchar(255) NOT NULL,
	"phone_verified" boolean NOT NULL,
	"email" varchar(255) NOT NULL,
	"email_verified" boolean NOT NULL,
	"confirmation_code" varchar(255),
	"password" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_contact_phone_unique" UNIQUE("contact_phone"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
