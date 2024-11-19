import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const stores = pgTable('stores', {
  id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  userId: varchar('user_id', { length: 255 }),
  storeId: varchar('store_id', { length: 255 }).unique(),
  storeLogoUrl: varchar('store_logo_url', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
