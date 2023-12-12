import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
import Navbar from '@/src/Shared/Navbar'
import Footer from '@/src/Shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sakib Talukqder',
  description: 'Personal portfolio build with next Js',
  name: "google-site-verification",
  content: "N2LZQg3R-UVVEO1wOzqTuGcyuRCECXDXglZNsXTDXek"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="N2LZQg3R-UVVEO1wOzqTuGcyuRCECXDXglZNsXTDXek" />
        <link rel="icon" href={'/favicon.ico?v=4'} type="image/v=4" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <div className='mx-0 md:mx-12 lg:mx-16 xl:mx-20'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
