import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import { Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

function BrandRewardsCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };

    return (
        <>
            <div className="py-8" />
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className={`mr-12 flex flex-shrink-0 w-full max-w-[300px] p-9 ${manrope.className}`}>
                        <div className="my-auto">
                            <div className={`text-3xl font-bold flex`}>
                                <Image
                                    src="/pop-coin-fiat.svg"
                                    width={30}
                                    height={30}
                                    alt="Popcoin"
                                    className='mx-1'
                                />
                                <div>1 EQUALS ₹ 1</div>
                            </div>
                            <div className={`text-xl font-[500] text-[21px] ${manrope.className} font-normal text-[#353535]`}> Maximise Your Savings & Shop More With POPcoins</div>
                        </div>
                    </div>
                    <div style={{ width: "100%", overflow: "hidden" }}>
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

                            <div className="relative">
                                <img
                                    src="/discountcarousel/discount-slide-background-1.png"
                                    alt="hgfd"
                                    className="w-[200px] h-[auto] lg:w-[300px] lg:h-[auto]"
                                // style={{ width: "300px", height: "auto" }}
                                />
                                <div className={`absolute top-0 left-0 pl-6 pr-12 pt-5 text-black text-[12px] lg:text-[28px] lg:leading-[32px] font-[600] ${manrope.className}`}>
                                    Avail additional discounts when shopping from brands powered <br /> by POPcoins <br /> Loyalty
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/discountcarousel/discount-slide-background-2.png"
                                    alt="hgfd"
                                    className="w-[200px] h-[auto] lg:w-[300px] lg:h-[auto]"
                                // style={{ width: "300px", height: "auto" }}
                                />
                                <div className={`absolute top-0 left-0 pl-6 pr-12 pt-5 text-black text-[12px] lg:text-[28px] lg:leading-[32px] font-[600] ${manrope.className}`}>
                                    Explore the Reward Store to grab Free Brand Samples
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/discountcarousel/discount-slide-background-3.png"
                                    alt="hgfd"
                                    className="w-[200px] h-[auto] lg:w-[300px] lg:h-[auto]"
                                // style={{ width: "300px", height: "auto" }}
                                />
                                <div className={`absolute top-0 left-0 pl-6 pr-12 pt-5 text-black text-[12px] lg:text-[28px] lg:leading-[32px] font-[600] ${manrope.className}`}>
                                    Use POPcoins to access offers across brands, movies, events, travel &amp; more&nbsp;
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export { BrandRewardsCarousel }