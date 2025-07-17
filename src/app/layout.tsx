import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import SearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Philipp Scheer</title>
        <link rel="icon" href="/images/avatar-64x64.webp" />
      </head>

      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            SearchDialog,
          }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
