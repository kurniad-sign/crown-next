import { NextResponse } from 'next/server';

import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const supabase = await createClient();

  try {
    const body = await request.json();
    const { email, password } = body;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Login failed.' },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: 'Login successful!' }, { status: 200 });
  } catch (error) {
    console.error('Login Error', error);
    return new NextResponse('Something when wrong', { status: 500 });
  }
}
