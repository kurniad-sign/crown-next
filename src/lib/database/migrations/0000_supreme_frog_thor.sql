CREATE TABLE IF NOT EXISTS "stores" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "stores_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"user_id" varchar(255),
	"store_id" varchar(255),
	"store_logo_url" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "stores_store_id_unique" UNIQUE("store_id")
);
