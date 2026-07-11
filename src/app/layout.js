import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import LoadingScreen from '../components/LoadingScreen';
import SmoothScroll from '../components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Rudra Group | Real Estate Developer in Dholera SIR',
  description: 'Rudra Buildcon Pvt. Ltd. is a leading real estate developer offering residential, commercial, and industrial plots in Dholera SIR, Gujarat. Secure high return investments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <SmoothScroll>
            <LoadingScreen />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
