import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'ARCHITECTURED workspace bootstrap',
  description: 'Technical workspace bootstrap verification page.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
