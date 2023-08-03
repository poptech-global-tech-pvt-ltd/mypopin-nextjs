import { POPCard } from "../POPCard";
import { Khand } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function HowItWorks() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className={`${khand.className}  text-center text-6xl py-16`}>How It Works?</div>
            <div className="flex w-full">
                <POPCard
                    title="Shop"
                    description="Shop from brands powered by POPCoins Loyalty"
                    imageRelativePath="/shop-logo.svg"
                />
                <POPCard
                    title="Earn"
                    description="Earn POPcoins when you signup, purchase a product and through referrals."
                    imageRelativePath="/earn-logo.svg"
                />
                <POPCard
                    title="Redeem"
                    description="Avail discounts by shopping with POPcoins."
                    imageRelativePath="/redeem-logo.svg"
                />
            </div>
        </div>
    )
}

export { HowItWorks }