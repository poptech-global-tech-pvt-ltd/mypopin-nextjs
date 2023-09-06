process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
// TODO - building an interface for brandData
import { Button } from '@/components/ui/button'
import { Manrope } from 'next/font/google'
import Image from "next/image"
import { BrandRewardsCarousel } from '@/components/BrandRewardsCarousel';
import { BrandDeals } from '@/components/BrandDeals';
import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from 'react';


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800']
})

async function getData(brandName: string) {
    try {
        const res = await fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?filters[url][$eq]=${brandName}&populate=*`)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (err) {
        console.log({ err });
    }
}


async function BrandPage({ params }: any) {
    const brandName = params.slug
    const res = await getData(brandName)
    const brandData = res?.data[0]?.attributes

    console.log({brandData})

    return (
        <>
            <Suspense fallback={<p>Loading Data...</p>}>
                <div className="pt-[3rem] lg:pt-[7.5rem] px-2">
                    <>
                        <div className="test-container max-w-7xl mx-auto">
                            <div style={{ backgroundColor: brandData?.primary_color }} className="itm1 p-6 rounded-3xl">
                                <div className='flex justify-between'>
                                    <div>
                                    <div className='block lg:hidden'>
                                        <img width={50} height={"auto"} src={brandData?.round_logo?.data?.attributes?.url} />
                                    </div>
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-[28px] lg:text-5xl ${manrope.className} font-bold`}>EXTRA {brandData?.burn_callout?.split(" ")[1]}&nbsp;off with</div>
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-5xl ${manrope.className} font-bold`}>
                                            <div className='flex items-center'>
                                                <div className='lg:text-5xl text-[28px] font-extrabold'>WITH</div>
                                                <div className='px-2'><img width="35" height="35" src="/popcoin-icon.svg" /></div>
                                            </div>
                                        </div>
                                        <div style={{ color: brandData?.text_color }} className={`lg:text-xl text-[17px] py-2 lg:py-0 ${manrope.className}`}>{brandData?.sub_title}</div>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: brandData?.primary_color, color: brandData?.text_color }} className={`h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] rounded-full flex justify-center items-center translate-x-6 -translate-y-16 lg:translate-x-13 lg:-translate-y-45 ${manrope.className} text-[15px] lg:text-2xl font-bold text-center p-8 text-white pulsating-border`}>Limited Time Deal</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <a href={brandData?.redirection_url}>
                                        <Button className={`${manrope.className} bg-white text-sm lg:text-lg px-8 text-black hover:text-white font-bold rounded-full`}>Shop with POPCoins</Button>
                                    </a>
                                    <div className='hidden lg:block'>
                                        <img src={brandData?.round_logo?.data?.attributes?.url} />
                                    </div>
                                </div>
                            </div>
                            <div className="itm2">
                                <Image
                                    src={brandData?.brand_hero_image_small_1?.data?.attributes?.url}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full rounded-lg lg:rounded-3xl object-cover aspect-square  md:aspect-auto lg:aspect-auto"
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
                                    className="w-full h-full rounded-lg lg:rounded-3xl object-cover aspect-square md:aspect-auto lg:aspect-auto"
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
                                    className="w-full h-full rounded-lg lg:rounded-3xl object-cover aspect-square md:aspect-auto lg:aspect-auto"
                                    alt=""
                                />
                            </div>
                        </div>
                    </>

                    {/* // about section */}
                    <br />
                    <br />
                    <hr className='max-w-7xl mx-auto' />
                    <br />
                    <div className='max-w-7xl mx-auto'>
                        <h1 className={`font-bold ${manrope.className} text-[22px] font-bold text-center lg:text-left `}>About {brandData?.brand_name}</h1>
                        <br />
                        <div className={`text-center lg:text-left ${manrope.className} font-[500] text-[16px]`}>
                            {brandData?.about_brand}
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr className='max-w-7xl mx-auto' />
                    <BrandRewardsCarousel />
                    <BrandDeals discountPercentage={brandData?.discount_percentage} primaryColor={brandData?.primary_color} secondaryColor={brandData?.secondary_color} textColor={brandData?.text_color} />
                    <hr className='max-w-7xl mx-auto' />
                    <section className='max-w-7xl mx-auto'>
                        <div className={`${manrope.className} text-center text-[22px] lg:text-3xl font-bold py-8`}>
                            <div className='flex items-center justify-center'>
                                <div>Earn&nbsp;</div>
                                <div><img src="/popcoin-icon.svg" /></div>
                                <div>&nbsp;5&nbsp;</div>
                                <div>For&nbsp;</div>
                                <div>Every&nbsp;</div>
                                <div>₹100&nbsp;</div>
                            </div>
                        </div>
                        <h1 className={`${manrope.className} text-center text-[16px] lg:text-2xl font-normal pb-8`}>Keep earning POPcoins with every purchase from  {brandData?.brand_name} and other brands on POPcoins</h1>
                        <div className='text-center'>
                            <a href={brandData?.redirection_url}>
                                <Button style={{ backgroundColor: brandData?.primary_color, color : brandData?.text_color }} className={`rounded-full ${manrope.className} text-xl p-6 drop-shadow-md font-bold`}>Shop {brandData?.brand_name} Now</Button>
                            </a>
                        </div>
                    </section>
                </div>
            </Suspense>
        </>
    )
}

export default BrandPage


export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const brandName = params.slug
    const res = await getData(brandName)
    const brandData = res?.data[0]?.attributes

    return {
        title: `${brandData?.brand_name} X POPcoins: Get Discounts & Rewards on Body Tales using POPcoins | POP`,
        description: `Shop your Favorite Brand ${brandData?.brand_name} using POP to Earn Additional Rewards, Discounts and POPcoins. Click here to learn more about POPcoins X Body Tales`,
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `https://mypop.in/brands/${brandData?.brand_name?.toLowerCase()}`,
            title: "Body Tales X POPcoins: Get Discounts & Rewards on Body Tales using POPcoins | POP",
            description: `Shop your Favorite Brand ${brandData?.brand_name} using POP to Earn Additional Rewards, Discounts and POPcoins. Click here to learn more about POPcoins X Body Tales`,
            images: `POPcoins for ${brandData?.brand_name}`,
        },
        alternates: {
            canonical: `https://mypop.in/brands/${brandData?.brand_name?.toLowerCase()}`,
            languages: {
                'en-US': '/en-US',
            },
        },
    }
}
