import { Khand } from 'next/font/google'
import Image from "next/image"
import Slider from "react-slick";
import { Button } from '../ui/button';

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

// =====================THIS COMPONENT HAS BEEN DEPRECATED===================
function TopBrands() {
    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className={`${khand.className} text-center text-6xl py-16`}>Top POPcoin partner brands</div>
                <div>
                    <div className="relative">
                        <img
                            src="topbrands/anveshan/anveshan-bg.png"
                            alt="Avatar"
                        />
                        <img
                            src="topbrands/anveshan/anveshan-round.png"
                            alt="Logo"
                            className="absolute top-0 left-0 w-10 h-10"
                        />
                        <div className='absolute bg-red-600 bottom-0'>
                           <div className='flex'>
                                <div>bnm</div>
                           </div>
                        </div>
                    </div>
                    {/* <Slider {...settings}> */}
                    {/* <div className="relative w-1/2 group">
                        <Image
                            width={334}
                            height={296}
                            src="/bg/anveshan-bg-toppopcoins-brand.png"
                            alt="Avatar"
                            className="block transition-opacity duration-500 ease-in-out rounded-xl"
                        />
                        <div className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <div>
                                <Image
                                     width={36}
                                     height={8}
                                    src="/arrow-white-icon.svg"
                                    alt="Avatar"
                                    className='rotate-180 mx-auto py-2'
                                />
                            </div>
                            <div className="text-white font-bold">Tatha created pure and natural routines for the skin, devoid of any
                                chemicals, born from ancient roots and built with contemporary ways to meet
                                modern needs</div>
                            <div className='py-4'>
                                <Button className="rounded-full bg-white text-black hover:text-white">Explore More</Button>
                            </div>
                        </div>
                    </div> */}



                    {/* </Slider> */}
                </div>
            </div>
        </>
    )
}

export default TopBrands