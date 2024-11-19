'use server';

import { createClient } from '@/lib/supabase/server';

import { db } from '..';

export async function getStores() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const stores = await db.query.stores.findMany({
      where: (store, { eq }) => eq(store.userId, user?.id as string),
    });

    return stores;
  } catch (error) {
    console.error(error);
    throw new Error('Error when fetch stores');
  }
}
