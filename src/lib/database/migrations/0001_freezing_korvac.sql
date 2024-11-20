ALTER TABLE "stores" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "id" SET DEFAULT 'uuid_generate_v4()';--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "store_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "updated_at" SET NOT NULL;