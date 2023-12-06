import { Inter } from 'next/font/google'
import './globals.css'
// import '../public/assets/css/animate.min.css'
// import '../public/assets/css/bootstrap.min.css'
// import '../public/assets/css/animate.min.css'
// import '../public/assets/css/custom-animation.css'
// import '../public/assets/css/fontawesome.min.css'
// import '../public/assets/css/meanmenu.css'
// import '../public/assets/css/magnific-popup.css'
// import '../public/assets/css/flaticon.css'
// import '../public/assets/css/venobox.min.css'
// import '../public/assets/css/backToTop.css'
// import '../public/assets/css/swiper-bundle.css'
// import '../public/assets/css/default.css'
import '../public/assets/css/main.css'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}