import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const stores = pgTable('stores', {
  id: uuid('id')
    .default(sql`uuid_generate_v4()`)
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  storeId: varchar('store_id', { length: 255 }).unique(),
  storeLogoUrl: varchar('store_logo_url', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type StoresDataType = InferSelectModel<typeof stores>;
export type StoresInsertType = InferInsertModel<typeof stores>;
