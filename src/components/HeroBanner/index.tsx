'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import { Fragment, useEffect, useState } from "react";
import { ImageComponent } from "../ImageComponent";

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

// const imageKitLoader = ({ src, width, quality } : any) => {
//     if(src[0] === "/") src = src.slice(1);
//     const params = [`w-${width}`];
//     if (quality) {
//       params.push(`q-${quality}`);
//     }
//     const paramsString = params.join(",");
//     var urlEndpoint = "https://ik.imagekit.io/your_imagekit_id";
//     if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
//     return `${urlEndpoint}/${src}?tr=${paramsString}`
//   }

function HeroBanner() {

    const [bannerData, setBannerData] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/hero-banner-images?populate=*`).then((res) => res.json()).then(data => setBannerData(data.data))
    }, [])

    console.log({bannerData})
    
    return (
        <>
            <section className="">
                {/* // render the below code at 1024px */}
                <div className="h-[10vh] bg-white hidden lg:block"></div>
                <div className="h-[90vh] relative w-[100vw!important] max-w-[1500px]  mx-auto">
                    <div className="banner-carousel-container" style={{ width: "100%", overflow: "hidden" }}>
                        <Carousel
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
                            responsive={responsive}>

                            {bannerData?.length > 0 && bannerData?.map((itm: any, index: number) => (
                                <Fragment key={index}>
                                    <div className="cursor-pointer">
                                        <a target="_blank" href={itm?.attributes.redirection_url}>
                                            {/* <div className="h-[90vh] w-[100vw]"> */}
                                                <ImageComponent
                                                    src={itm?.attributes?.image?.data?.attributes?.url}
                                                    hash={"LVMj5ikDQ-tlNytRVra{y?VsyXSh"}
                                                    width={"100vw"}
                                                    height={"90vh"}
                                                    // fill
                                                    // className="w-full h-full object-cover"
                                                    // alt=""
                                                    // priority
                                                    // quality={100}
                                                    // loader={customLoader}                                        
                                                    />
                                            {/* </div> */}
                                        </a>
                                    </div>
                                </Fragment>
                            ))}
                            {/* <div>12</div> */}
                            {/* <div>
                                <a href="">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-popcoin.png"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.anveshan.farm/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=MyPOP&utm_campaign=POP_website&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1U%2FMK0stzkjMMwIAsIjwMSQAAAA%3D">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-anveshan.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://khadiessentials.com/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=WhatsApp_POP&utm_campaign=Coalition_Txn_WhatsApp&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAAwXBwQkAIAgAwInSf9tYCkpigrZ%2Fd9qdNRHZIW9ufwv2BQsUPErENqRKoo28PlbHhFMsAAAA">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-khadi.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.klotthe.com/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=WhatsApp_POP&utm_campaign=Coalition_Txn_WhatsApp&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1ffOyS8pyUgFAEqNW6YiAAAA">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-klotthe.svg"
                                            fill
                                            sizes="100vw"
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.rubans.in/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=MyPOP&utm_campaign=POP_website&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1S8qTUrMKzYCAO90pm0iAAAA">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-rubans.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://perforacare.com/">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-perfora.svg"
                                            fill
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.bartisans.in/">
                                    <div className="h-[90vh] w-[100vw]">
                                        <Image
                                            src="/herobanner/banner-bartisans.svg"
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

export { HeroBanner }