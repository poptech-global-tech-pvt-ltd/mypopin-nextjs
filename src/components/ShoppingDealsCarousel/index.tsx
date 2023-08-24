'use client'

import { Khand } from 'next/font/google'
import { useState } from 'react'
import Slider from "react-slick";

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function ShoppingDealsCarousel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <>
            {/* // THIS COMPONENT HAS BEEN DEPRECATED */}
            <div>
                <div className={`${khand.className} text-center text-6xl py-16`}>Best Shopping Deals Online</div>
                <Slider {...settings}>

                    {/* // THIS COMPONENT HAS BEEN DEPRECATED */}
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    {/* // THIS COMPONENT HAS BEEN DEPRECATED */}

                    <div>
                        <h3>3</h3>
                        {/* // THIS COMPONENT HAS BEEN DEPRECATED */}

                    </div>
                    <div>
                        <h3>4</h3>
                        {/* // THIS COMPONENT HAS BEEN DEPRECATED */}

                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default ShoppingDealsCarousel