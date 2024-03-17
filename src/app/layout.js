import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: "JL's Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
