import React from 'react';
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
    return (
        <div className="max-w-6xl mx-auto">
            <div className={`text-center text-6xl py-16 font-bold ${khand.className}`}>Best Shopping Deals Online</div>
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
                            360: {
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
                        <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/1.png" alt="Slide 1" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/2.png" alt="Slide 2" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/3.png" alt="Slide 3" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/4.png" alt="Slide 3" />
                            </a>
                        </SwiperSlide> <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/5.png" alt="Slide 3" />
                            </a>
                        </SwiperSlide> <SwiperSlide>
                            <a href="/brands/anveshan">
                                <img width="100%" src="/brandscarousel/6.png" alt="Slide 3" />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex items-center justify-center py-8'>
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
