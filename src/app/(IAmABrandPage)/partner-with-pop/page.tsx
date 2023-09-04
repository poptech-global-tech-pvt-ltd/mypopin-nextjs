'use client'

import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import dynamic from 'next/dynamic'
import { B2BHero } from '@/components/B2BHero'
import { BrandPartners } from '@/components/BrandPartners'
import { B2BPopInNumbers } from '@/components/B2BPopInNumbers'
import { B2BIntegrations } from '@/components/B2BIntegrations'
import { B2BCaseStudies } from '@/components/B2BCaseStudies'
import { ScheduleDemo } from '@/components/ScheduleDemo'
import { POPBlog } from '@/components/POPBlog'
const LeadingBrandsCarousel = dynamic(() => import('@/components/LeadingBrandsCarousel'), { ssr: false })
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel'), { ssr: false })

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function PartnerWithPOP() {
    return (
        <>
            <div className="pt-10 lg:pt-24">
                <div>
                    <B2BHero />
                </div>
                <div className='mt-24 lg:mt-0'>
                    <div className={`${khand.className} text-2xl lg:text-7xl text-center font-bold py-16 lg:py-10`}>Trusted By Leading Brands</div>
                    <div className='py-5 pb-10'>
                        <LeadingBrandsCarousel />
                    </div>
                </div>
                <div>
                    <BrandPartners />
                </div>
                <div>
                    <B2BPopInNumbers />
                </div>
                {/* // here new */}
                <div>
                    <B2BIntegrations />
                </div>
                <div>
                    <B2BCaseStudies />
                </div>
                <div>
                    <div className={`${khand.className} text-center pt-12 font-bold text-3xl lg:text-6xl`}>Brand Testimonials</div>
                    <div className='max-w-6xl flex justify-center mx-auto'>
                        <TestimonialsCarousel />
                    </div>
                </div>
                <div>
                    <ScheduleDemo />
                </div>
                <POPBlog />
            </div>
        </>
    )
}

export default PartnerWithPOP