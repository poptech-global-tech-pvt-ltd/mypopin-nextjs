'use client'
import Slider from "react-slick";
import Image from 'next/image'
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function B2BCaseStudies() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
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
    return (
        <div className="case-studies-container">
            <div style={{ width: "100%" }}>
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
                    infinite={true}
                    itemClass=""
                    //   keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={true}
                    responsive={responsive}
                    swipeable={true}
                >
                    {/* // FIRST SLIDE */}
                    <section className="bg-[#DDCCD3] py-10">
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div className={`text-[32px] lg:text-[70px] ${khand.className} text-[#621E45]`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src="/casestudies/saaki-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src="/casestudies/saaki.svg" alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div className="px-4 lg:px-16 text-[#621E45]">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[60px] h-[60px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold"> 28% increase in New Signup conversion</span> with 35% in the same session</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold"> 30% increase in checkout rates</span></div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold"> 15% increase in returning customers</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* // SECOND SLIDE */}
                    <section className="bg-[#DDCCD3] py-10">
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div className={`text-[32px] lg:text-[70px] ${khand.className} text-[#1A475A]`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src="/casestudies/anveshan-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src="/casestudies/anveshan.svg" alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div className="px-4 lg:px-16 text-[#1A475A]">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[70px] h-[70px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold"> 16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[70px] h-[70px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold"> 70X transacting customers per day</span> Up and transacting on the same day, in comparison to incumbents.</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[50px] h-[50px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold"> The brand is witnessing</span> 12X incremental revenue per day.</div>
                                </div>
                            </div>
                        </div>
                    </section>


                </Carousel>
            </div>
        </div>
    )
}

export { B2BCaseStudies }
