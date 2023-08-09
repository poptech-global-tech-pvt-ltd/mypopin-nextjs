'use client'

import { Button } from '@/components/ui/button'
import { Manrope } from 'next/font/google'
import Image from "next/image"
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

function BrandPage() {

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
    return (
        <>
            <div className="pt-[12rem]">
                {/* // grid container */}
                <div className="test-container max-w-7xl mx-auto">
                    <div className="itm1 bg-blue-300 p-6 rounded-2xl">
                        <div className='flex justify-between'>
                            <div>
                                <div className={`uppercase text-5xl ${manrope.className} font-bold`}>Extra 30% off</div>
                                <div className='uppercase'>With logo</div>
                            </div>
                            <div>
                                <div style={{ transform: "translateY(-70%)" }} className={`h-[150px] w-[150px] rounded-full flex justify-center items-center ${manrope.className} text-2xl font-bold text-center p-6 border-white text-white bg-blue-400 pulse-border`}>Limited Time Deal</div>
                            </div>
                        </div>
                        <div>Grooming Essentials At Clean Discounts</div>
                        <div className='flex justify-between items-center'>
                            <Button className={`${manrope.className} bg-white text-lg text-blue-500 font-bold rounded-full`}>Shop with POPCoins</Button>
                            <div>
                                <img src="/man-theory-featrued-logo.png" />
                            </div>
                        </div>
                    </div>
                    <div className="itm2">
                        <Image
                            src="/man-theory-product-1.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-auto h-full"
                            alt=""
                        />
                    </div>
                    <div className="itm3 ">
                        <Image
                            src="/man-theory-product-2.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-auto h-full"
                            alt=""
                        />
                    </div>
                    <div className="itm4">
                        <Image
                            src="/man-theory-product-3.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto"
                            alt=""
                        />
                    </div>

                </div>
                {/* // about section */}
                <br />
                <br />
                <hr className='max-w-7xl mx-auto' />
                <br />
                <div className='max-w-7xl mx-auto'>
                    <div className={`font-bold ${manrope.className} text-3xl `}>About Man Theory</div>
                    <br />
                    <div className='text-left'>With the increased awareness for grooming for men & a variety of men's face grooming products floating around, grooming is no longer associated with a particular gender but a norm for everyone to pursue. The brand’s well researched and fully dermatologically range of skincare are tested to create a safe and secure experience for men and their specific requirements.</div>
                </div>
                <br />
                <br />
                <hr className='max-w-7xl mx-auto' />
                {/* // another section carousel */}
            </div>
            <Carousel responsive={responsive}>
                <div>
                    <Image
                        src="/discountcarousel/discount-slide-background-1.png"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt=""
                    />
                </div>
                <div>
                    <Image
                        src="/discountcarousel/discount-slide-background-2.png"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt=""
                    />
                </div><div>
                    <Image
                        src="/discountcarousel/discount-slide-background-3.png"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt=""
                    />
                </div>
            </Carousel>
        </>
    )
}

export default BrandPage