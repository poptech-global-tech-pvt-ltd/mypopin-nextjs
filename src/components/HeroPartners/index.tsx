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
                <div className={`${khand.className} text-center text-6xl py-16`}>Meet The POPCoins Partners</div>
                <div>
                    <LeadingBrandsCarousel />
                </div>
            </div>
        </>
    )
}

export { HeroPartners }