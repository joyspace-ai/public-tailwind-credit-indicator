import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwind Credit Indicator Demo',
  description: 'Demo for the Tailwind Credit Indicator component'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
} 