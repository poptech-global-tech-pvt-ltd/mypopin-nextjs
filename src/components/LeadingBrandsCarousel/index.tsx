'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InfiniteImageSlider } from "../InfinteImageSlider";

function LeadingBrandsCarousel() {
    const [brandLogos, setBrandLogos] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/popcoin-partners-widgets?populate=*`).then((res) => res.json()).then((data) => setBrandLogos(data?.data))
    }, [])

    console.log("brandLogos", brandLogos)

    return (
        // <Carousel
        //     additionalTransfrom={0}
        //     arrows={false}
        //     autoPlay
        //     autoPlaySpeed={6}
        //     centerMode={false}
        //     className=""
        //     containerClass="container-with-dots"
        //     customTransition="all 6s linear"
        //     dotListClass=""
        //     draggable
        //     focusOnSelect={false}
        //     infinite
        //     itemClass=""
        //     keyBoardControl
        //     minimumTouchDrag={80}
        //     pauseOnHover
        //     renderArrowsWhenDisabled={false}
        //     renderButtonGroupOutside={false}
        //     renderDotsOutside={false}
        //     responsive={{
        //         desktop: {
        //             breakpoint: {
        //                 max: 3000,
        //                 min: 1024
        //             },
        //             items: 5,
        //             partialVisibilityGutter: 40
        //         },
        //         mobile: {
        //             breakpoint: {
        //                 max: 464,
        //                 min: 0
        //             },
        //             items: 2,
        //             partialVisibilityGutter: 30
        //         },
        //         tablet: {
        //             breakpoint: {
        //                 max: 1024,
        //                 min: 464
        //             },
        //             items: 2,
        //             partialVisibilityGutter: 30
        //         }
        //     }}
        //     rewind={false}
        //     rewindWithAnimation={false}
        //     rtl={false}
        //     shouldResetAutoplay
        //     showDots={false}
        //     sliderClass=""
        //     slidesToSlide={2}
        //     swipeable={false}
        //     transitionDuration={1000}
        // >
        //     {(brandLogos?.length > 0) ? brandLogos?.map((i: any, index: number) => (
        //         <div key={index}>
        //             <Link href={`/brands/${i?.attributes?.redirection_url}`}>
        //                 <div className="flex items-center justify-center">
        //                     <img
        //                         src={i?.attributes?.image?.data?.attributes?.url}
        //                         width="150px"
        //                         height="auto"
        //                         alt={i.alt}
        //                     />
        //                 </div>
        //             </Link>
        //         </div>
        //     )) : <div>...</div>}
        // </Carousel>
        <div>
            <InfiniteImageSlider />
        </div>
    )
}

export default LeadingBrandsCarousel