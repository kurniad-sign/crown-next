import './globals.css';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { NextUIProvider, QueryProvider } from '@/providers';
import { cn } from '@nextui-org/react';

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
        </QueryProvider>
      </body>
    </html>
  );
}
