'use client'
// TODO - building an interface for brandData
import { Button } from '@/components/ui/button'
import { Manrope } from 'next/font/google'
import Image from "next/image"
import { BrandRewardsCarousel } from '@/components/BrandRewardsCarousel';
import { BrandDeals } from '@/components/BrandDeals';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/navigation'
import type { Metadata } from "next";
import Script from 'next/script';


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800']
})

function BrandPage() {

    const [brandData, setBrandData] = useState<any>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const router = useRouter()

    useEffect(() => {
        try {
            setLoading(true)
            const currentBrandURL = window.location.pathname.split("/")[2]

            fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?filters[url][$eq]=${currentBrandURL}&populate=*`)
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


    console.log({ brandData })

    const handleBrandBtnClick = (brandData: string) => {
        router.push("/")
    }

    return (
        <>
            <head>
                {/* <!-- Required meta tags --> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Body Tales X POPcoins: Get Discounts & Rewards on Body Tales using POPcoins | POP</title>
                <meta property="og:title" content="Body Tales X POPcoins: Get Discounts & Rewards on Body Tales
  using POPcoins | POP" />

                <meta name="description" content="Shop your Favorite Brand Body Tales
  using POP to Earn Additional Rewards, Discounts and POPcoins. Click here to learn more about POPcoins X Body Tales" />
                <meta property="og:description" content="Shop your Favorite Brand Body Tales
  using POP to Earn Additional Rewards, Discounts and POPcoins. Click here to learn more about POPcoins X Body Tales" />

                <meta property="og:image" content="" />
                <meta property="og:image:alt" content="POPcoins for Body Tales" />

                <meta property="og:url" content="https://mypop.in/brands/bodytales" />
                <link rel="canonical" href="https://mypop.in/brands/bodytales" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* <!-- Moengage Code --> */}
                <Script type="text/javascript">
                    {`
    !function(e,n,i,t,a,r,o,d){var s=e[a]=e[a]||[];if(s.invoked=0,s.initialised>0||s.invoked>0)return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1;e.moengage_object=a;var l={},g=function n(i){return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];(e.moengage_q=e.moengage_q||[]).push({f:i,a:t})}},u=["track_event","add_user_attribute","add_first_name","add_last_name","add_email","add_mobile","add_user_name","add_gender","add_birthday","destroy_session","add_unique_user_id","moe_events","call_web_push","track","location_type_attribute"],m={onsite:["getData","registerCallback"]};for(var c in u)l[u[c]]=g(u[c]);for(var v in m)for(var f in m[v])null==l[v]&&(l[v]={}),l[v][m[v][f]]=g(v+"."+m[v][f]);r=n.createElement(i),o=n.getElementsByTagName("head")[0],r.async=1,r.src=t,o.appendChild(r),e.moe=e.moe||function(){return(s.invoked=s.invoked+1,s.invoked>1)?(console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1):(d=arguments.length<=0?void 0:arguments[0],l)},r.addEventListener("load",function(){if(d)return e[a]=e.moe(d),e[a].initialised=e[a].initialised+1||1,!0}),r.addEventListener("error",function(){return console.error("Moengage Web SDK loading failed."),!1})}(window,document,"script","https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js","Moengage");
    Moengage = moe({
    app_id:"D6GKDHFZXKZFT142EJF591VI",
    debug_logs: 0
    })
    `}
                </Script>
                {/* <!-- End of Moengage Code --> */}
            </head>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5HQ42CSKWF"></Script>
            <Script>
                {`
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-5HQ42CSKWF')
    `}
            </Script>

            <div className="pt-[3rem] lg:pt-[7.5rem] px-2">
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
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-[28px] lg:text-5xl ${manrope.className} font-bold`}>EXTRA {brandData?.burn_callout?.split(" ")[1]}&nbsp;off with</div>
                                        <div style={{ color: brandData?.text_color }} className={`uppercase text-5xl ${manrope.className} font-bold`}>
                                            <div className='flex items-center'>
                                                <div className='lg:text-5xl text-[28px] font-extrabold'>WITH</div>
                                                <div className='px-2'><img width="35" height="35" src="/popcoin-icon.svg" /></div>
                                            </div>
                                        </div>
                                        <div style={{ color: brandData?.text_color }} className={`lg:text-xl text-[17px] ${manrope.className}`}>{brandData?.sub_title}</div>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: brandData?.primary_color, color: brandData?.text_color }} className={`h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] rounded-full flex justify-center items-center translate-x-6 -translate-y-16 lg:translate-x-13 lg:-translate-y-45 ${manrope.className} text-[15px] lg:text-2xl font-bold text-center p-8 text-white pulsating-border`}>Limited Time Deal</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <a href={brandData?.redirection_url}>
                                        <Button className={`${manrope.className} bg-white text-lg text-black hover:text-white font-bold rounded-full`}>Shop with POPCoins</Button>
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
                )}
                {/* // about section */}
                <br />
                <br />
                <hr className='max-w-7xl mx-auto' />
                <br />
                <div className='max-w-7xl mx-auto'>
                    <div className={`font-bold ${manrope.className} text-3xl text-center lg:text-left `}>About {brandData?.brand_name}</div>
                    <br />
                    <div className={`text-center lg:text-left ${manrope.className} font-[500] text-[19px]`}>
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
                    <div className={`${manrope.className} text-center text-3xl font-bold py-8`}>
                        <div className='flex items-center justify-center'>
                            <div>Earn&nbsp;</div>
                            <div><img src="/popcoin-icon.svg" /></div>
                            <div>&nbsp;5&nbsp;</div>
                            <div>For&nbsp;</div>
                            <div>Every&nbsp;</div>
                            <div>₹100&nbsp;</div>
                        </div>
                    </div>
                    <div className={`${manrope.className} text-center text-2xl font-normal pb-8`}>Keep earning POPcoins with every purchase from  {brandData?.brand_name} and other brands on POPcoins</div>
                    <div className='text-center'>
                        <a href={brandData?.redirection_url}>
                            <Button style={{ backgroundColor: brandData?.text_color }} onClick={() => handleBrandBtnClick(brandData)} className={`rounded-full ${manrope.className} text-xl p-6 drop-shadow-md`}>Shop {brandData?.brand_name} Now</Button>
                        </a>
                    </div>
                </section>
            </div>

        </>
    )
}

export default BrandPage



// export async function generateMetadata(): Promise<Metadata> {
//     const data = fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?filters[url][$eq]=${currentBrandURL}&populate=*`)
//     .then((res) => res.json())
//     .then((data) =>
//         (data?.data[0]?.attributes)
//     )
//     return {
//         title: "staic title here"
       
//     }
//   }