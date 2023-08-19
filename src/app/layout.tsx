'use client'
import './globals.css'
// import type { Metadata } from 'next'
import { useMediaQuery } from 'react-responsive'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
// import { Footer } from '@/components/Footer'
import { Footer } from '@/components'
import { useScrollDirection } from '../hooks/useScrollDirection'
import Transition from '@/components/Transition/Transition'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const scrollDirection = useScrollDirection();

  return (

    <html lang="en">
      <body>
        <Transition>
          {isDesktopOrLaptop ? <Header /> : <MobileHeader />}
          {children}
          <Footer />
        </Transition>
      </body>
    </html>
  )
}
