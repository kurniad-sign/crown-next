import { Env } from '@/lib/env';

import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/lib/database/migrations',
  schema: './src/lib/database/schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: Env.DATABASE_URL,
  },
});
