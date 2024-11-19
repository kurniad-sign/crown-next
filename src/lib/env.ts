import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  DATABASE_URL: z.string().min(1),
});

type ENV = z.infer<typeof envSchema>;

const envData = envSchema.safeParse(process.env);

if (!envData.success) {
  console.error(
    '❌ Invalid environment variables:',
    envData.error.flatten().fieldErrors
  );

  throw new Error('Invalid environment variables');
}

export const Env: ENV = envData.data;
