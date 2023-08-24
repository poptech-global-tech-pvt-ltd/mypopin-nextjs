
'use client'
import Image from "next/image"
import { Fragment, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function TestimonialsCarousel() {
    const [testimonialData, setTestimonialData] = useState<any>();

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


    // const testimonials = [
    //     { imageRelativePath: '/testimonials/testimonial-anveshan.svg', alt: "anveshan" },
    //     { imageRelativePath: '/testimonials/testimonial-gramiyaa.svg', alt: "gramiyaa" },
    //     { imageRelativePath: '/testimonials/testimonial-saaki.svg', alt: "saaki" }
    // ]

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/testimonials-widgets?populate=*`).then((res) => res.json()).then((data) => setTestimonialData(data?.data))
    }, [])

    console.log({testimonialData})
    return (
        <>
            <div style={{ width: "100%", overflow: "hidden" }}>
                <div>
                    <Carousel
                        arrows={false}
                        autoPlay={true}
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

                        {testimonialData?.length > 0 && testimonialData?.map((itm: any, index: number) => (
                            <Fragment key={index}>
                                <div>
                                    <img alt="" src={itm?.attributes?.image?.data?.attributes?.url} />
                                </div>
                            </Fragment>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default TestimonialsCarousel