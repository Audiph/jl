import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JL',
  description: "JL's Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-[#222222] to-black">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
