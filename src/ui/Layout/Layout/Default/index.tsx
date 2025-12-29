'use client';

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#eff1f7] pb-8 w-full flex flex-col gap-8 min-h-screen">{children}</div>
  );
}
