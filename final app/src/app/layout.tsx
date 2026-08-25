import type { Metadata } from 'next';
import './globals.css';
import { SIGNATURE } from '@/lib/mark';

export const metadata: Metadata = {
  title: 'Final App — Repair Shop Operations',
  description:
    'Connected Repair Operations Pilot — ready-to-run implementation of the ARCHITECTURED Technician Repair SaaS Release 1 MVP plan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* provenance marker — intentionally silent */}
        <span hidden data-prov={SIGNATURE} aria-hidden="true" />
      </body>
    </html>
  );
}
