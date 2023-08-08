import { Khand } from 'next/font/google'
import { ShoppingCarousel } from '@/components/ShoppingCarousel'


const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function ShoppingDeals() {
    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className={`${khand.className} text-center text-6xl py-16`}>carousel</div>
                {/* <ShoppingCarousel autoplay interval={3000}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </ShoppingCarousel> */}
            </div>
        </>
    )
}

export { ShoppingDeals }