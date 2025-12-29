import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import '@/presentation/styles/globals.css';

import { Toaster } from '@/ui/Feedback/Toast/Toaster';
import { RootProvider } from '@/presentation/providers';

const rubikSans = Rubik({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Campos de Batalha',
  description:
    'Forme equipes com seus heróis e vilões favoritos, criando combinações estratégicas que colocam à prova sua criatividade e inteligência.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" translate="no">
      <head>
        <link rel="icon" href="/assets/shared/favicon.svg" />
      </head>

      <body className={`${rubikSans.variable} h-screen`}>
        <main className="h-screen">
          <RootProvider>{children}</RootProvider>
        </main>

        <Toaster />
      </body>
    </html>
  );
}
