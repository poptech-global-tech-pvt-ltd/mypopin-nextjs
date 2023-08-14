'use client'

import { Button } from '@/components/ui/button'
import { Manrope } from 'next/font/google'
import Image from "next/image"
import { BrandRewardsCarousel } from '@/components/BrandRewardsCarousel';
import { BrandDeals } from '@/components/BrandDeals';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

function BrandPage() {

    const [brandData, setBrandData] = useState([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            setLoading(true)
            const currentBrandURL = window.location.pathname.split("/")[2]
            fetch(`http://localhost:1337/api/brand-names?filters[url][$eq]=${currentBrandURL}&populate=*`)
                .then((res) => res.json())
                .then((data) =>
                    setBrandData(data?.data[0]?.attributes)
                )
            setLoading(false)
        }
        catch (err) {
            console.log("oops! an error has occured")
        }
    }, [])


    return (
        <>
            <div className="pt-[11rem]">
                {/* // grid container */}
                {isLoading ? (
                    <>
                        <section className='test-container max-w-7xl mx-auto'>
                            <div className='itm1'>
                                <Skeleton borderRadius={18} className='h-[280px]' />
                            </div>
                            <div className='itm2'>
                                <Skeleton borderRadius={18} className='h-[280px]' />
                            </div>
                            <div className='itm3'>
                                <Skeleton borderRadius={18} className='h-[280px]' />
                            </div>
                            <div className='itm4'>
                                <Skeleton borderRadius={18} className='h-[280px]' />
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <div className="test-container max-w-7xl mx-auto">

                            <div style={{ backgroundColor: brandData?.primary_color }} className="itm1 p-6 rounded-3xl">
                                <div className='flex justify-between'>
                                    <div>
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-5xl ${manrope.className} font-bold`}>Extra 30% off</div>
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-5xl ${manrope.className} font-bold`}>
                                            <div className='flex items-center'>
                                                <div>WITH</div>
                                                <div className='px-2'><img width="35" height="35" src="/popcoin-icon.svg" /></div>
                                            </div>
                                        </div>
                                        <div style={{ color: brandData?.text_color }} className={`text-xl ${manrope.className}`}>{brandData?.sub_title}</div>
                                    </div>
                                    <div>
                                        <div style={{ transform: "translate(13%, -45%)", backgroundColor: brandData?.primary_color, color: brandData?.text_color }} className={`h-[200px] w-[200px] rounded-full flex justify-center items-center ${manrope.className} text-2xl font-bold text-center p-8 text-white pulsating-border`}>Limited Time Deal</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Button className={`${manrope.className} bg-white text-lg text-black hover:text-white font-bold rounded-full`}>Shop with POPCoins</Button>
                                    <div>
                                        <img src={brandData?.round_logo?.data?.attributes?.url} />
                                    </div>
                                </div>
                            </div>
                            <div className="itm2">
                                <Image
                                    src={brandData?.brand_hero_image_small_1?.data?.attributes?.url}
                                    // blurDataURL={brandData?.brand_hero_image_small_1?.data?.attributes?.url}
                                    // placeholder="shimmer"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full rounded-3xl object-cover"
                                    alt=""
                                    style={{ objectFit: "cover" }}

                                />
                            </div>
                            <div className="itm3 ">
                                <Image
                                    src={brandData?.brand_hero_image_large?.data?.attributes?.url}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full rounded-3xl object-cover"
                                    alt=""
                                    style={{ objectFit: "cover" }}

                                />
                            </div>
                            <div className="itm4">
                                <Image
                                    src={brandData?.brand_hero_image_small_2?.data?.attributes?.url}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full rounded-3xl object-cover"
                                    alt=""
                                />
                            </div>

                        </div>
                    </>
                )}
                {/* // about section */}
                <br />
                <br />
                <hr className='max-w-7xl mx-auto' />
                <br />
                <div className='max-w-7xl mx-auto'>
                    <div className={`font-bold ${manrope.className} text-3xl `}>About {brandData?.brand_name}</div>
                    <br />
                    <div className={`text-left ${manrope.className} font-[500] text-[19px]`}>
                        {brandData?.about_brand}
                    </div>
                </div>
                <br />
                <br />
                <hr className='max-w-7xl mx-auto' />
                <BrandRewardsCarousel />
                <BrandDeals secondaryColor={brandData?.secondary_color} textColor={brandData?.text_color} />
                <hr className='max-w-7xl mx-auto' />
                <section className='max-w-7xl mx-auto'>
                    <div className={`${manrope.className} text-center text-3xl font-bold py-8`}>Earn  5 For Every ₹100</div>
                    <div className={`${manrope.className} text-center text-2xl font-normal pb-8`}>Keep earning POPcoins with every purchase from Body Tales and other brands on POPcoins</div>
                    <div className='text-center'><Button className={`rounded-full ${manrope.className} text-xl p-6 drop-shadow-md`}>Shop Body Tales Now</Button></div>
                </section>
            </div>

        </>
    )
}

export default BrandPage