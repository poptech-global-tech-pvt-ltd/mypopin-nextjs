'use client'
import './globals.css'
// import type { Metadata } from 'next'
import { useMediaQuery } from 'react-responsive'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
// import { Footer } from '@/components/Footer'
import { Footer } from '@/components'
import { useScrollDirection } from '../hooks/useScrollDirection'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const scrollDirection = useScrollDirection();

  return (
    <html lang="en">
      <body>
        {isDesktopOrLaptop ?
          // <div className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-blue-200 transition-all duration-500`}>
          <Header />
          // </div>
          :
          <MobileHeader />
        }
        {children}
        <Footer />
      </body>
    </html>
  )
}
