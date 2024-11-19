import { Metadata } from 'next';
import MainLayout from '@/layout/main-layout';

export const metadata: Metadata = {
  title: 'Dashboard | Crown',
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
