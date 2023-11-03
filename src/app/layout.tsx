'use client'
import './globals.css'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import { Footer } from '@/components/Footer'
import Transition from '@/components/Transition/Transition'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState<string>();
  const pathname = usePathname()
  console.log("-->", window.location.search)

  useEffect(() => {
    if (window.location.search != null) {
      setSearchParam(window.location.search)
    }
  }, [])

  console.log({ searchParam })
  console.log("check-", pathname !== '/coupons' || searchParam !== "?ref=app")

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="XC5RlrclbQpKLhiUOTkFoJH_ltqE4rU6G--LiV9WLeI" />
      </head>
      <body>
        <Transition>
          <div className="hidden lg:block">
            {searchParam !== "?ref=app" ? <Header /> : null}
          </div>
          <div className="block lg:hidden">
            {searchParam !== "?ref=app" ? <MobileHeader /> : null}
          </div>
          {children}
          {(pathname !== '/coupons' && searchParam !== "?ref=app") ? <Footer /> : null}
        </Transition>
      </body>
    </html>
  )
}
