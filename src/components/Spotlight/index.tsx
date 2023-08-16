import { Khand } from 'next/font/google'
import Image from "next/image"
import Slider from "react-slick";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const spolightBrands = [
    { relativeImageURL: "/spotlight/spotlight-product-anveshan.png" },
    { relativeImageURL: "/spotlight/spotlight-product-boyo-paul penders.png" },
    { relativeImageURL: "/spotlight/spotlight-product-boyo-saga-jaipur.png" },
    { relativeImageURL: "/spotlight/spotlight-product-boyo-tatha.png" },
    { relativeImageURL: "/spotlight/spotlight-product-boyo-zoh.png" },
    { relativeImageURL: "/spotlight/spotlight-product-boyo.png" },
    { relativeImageURL: "/spotlight/spotlight-product-saaki.png" },
    // { relativeImageURL: "/spotlight/spotlight-product-snakible.png" },
    { relativeImageURL: "/spotlight/spotlight-product-zoh.png" },
]

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

function Spotlight() {
    return (
        <>
            <div className="max-w-6xl mx-auto mb-12">
                <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>Spotlight Brands Offering Discounts</div>
                <div>
                    <Slider {...settings}>
                        {spolightBrands?.map(((i, index) => (
                            <div className='p-2' key={index}>
                                <Image
                                    src={i?.relativeImageURL}
                                    width={255}
                                    height={274}
                                    alt={i?.relativeImageURL}
                                    // className='p-2'
                                />
                            </div>
                        )))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Spotlight