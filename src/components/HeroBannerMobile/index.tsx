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
                                <a href="https://www.anveshan.farm/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=MyPOP&utm_campaign=POP_website&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1U%2FMK0stzkjMMwIAsIjwMSQAAAA%3D">
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
                                <a href="https://khadiessentials.com/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=WhatsApp_POP&utm_campaign=Coalition_Txn_WhatsApp&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAAwXBwQkAIAgAwInSf9tYCkpigrZ%2Fd9qdNRHZIW9ufwv2BQsUPErENqRKoo28PlbHhFMsAAAA">
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
                                <a href="https://www.klotthe.com/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=WhatsApp_POP&utm_campaign=Coalition_Txn_WhatsApp&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1ffOyS8pyUgFAEqNW6YiAAAA">
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
                                <a href="https://www.rubans.in/?%24web_only=true&_branch_match_id=1212631108629519337&utm_source=MyPOP&utm_campaign=POP_website&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8nRK8gvSM4pTdJLztfLzNNP1S8qTUrMKzYCAO90pm0iAAAA">
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