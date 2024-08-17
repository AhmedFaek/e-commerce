'use client'; // Ensure this is included if you're using client components

import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/Components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
