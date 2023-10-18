'use client'
import './globals.css'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import { Footer } from '@/components/Footer'
import Transition from '@/components/Transition/Transition'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        <Transition>
          <div className="hidden lg:block">
            <Header />
          </div>
          <div className="block lg:hidden">
            <MobileHeader />
          </div>
          {children}
          {pathname !== '/coupons' ? <Footer /> : null}
        </Transition>
      </body>
    </html>
  )
}
