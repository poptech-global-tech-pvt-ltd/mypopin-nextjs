'use client'
import { Khand } from 'next/font/google'
import dynamic from 'next/dynamic'
const LeadingBrandsCarousel = dynamic(() => import('@/components/LeadingBrandsCarousel'), { ssr: false })

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function HeroPartners() {
    return (
        <div>
            {/* <div className={`${khand.className} text-center text-[35px]`}>Meet The POPCoins Partners</div> */}
            <LeadingBrandsCarousel />
        </div>
    )
}

export { HeroPartners }