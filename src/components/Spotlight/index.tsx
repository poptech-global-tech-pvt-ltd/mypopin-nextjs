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
    { relativeImageURL: "/spotlight/spotlight-product-snakible.png" },
    { relativeImageURL: "/spotlight/spotlight-product-zoh.png" },
]

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

function Spotlight() {
    return (
        <>
            <div className="max-w-5xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-16`}>Spotlight Brands Offering Discounts</div>
                <div>
                    <Slider {...settings}>
                        {spolightBrands?.map(((i, index) => (
                            <div key={index}>
                                <Image
                                    src={i?.relativeImageURL}
                                    width={255}
                                    height={274}
                                    alt={i?.relativeImageURL}
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