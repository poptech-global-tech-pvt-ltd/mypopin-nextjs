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
            <LeadingBrandsCarousel />
        </div>
    )
}

export { HeroPartners }