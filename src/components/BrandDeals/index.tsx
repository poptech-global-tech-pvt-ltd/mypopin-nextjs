import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

interface IBrandDeals {
    secondaryColor: string
    textColor: string
}

function BrandDeals({ secondaryColor, textColor }: IBrandDeals) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <>
            <div>
                <div className={`uppercase text-3xl text-center font-bold py-16`}>EXPLORE UNLIMITED DEALS</div>
                <div style={{ width: "100%" }}>
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
                        infinite={true}
                        itemClass="unlimiteddeals-item-class"
                        //   keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={true}
                        responsive={responsive}
                        swipeable={true}
                    >
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="relative w-[266px] h-[276px] z-10">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                                <div style={{backgroundColor : textColor }} className={`absolute top-8 right-0 p-2 pl-4 bg-red-500 text-white text-2xl ${manrope.className} font-bold rounded-l-full`}>
                                    50% off
                                </div>
                            </div>
                            <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5`}>
                                <div className="text-center pt-3">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-3">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        {/* <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div>
                        <div className="grid w-full justify-center justify-items-center">
                            <div className="w-[266px] h-[276px]">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                            </div>
                            <div className={`bg-gray-200 w-10/12 p-2 rounded-bl-3xl rounded-br-3xl py-2 font-bold ${manrope.className}`}>
                                <div className="text-center">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-1">or Rs 1019+ 180</div>
                            </div>
                        </div> */}

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export { BrandDeals }