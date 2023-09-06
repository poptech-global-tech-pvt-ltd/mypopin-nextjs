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
  { relativeImageURL: "/spotlight/spotlight-product-anveshan.png", link: "https://www.anveshan.farm/" },
  { relativeImageURL: "/spotlight/spotlight-product-boyo-paul.png", link: "https://theboyo.com/" },
  { relativeImageURL: "/spotlight/spotlight-product-boyo-saga-jaipur.png", link: "https://www.sagajaipur.com/" },
  { relativeImageURL: "/spotlight/spotlight-product-boyo-tatha.png", link: "https://tatha.co.in/" },
  { relativeImageURL: "/spotlight/spotlight-product-boyo.png", link: "" },
  { relativeImageURL: "/spotlight/spotlight-product-saaki.png", link: "https://saaki.co/" },
  { relativeImageURL: "/spotlight/spotlight-product-zoh.png", link: "https://zohprobiotics.com/" },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Spotlight() {
  return (
    <>
      <div className="mx-auto mb-12">
        <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>Spotlight Brands Offering Discounts</div>
        <div className="mx-auto">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
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
              <div key={index} className="mx-auto">
                <a href={i?.link}>
                  <div className="h-[200px] w-auto m-1">
                    <Image
                      src={i?.relativeImageURL}
                      fill
                      className="w-full h-full mx-auto object-contain"
                      alt={i?.relativeImageURL}
                    />
                  </div>
                </a>
              </div>
            )))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Spotlight