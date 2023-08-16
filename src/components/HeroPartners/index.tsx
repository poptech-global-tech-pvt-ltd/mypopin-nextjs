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
                <div className={`${khand.className} text-center px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 lg:text-6xl py-16`}>Meet The POPCoins Partners</div>
                <div>
                    <LeadingBrandsCarousel />
                </div>
            </div>
        </>
    )
}

export { HeroPartners }