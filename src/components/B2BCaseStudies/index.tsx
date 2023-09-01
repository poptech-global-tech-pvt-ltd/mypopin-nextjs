'use client'
import Slider from "react-slick";
import Image from 'next/image'
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function B2BCaseStudies() {
    const [caseStudiesData, setCaseStudiesData] = useState<any>();
    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/case-studies-widgets?populate=*`).then((res) => res.json()).then((data) => setCaseStudiesData(data?.data))
    }, [])
    console.log({ caseStudiesData })
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
                    showDots={true}
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
                    renderDotsOutside={false}
                    responsive={responsive}
                    swipeable={true}
                >
                    {/* // FIRST SLIDE */}
                    {caseStudiesData && (
                        <>
                         <section style={{ backgroundColor: caseStudiesData ? caseStudiesData[0].attributes?.background_color : "white" }} className="bg-[#DDCCD3] py-10">
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div style={{ color: caseStudiesData ? caseStudiesData[0].attributes?.text_color : "white" }} className={`text-[32px] lg:text-[70px] ${khand.className}`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src={caseStudiesData[0].attributes?.logo_image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src={caseStudiesData[0].attributes?.image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div className="px-4 lg:px-16 text-[#621E45]">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[60px] h-[60px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[0].attributes?.desc_1.split(',')[0]}</span>{caseStudiesData[0].attributes?.desc_1.split(',')[1]}</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold">{caseStudiesData[0].attributes?.desc_2} </span></div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold">{caseStudiesData[0].attributes?.desc_3}</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                        </>
                    )}
                    {/* // SECOND SLIDE */}
                    {caseStudiesData && (
                        <>
                         <section style={{ backgroundColor: caseStudiesData ? caseStudiesData[1].attributes?.background_color : "white" }} className="bg-[#DDCCD3] py-10">
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div style={{ color: caseStudiesData ? caseStudiesData[1].attributes?.text_color : "white" }} className={`text-[32px] lg:text-[70px] ${khand.className}`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src={caseStudiesData[1].attributes?.logo_image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src={caseStudiesData[1].attributes?.image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div style={{ color: caseStudiesData ? caseStudiesData[1].attributes?.text_color : "black" }} className="px-4 lg:px-16">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[60px] h-[60px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[1].attributes?.desc_1.split(',')[0]}</span>{caseStudiesData[1].attributes?.desc_1.split(',')[1]}</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[1].attributes?.desc_2.split(',')[0]}</span>{caseStudiesData[1].attributes?.desc_2.split(',')[1]}</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div> <span className="font-bold">{caseStudiesData[1].attributes?.desc_3}</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                        </>
                    )}
                    {/* // THIRD SLIDE */}
                    {caseStudiesData && (
                        <>
                         <section style={{ backgroundColor: caseStudiesData ? caseStudiesData[2].attributes?.background_color : "white" }} className="bg-[#DDCCD3] py-10">
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:py-0">
                            <div style={{ color: caseStudiesData ? caseStudiesData[2].attributes?.text_color : "white" }} className={`text-[32px] lg:text-[70px] ${khand.className}`}>Case Studies</div>
                            <div>
                                <img className="w-[80px] h-[80px] lg:w-[170px] lg:h-[170px]" width="170" height="170" src={caseStudiesData[2].attributes?.logo_image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex max-w-6xl mx-auto justify-center items-center">
                            <div className="mx-auto lg:m-0">
                                <img className="lg:w-[371px] lg:h-[336px] w-[301px] h-[256px]" width="371" height="336" src={caseStudiesData[2].attributes?.image?.data?.attributes?.url} alt="anveshan logo" />
                            </div>
                            <div className="py-2 lg:py-0" />
                            <div style={{ color: caseStudiesData ? caseStudiesData[2].attributes?.text_color : "black" }} className="px-4 lg:px-16">
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[60px] h-[60px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[2].attributes?.desc_1.split(',')[0]}</span>{caseStudiesData[2].attributes?.desc_1.split(',')[1]}</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[2].attributes?.desc_2.split(',')[0]}</span>{caseStudiesData[2].attributes?.desc_2.split(',')[1]}</div>
                                </div>
                                <br />
                                <div className={`text-[16px] lg:text-[22px] ${manrope.className} flex items-end lg:items-start`}>
                                    <div><img className="w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]" src="/check.svg" /></div>
                                    <div><span className="font-bold">{caseStudiesData[2].attributes?.desc_3.split(',')[0]}</span>{caseStudiesData[2].attributes?.desc_3.split(',')[1]}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                        </>
                    )}
                   
                    

                </Carousel>
            </div>
        </div>
    )
}

export { B2BCaseStudies }
