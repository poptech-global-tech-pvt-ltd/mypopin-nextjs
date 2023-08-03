"use client"
import { Layout } from "@/components/Layout"
import { Hero } from '@/components/Hero'
import { HeroPartners } from '@/components/HeroPartners'
import { HowItWorks } from '@/components/HowItWorks'
import { POPInNumbers } from '@/components/POPInNumbers'
import { PopBenefits } from '@/components/PopBenefits'

// search params is not working properly

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1000px)'
  // })

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  console.log({params, searchParams })
  return (
    <main>
      {/* {isDesktopOrLaptop ? <Header /> : <MobileHeader />} */}
      <Layout>
        <Hero />
        <HeroPartners />
        {/* <HowItWorks /> */}
        <POPInNumbers />
      </Layout>
      <PopBenefits />
      {/* <Footer /> */}
    </main>
  )
}
