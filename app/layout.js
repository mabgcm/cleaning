import { Raleway } from 'next/font/google';
import './globals.css';
import '../public/assets/css/main.css';
import Footer from './components/Footer';
import NavBar2 from './components/Navbar2';
import { Analytics } from '@vercel/analytics/react';
import FloatingSmsButton from './components/FloatingSmsButton';
import Script from 'next/script';




const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Brinova Home Cleaning Service',
  description: 'House Cleaning Service in Toronto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '897162740140133');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=897162740140133&ev=PageView&noscript=1"/>`}
        </noscript>
      </head>
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
