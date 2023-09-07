'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import { Fragment, useEffect, useState } from "react";

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

    const [bannerData, setBannerData] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/hero-banner-mobile-images?populate=*`).then((res) => res.json()).then(data => setBannerData(data.data))
    }, [])


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
                            showDots
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
                            {bannerData?.length > 0 && bannerData?.map((itm: any, index: number) => (
                                <Fragment key={index}>
                                    <div>
                                    <a target="_blank" href={itm?.attributes.redirection_url}>
                                            <div className="h-[90vh] w-[100vw]">
                                                <Image
                                                    src={itm?.attributes?.image?.data?.attributes?.url}
                                                    fill
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                    priority
                                                    quality={100}
                                                // loader={customLoader}                                        
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </Fragment>
                            ))}

                            {/* <div>
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
                            </div> */}

                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export { HeroBannerMobile }