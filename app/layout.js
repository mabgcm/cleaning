import { Raleway } from 'next/font/google';
import './globals.css';
import '../public/assets/css/main.css';
import Footer from './components/Footer';
import NavBar2 from './components/Navbar2';
import { Analytics } from '@vercel/analytics/react';




const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'The Neat Guys',
  description: 'Home Cleaning Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar2 />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
