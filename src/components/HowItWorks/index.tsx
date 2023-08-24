'use client'

import { POPCard } from "../POPCard";
import { Khand } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function HowItWorks() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="max-w-5xl mx-auto">
            <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>How It Works?</div>
            <div style={{ width: "100%", overflow: "hidden" }}>
                <div>
                    <Carousel
                        arrows={false}
                        autoPlay={false}
                        autoPlaySpeed={1800}
                        centerMode={false}
                        //   className=""
                        //   containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        //   itemClass=""
                        //   keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}>
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
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export { HowItWorks }