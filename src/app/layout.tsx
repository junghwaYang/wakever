import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'wakever',
  description: '유튜브 팬치를 위한 우왁굳 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
