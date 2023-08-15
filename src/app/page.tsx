"use client"
import { Layout } from "@/components/Layout"
import { Hero } from '@/components/Hero'
import { HeroPartners } from '@/components/HeroPartners'
import { HowItWorks } from '@/components/HowItWorks'
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

// search params is not working properly
export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {



  return (
    <main>
      <Layout>
        <Hero />
        <HeroPartners />
        <ShoppingDeals />
        <HowItWorks />
        <POPInNumbers />
      </Layout>
      {/* <ShoppingDealsCarousel /> */}
      <Spotlight />
      <PopBenefits />
      {/* <TopBrands /> */}
      <POPShop />
      <POPBlog />
    </main>
  )
}
