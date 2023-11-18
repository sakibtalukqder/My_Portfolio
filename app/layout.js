import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
import Navbar from '@/src/Shared/Navbar'
import Footer from '@/src/Shared/Footer'

import ICON from './favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sakib Talukqder',
  description: 'Personal portfolio build with next Js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${ICON}?v=4`} type="image/v=4" sizes="32x32" />
        <link rel="apple-touch-icon" href={"/apple-touch-icon.png?v=4"} type="image/v=4" sizes="32x32" />
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
