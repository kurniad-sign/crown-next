import { Header, Sidebar } from '@/components/layout';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <section className="relative z-[1] flex min-h-[380px] grow flex-col">
        <Header />
        <main className="relative h-full px-6 py-4 bg-gray-100">{children}</main>
      </section>
    </div>
  );
}
