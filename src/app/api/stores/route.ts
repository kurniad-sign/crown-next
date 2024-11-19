import { NextResponse } from 'next/server';

import { db } from '@/lib/database';
import { stores } from '@/lib/database/schemas/stores';
import { createClient } from '@/lib/supabase/server';
import { uniqueId } from '@/lib/uniqueId';
import { StoreSchema } from '@/lib/validations/store';

export async function POST(request: Request) {
  const supabase = await createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const body: StoreSchema = await request.json();

    if (!user) {
      return new NextResponse('Unauthorized Access', {
        status: 401,
      });
    }

    const payload = {
      name: body.name,
      storeId: !body.storeId ? uniqueId() : body.storeId,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: user.id,
    };

    const newStores = await db.insert(stores).values(payload).returning();

    return NextResponse.json(newStores[0], {
      status: 200,
      statusText: 'Store Created',
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
