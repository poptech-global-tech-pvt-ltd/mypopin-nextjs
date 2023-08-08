'use client'
import './globals.css'
// import type { Metadata } from 'next'
import { useMediaQuery } from 'react-responsive'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
// import { Footer } from '@/components/Footer'
import { Footer } from '@/components'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <html lang="en">
      <body>
        {isDesktopOrLaptop ? <Header /> : <MobileHeader />}
        {children}
        <Footer />
      </body>
    </html>
  )
}
