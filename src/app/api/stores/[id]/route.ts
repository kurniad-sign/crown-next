import { db } from "@/lib/database";
import { stores } from "@/lib/database/schemas/stores";
import { createClient } from "@/lib/supabase/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
  const supabase = await createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new NextResponse('Unauthorized Access', {
        status: 401,
      });
    }

    if (!params.id) {
      return new NextResponse('Store id is required', { status: 400 })
    }

    const store = await db.delete(stores).where(eq(stores.id, params.id)).returning({ deletedId: stores.id })

    return NextResponse.json(store[0], {
      status: 200,
      statusText: 'Store Deleted'
    })
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}