import { Raleway } from 'next/font/google';
import './globals.css';
import '../public/assets/css/main.css';
import Footer from './components/Footer';
import NavBar2 from './components/Navbar2';
import { Analytics } from '@vercel/analytics/react';
import FloatingSmsButton from './components/FloatingSmsButton';




const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Brinova Home Cleaning Service',
  description: 'House Cleaning Service in Toronto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar2 />
        {children}
        <Analytics />
        <Footer />
        <FloatingSmsButton />
      </body>
    </html>
  )
}
