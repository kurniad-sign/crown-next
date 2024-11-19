'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email address is invalid' }).min(1),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters' }),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export function FormLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { mutate, isPending } = useMutation({
    mutationFn: (value: LoginSchemaType) => axios.post('/api/login', value),
    onSuccess: (data) => {
      console.log(data.data);
      router.replace('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitLogin: SubmitHandler<LoginSchemaType> = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-8">
      <div className="flex flex-col gap-y-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label="Email Address"
              labelPlacement="outside"
              placeholder="Your email address"
              type="email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email && errors.email.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeOff className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <Eye className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              variant="bordered"
              isInvalid={!!errors.password}
              errorMessage={errors.password && errors.password.message}
              {...field}
            />
          )}
        />
      </div>
      <Button
        isDisabled={isPending}
        isLoading={isPending}
        type="submit"
        color="primary"
        className="font-medium"
        fullWidth
      >
        Log in
      </Button>
    </form>
  );
}
