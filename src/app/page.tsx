'use client'
import { Layout } from "@/components/Layout"
import { Hero } from '@/components/Hero'
import { HeroPartners } from '@/components/HeroPartners'
import { HowItWorks } from '@/components/HowItWorks'
import { TopPOPcoinPartnerBrands } from '@/components/TopPOPcoinPartnerBrands'
import { POPInNumbers } from '@/components/POPInNumbers'
import { PopBenefits } from '@/components/PopBenefits'
import dynamic from "next/dynamic"
// const ShoppingDealsCarousel = dynamic(() => import('@/components/ShoppingDealsCarousel'), { ssr: false })
import ShoppingDealsCarousel from "@/components/ShoppingDealsCarousel"
import Spotlight from '@/components/Spotlight'
import TopBrands from "@/components/TopBrands"
import { POPShop } from "@/components/POPShop"
import { ShoppingDeals } from "@/components/ShoppingDeals"
import { POPBlog } from "@/components/POPBlog"
import { HeroBanner } from "@/components/HeroBanner"
import { HeroBannerMobile } from "@/components/HeroBannerMobile"



export default function Home() {
  return (
    <main>
      <div className="hidden custom-450px:block">
        <HeroBanner />
      </div>
      <div className="block custom-450px:hidden">
        <HeroBannerMobile />
      </div>
      <Layout>
        {/* // horizontal scroll becasue of <HeroPartners /> */}
        <HeroPartners />
        <ShoppingDeals />
        <HowItWorks />
        <TopPOPcoinPartnerBrands />
        <POPInNumbers />
      </Layout>
      {/* <ShoppingDealsCarousel /> */}
      {/* <Spotlight /> */}
      <PopBenefits />
      {/* <TopBrands /> */}
      <POPShop />
      <POPBlog />
    </main>
  )
}
