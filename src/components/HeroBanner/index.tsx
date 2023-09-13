'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fragment, useEffect, useState } from "react";
import { ImageComponent } from "../ImageComponent";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

    const [bannerData, setBannerData] = useState<any>(null)

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/hero-banner-images?populate=*`).then((res) => res.json()).then(data => setBannerData(data.data))
    }, [])

    console.log({ bannerData })

    return (
        <>
            <section className="">
                {/* // render the below code at 1024px */}
                <div className="h-[10vh] bg-white hidden lg:block"></div>
                <div className="h-[90vh] relative w-[100vw!important] max-w-[1500px]  mx-auto">
                    <div className="banner-carousel-container" style={{ width: "100%", overflow: "hidden" }}>

                        {bannerData === null ? (
                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <Skeleton width={"100vw"} height={"100vh"} count={1} />
                            </SkeletonTheme>
                        ) : (
                            <>
                                <Carousel
                                    ssr
                                    arrows={true}
                                    autoPlay={true}
                                    autoPlaySpeed={1800}
                                    centerMode={false}
                                    dotListClass="hero-banner-desktop-dots"
                                    draggable
                                    focusOnSelect={false}
                                    infinite
                                    minimumTouchDrag={80}
                                    pauseOnHover
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    renderDotsOutside={false}
                                    showDots
                                    responsive={responsive}
                                >
                                    {bannerData?.length > 0 && bannerData?.map((itm: any, index: number) => (
                                        <Fragment key={index}>
                                            <div className="cursor-pointer">
                                                <a target="_blank" href={itm?.attributes.redirection_url}>
                                                    <div className="h-[90vh] w-[100vw]">
                                                    <img
                                                        style={{width : "100vw", height : "90vh"}}
                                                        src={itm?.attributes?.image?.data?.attributes?.url}
                                                        // hash={"LVMj5ikDQ-tlNytRVra{y?VsyXSh"}
                                                        width={"100vw"}
                                                        height={"90vh"}
                                                    />
                                                    </div>
                                                </a>
                                            </div>
                                        </Fragment>
                                    ))}
                                </Carousel>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export { HeroBanner }