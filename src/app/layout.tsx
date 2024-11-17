import type { Metadata } from 'next';

import './globals.css';

import { UIProviders } from '@/providers/nextui';
import { cn } from '@nextui-org/react';

import { generalSans, inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(generalSans.variable, inter.variable)}>
        <UIProviders>{children}</UIProviders>
      </body>
    </html>
  );
}
