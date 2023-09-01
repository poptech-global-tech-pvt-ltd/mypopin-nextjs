'use client'
// @ts-nocheck
import './globals.css'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import { Footer } from '@/components'
import Transition from '@/components/Transition/Transition'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Introducing POP: Shop, Earn POPcoins, Get Rewards & Become our Partner | POP</title>
        <meta name="description" content="Become our Customer and Shop from Brands integrated with POPcoins and Earn Rewards & Discounts. Partner with us and revolutionize your Business Journey with our Growth Solutions at POP." />
        <meta name="keywords" content="Earn Popcoins, Get Rewards, Earn Rewards, Partner with POP, Popcoins, Popcoin, POP, pop" />
        <meta property="og:title" content="Introducing POP: Shop, Earn Popcoins, Get Rewards & Become our Partner | POP" />
        <meta property="og:description" content="Become our Customer and Shop from Brands integrated with POPcoins and Earn Rewards & Discounts. Partner with us and revolutionize your Business Journey with our Growth Solutions at POP." />
        <meta property="og:image" content="https://mypop.in/images/pc-logo.png" />
        <meta property="og:image:alt" content="India's New Currency POPcoins" />
        <meta property="og:url" content="https://mypop.in" />
        <link rel="canonical" href="https://mypop.in" />
        {/* // TODO add schema.org script tag */}
        {/* <!-- Facebook Pixel Code --> */}
        

      </head>

      <body>
        <Transition>
          <div className="hidden lg:block">
            <Header />
          </div>
          <div className="block lg:hidden">
            <MobileHeader />
          </div>
          {children}
          <Footer />
        </Transition>
      </body>
    </html>
  )
}
