import type { Metadata } from 'next'
import './globals.css'
// import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Raleway, Inter } from 'next/font/google';
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { Poppins } from 'next/font/google';

import CustomScrollbar from '@/components/CustomScrollbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "GetExposure - Transform Your Ad Spend Into Real Customers",
  description:
    "Stop wasting money on ads that don't convert. Our data-driven approach optimizes your campaigns for maximum ROI, turning every dollar spent into measurable growth.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} ${inter.variable}`} >

      <body className=''>
        {/* <Navbar /> */}
        <SmoothScrollProvider>

          {children}
        </SmoothScrollProvider>
        <CustomScrollbar />

        <Footer />
      </body>
    </html>
  )
}
