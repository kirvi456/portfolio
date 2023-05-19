import { Montserrat } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata = {
    title: 'Bryan Ordoñez',
    description: 'Bryan Ordoñez Full Stack Developer',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${montserrat.variable} bg-light w-full min-h-screen`}>
            <body>
                <Navbar />
                <main className='flex items-center next-dark w-full min-h-screen'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
