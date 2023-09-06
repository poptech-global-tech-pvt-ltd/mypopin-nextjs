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
        <>
            <div>
                <h1 className={`${khand.className} text-center px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 lg:text-6xl py-10 lg:pt-16 lg:pb-14`}>Meet The POPCoins Partners</h1>
                <div>
                    <LeadingBrandsCarousel />
                </div>
            </div>
        </>
    )
}

export { HeroPartners }