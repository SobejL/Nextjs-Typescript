// RootLayout.tsx

import StoreProvider from './StoreProvider';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/lib/context/themeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <head>
        {/* Add your head elements here */}
      </head>
      <body className={inter.className}>

        <ThemeProvider>
        <StoreProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
          </StoreProvider>
          </ThemeProvider>

      </body>
    </html>
  );
}
