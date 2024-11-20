import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

import { createClient } from '@/lib/supabase/server';
import { loginSchema } from '@/lib/validations/login';

const app = new Hono().post('/login', zValidator('json', loginSchema) , async (context) => {
  const supabase = await createClient();

  try {
    const data = context.req.valid('json')
    const { email, password } = data

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return context.json(
        { error: error.message, message: 'Login Failed' },
        401
      );
    }

    return context.json({ message: 'Login Successful!' });
  } catch (error) {
    console.error(error);
    return context.body('Something when wrong', 500);
  }
});

export default app;
