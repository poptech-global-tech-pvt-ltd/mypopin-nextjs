'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function HeroBannerMobile() {
    return (
        <>
            <section className="">
                {/* <div className="h-[10vh] bg-white"></div> */}
                <div className="h-[90vh] w-[100vw!important] max-w-[1500px]  mx-auto">
                    <div className="banner-carousel-container">
                        <Carousel
                            arrows={true}
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
                            <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-popcoin-mobile.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-anveshan-mobile.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-khadi-mobile.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-klotthe-mobile.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-rubans-mobile.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export { HeroBannerMobile }