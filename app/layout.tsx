import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VantaNetBackground from '@/components/vanta-net-background'
import ParticleBackground from '@/components/particle-background'
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
  // keywords:
  //   "digital advertising, facebook ads, google ads, ad optimization, marketing agency, ROI, campaign management, PPC, social media marketing",
  // authors: [{ name: "GetExposure Team" }],
  // creator: "GetExposure",
  // publisher: "GetExposure",
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // openGraph: {
  //   title: "GetExposure - Transform Your Ad Spend Into Real Customers",
  //   description: "Data-driven advertising solutions that deliver real results",
  //   url: "https://getexposure.ca",
  //   siteName: "GetExposure",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "GetExposure - Digital Advertising Agency",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "GetExposure - Transform Your Ad Spend Into Real Customers",
  //   description: "Data-driven advertising solutions that deliver real results",
  //   images: ["/og-image.jpg"],
  //   creator: "@getexposure",
  // },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  // alternates: {
  //   canonical: "https://getexposure.ca",
  // },
  //   generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} ${inter.variable}`} >

      <body>
        <Navbar />
        <SmoothScrollProvider>

          {children}
        </SmoothScrollProvider>
        <CustomScrollbar />

        <Footer />
      </body>
    </html>
  )
}
