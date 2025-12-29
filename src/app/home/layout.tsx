import DefaultLayout from '@/ui/Layout/Layout/Default';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
