'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Khand } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

// Initialize Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../ui/button';
import Link from 'next/link';

function ShoppingDeals() {
    const [widgetData, setWidgetData] = useState<any>();
    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/shopping-deals-widgets?populate=*`).then((res) => res.json()).then((data) => setWidgetData(data?.data))
    }, [])

    console.log({ widgetData })
    return (
        <div className="max-w-6xl mx-auto">
            <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold ${khand.className}`}>Best Shopping Deals Online</div>
            <div className='py-12 lg:py-24' />
            <div className="shopping-deals">
                <div className='swiper-container'>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 4,
                            slideShadows: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                            },
                            560: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {widgetData?.map((itm: any, index: number) => (
                            // <div key={index}>
                                <SwiperSlide key={index}>
                                    <div>
                                        <img width="100%" src={itm?.attributes?.image_url?.data?.attributes?.url} alt="Slide 1" />
                                    </div>
                                </SwiperSlide>
                            // </div>
                        ))}
                        {widgetData?.map((itm: any, index: number) => (
                            // <div key={index}>
                                <SwiperSlide key={index}>
                                    <div>
                                        <img width="100%" src={itm?.attributes?.image_url?.data?.attributes?.url} alt="Slide 1" />
                                    </div>
                                </SwiperSlide>
                            // </div>
                        ))}
                    </Swiper>
                    <div className='flex items-center justify-center -mt-[50px] lg:-mt-[100px]'>
                        <Link href={`/allbrands`}>
                            <Button variant="outline">View All</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ShoppingDeals };