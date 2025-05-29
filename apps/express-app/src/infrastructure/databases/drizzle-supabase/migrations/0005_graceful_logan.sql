ALTER TABLE "refreshTokens" ALTER COLUMN "ip_address" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "refreshTokens" ALTER COLUMN "revocation_reason" DROP DEFAULT;