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
            items: 1
        }
    };

    return (
        <section className="max-w-5xl mx-auto">
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-md-12">
                    <h2 className={`${khand.className}  text-center text-6xl py-16`}>Top POPcoin partner brands</h2>
                    <div className="slider-popcoins-brands">
                    <Carousel
                        arrows={false}
                        autoPlay={false}
                        autoPlaySpeed={1800}
                        centerMode={false}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}>
                        <POPHoverCard
                            brandLogoPath="/saga-logo-toppopcoins-brand.png"
                            brandBackgroundPath="/saga-bg-toppopcoins-brand.png"
                            coinEarningText="Earn 5 POPcoins on every ₹100"
                            hoverText="A homegrown lifestyle brand trying to make a difference through slow luxury
                            and ethical textile practices while narrating stories, reviving culture and
                            doing good by sustaining livelihoods."
                        />
                         <POPHoverCard
                            brandLogoPath="/saga-logo-toppopcoins-brand.png"
                            brandBackgroundPath="/saga-bg-toppopcoins-brand.png"
                            coinEarningText="Earn 5 POPcoins on every ₹100"
                            hoverText="A homegrown lifestyle brand trying to make a difference through slow luxury
                            and ethical textile practices while narrating stories, reviving culture and
                            doing good by sustaining livelihoods."
                        />
                         <POPHoverCard
                            brandLogoPath="/saga-logo-toppopcoins-brand.png"
                            brandBackgroundPath="/saga-bg-toppopcoins-brand.png"
                            coinEarningText="Earn 5 POPcoins on every ₹100"
                            hoverText="A homegrown lifestyle brand trying to make a difference through slow luxury
                            and ethical textile practices while narrating stories, reviving culture and
                            doing good by sustaining livelihoods."
                        />
                         <POPHoverCard
                            brandLogoPath="/saga-logo-toppopcoins-brand.png"
                            brandBackgroundPath="/saga-bg-toppopcoins-brand.png"
                            coinEarningText="Earn 5 POPcoins on every ₹100"
                            hoverText="A homegrown lifestyle brand trying to make a difference through slow luxury
                            and ethical textile practices while narrating stories, reviving culture and
                            doing good by sustaining livelihoods."
                        />
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export { TopPOPcoinPartnerBrands }