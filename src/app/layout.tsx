import './globals.css';

import { NextUIProvider, QueryProvider, ToastProvider } from '@/providers';
import { cn } from '@nextui-org/react';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const generalSans = localFont({
  src: '../../public/fonts/GeneralSans.ttf',
  display: 'swap',
  variable: '--font-general-sans',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(generalSans.variable, inter.variable)}>
        <QueryProvider>
          <NextUIProvider>{children}</NextUIProvider>
          <ToastProvider />
        </QueryProvider>
      </body>
    </html>
  );
}
