'use client'

import { POPCard } from "../POPCard";
import { Khand } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { POPHoverCard } from "../POPHoverCard";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function TopPOPcoinPartnerBrands() {
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
            items: 1.5
        }
    };

    return (
        <section className="max-w-6xl mx-auto">
            <div className="container-fluid px-0">
                <div className="row mx-0">
                    <div className="col-md-12">
                        {/* <h2 className={`${khand.className}  text-center text-6xl py-16`}>Top POPcoin partner brands</h2> */}
                        <h1 className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>Top POPcoin partner brands</h1>
                        <div className="slider-popcoins-brands">
                            <div style={{ width: "100%", overflow: "hidden" }}>
                                <Carousel
                                    itemClass="top-brand-itm"
                                    arrows={false}
                                    autoPlay={true}
                                    autoPlaySpeed={1800}
                                    centerMode={false}
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite
                                    minimumTouchDrag={80}
                                    pauseOnHover={false}
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    renderDotsOutside={false}
                                    responsive={responsive}>
                                    <POPHoverCard
                                        brandLogoPath="/saga-logo-toppopcoins-brand.png"
                                        brandBackgroundPath="/topPopCoinPartnerBrands/saga.png"
                                        coinEarningText="Earn 5 POPcoins on every ₹100"
                                        hoverText="A homegrown lifestyle brand trying to make a difference through slow luxury
                            and ethical textile practices while narrating stories, reviving culture and
                            doing good by sustaining livelihoods."
                                    />
                                    <POPHoverCard
                                        brandLogoPath="/saga-logo-toppopcoins-brand.png"
                                        brandBackgroundPath="/topPopCoinPartnerBrands/saaki.png"
                                        coinEarningText="Earn 5 POPcoins on every ₹100"
                                        hoverText="A modern Indian brand co-created with Samantha Ruth Prabhu, bringing Indian
                            fashion to women worldwide, with the right blend of an Indian heart and a
                            global outlook."
                                    />
                                    <POPHoverCard
                                        brandLogoPath="/saga-logo-toppopcoins-brand.png"
                                        brandBackgroundPath="/topPopCoinPartnerBrands/tatha.png"
                                        coinEarningText="Earn 5 POPcoins on every ₹100"
                                        hoverText="Tatha created pure and natural routines for the skin, devoid of any
                            chemicals, born from ancient roots and built with contemporary ways to meet
                            modern needs."
                                    />
                                    <POPHoverCard
                                        brandLogoPath="/saga-logo-toppopcoins-brand.png"
                                        brandBackgroundPath="/topPopCoinPartnerBrands/anveshan.png"
                                        coinEarningText="Earn 5 POPcoins on every ₹100"
                                        hoverText="With food infused with Ayurvedic and traditional wisdom passed on by our
                            ancestors, Anveshan assures wholesome, chemical-free and preservative-free
                            food straight from the farms."
                                    />
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { TopPOPcoinPartnerBrands }