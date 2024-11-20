import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

import { db } from '@/lib/database';
import { stores, StoresDataType } from '@/lib/database/schemas/stores';
import { createClient } from '@/lib/supabase/server';
import { uniqueId } from '@/lib/uniqueId';
import { storeSchema } from '@/lib/validations/store';

export type StoreResponseData = {
  data: StoresDataType,
  message: string,
  statusCode: number;
}

const app = new Hono().post(
  '/',
  zValidator('json', storeSchema),
  async (context) => {
    const supabase = await createClient();
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        return context.json(
          {
            error,
            message: 'User not found',
            statusCode: 404,
          },
          404
        );
      }

      const body = context.req.valid('json');
      const { name, storeId } = body;

      const payload = {
        name,
        storeId: !storeId ? uniqueId() : storeId,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.id,
      };

      const newStores = await db.insert(stores).values(payload).returning();

      return context.json(
        {
          data: newStores[0],
          message: 'Store successfully created',
          statusCode: 200,
        },
        200
      );
    } catch (error) {
      console.error(error);
      return context.body('Internal Server Error', 500);
    }
  }
);

export default app;
