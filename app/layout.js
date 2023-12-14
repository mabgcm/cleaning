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
import Footer from './components/Footer'
import Favicon from './favicon.ico';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Neat Guys',
  description: 'Home Cleaning Service',
  icons: [{ rel: 'icon', url: Favicon.src }],
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
