import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { Env } from '../env';
import { stores } from './schemas/stores';

const schema = {
  stores,
};

export const client = postgres(Env.DATABASE_URL, { prepare: false });
export const db = drizzle(client, { schema });
