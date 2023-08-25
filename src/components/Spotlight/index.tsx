'use client'

import { Khand } from 'next/font/google'
import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function Spotlight() {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-12">
        <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>Spotlight Brands Offering Discounts</div>
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass=""
            // customTransition="all 6s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl={false}
            minimumTouchDrag={80}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
          >
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
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Spotlight