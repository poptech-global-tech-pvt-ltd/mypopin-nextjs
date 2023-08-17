
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


            {/* <Slider {...settings}>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-3xl lg:text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src="/casestudies/saaki-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src="/casestudies/saaki.svg" alt="anveshan logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <Image width="170" height="170" src="/casestudies/anveshan-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <Image width="371" height="336" src="/casestudies/anveshan.svg" alt="anveshan logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <Image width="170" height="170" src="/casestudies/gramiyaa-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <Image width="371" height="336" src="/casestudies/gramiyaa.svg" alt="gramiyaa logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider> */}
            <div style={{ width: "100%" }}>
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
                    <section>
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div className={`text-[32px] lg:text-[70px] ${khand.className}`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src="/casestudies/saaki-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src="/casestudies/saaki.svg" alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div className="px-2 lg:px-16">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex`}>
                                    <div><img className="w-[70px] h-[70px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex`}>
                                    <div><img className="w-[70px] h-[70px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold">16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</div>
                                </div>                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex`}>
                                    <div><img className="w-[70px] h-[70px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold">16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</div>
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
