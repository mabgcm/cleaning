import { Raleway } from 'next/font/google'
import './globals.css'
import '../public/assets/css/main.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'The Neat Guys',
  description: 'Home Cleaning Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
