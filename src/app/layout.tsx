import type { Metadata } from 'next';
import { inter } from '@/utils/fonts';
import { Footer, Header } from '@/modules';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Hotel Landing Page',
  description: 'Hotel Landing Page Created By Vivek',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
