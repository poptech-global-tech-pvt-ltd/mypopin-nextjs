'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
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

function HeroBanner() {
    return (
        <>
            <section className="">
                <div className="h-[10vh] bg-white"></div>
                <div className="h-[90vh] relative w-[100vw!important] max-w-[1500px]  mx-auto">
                    <div className="banner-carousel-container" style={{ width: "100%", overflow: "hidden" }}>
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
                                    <Image
                                        src="/herobanner/banner-popcoin.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full object-cover"
                                        alt=""
                                        style={{ objectFit: "cover" }}

                                    />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <Image
                                        src="/herobanner/banner-anveshan.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full object-cover"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <Image
                                        src="/herobanner/banner-khadi.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full object-cover"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <Image
                                        src="/herobanner/banner-klotthe.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full object-cover"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <Image
                                        src="/herobanner/banner-rubans.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full  object-cover"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export { HeroBanner }