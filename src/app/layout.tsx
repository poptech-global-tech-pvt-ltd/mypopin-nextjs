import './globals.css'
import { Header } from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import { Footer } from '@/components/Footer'
import Transition from '@/components/Transition/Transition'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <Footer />
        </Transition>
      </body>
    </html>
  )
}
