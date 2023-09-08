'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Manrope } from 'next/font/google'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "../ui/button";

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

interface IBrandDeals {
    primaryColor: string
    secondaryColor: string
    textColor: string
    discountPercentage: any
}

function BrandDeals({ primaryColor, secondaryColor, textColor, discountPercentage }: IBrandDeals) {
    const [productImagesData, setProductImagesData] = useState<any>();
    const [showMore, setShowMore] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.2
        }
    };

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/new-product-images?filters[storeuuid][$eq]=${pathname.split("/")[2]}`).then((res) => res.json()).then((data) => setProductImagesData(data?.data))
    }, [])

    // const handleProductLink = (itm: any) => {
    //     router.push(`${itm?.attributes?.product_link}`)
    // }

    console.log({ productImagesData })

    const onlyFour = productImagesData?.slice(0, 4)
    const restData = productImagesData?.slice(5, 7)

    return (
        <>
            <div>
                <div className={`uppercase text-[22px] lg:text-3xl text-center font-bold py-16`}>EXPLORE UNLIMITED DEALS</div>
                {/* // mobile */}
                <section className="grid grid-cols-2 grid-rows-2 gap-2 lg:hidden">
                    {onlyFour?.slice(0, 4)?.length > 0 && onlyFour?.map((itm: any, index: number) => (
                        <div key={index}>
                            <Link prefetch={false} target="_blank" href={itm?.attributes?.product_link ? itm?.attributes?.product_link : '/'}>
                                <div className="grid w-full justify-center justify-items-center max-w-[285px] mx-auto">
                                    <div className="relative z-10 flex items-center justify-center">
                                        <img
                                            src={itm?.attributes?.product_image}
                                            alt="hgfd"
                                            className="object-cover rounded-xl shadow-lg border-[0.3px] aspect-square"
                                        />
                                        {discountPercentage === "-Infinity" ?
                                            <div>{null}</div> :
                                            <div style={{ backgroundColor: primaryColor }} className={`absolute top-8 right-0 p-1 pl-4 bg-red-500 text-white text-xl ${manrope.className} font-bold rounded-l-full`}>
                                                {itm?.attributes?.product_mrp === null ?
                                                    (<div>
                                                        {(Math.trunc((((itm?.attributes?.product_price * discountPercentage) / itm?.attributes?.product_price)))).toString()}% off
                                                    </div>)
                                                    : <div>
                                                        {Math.trunc((((itm?.attributes?.product_mrp - itm?.attributes?.product_price) + (itm?.attributes?.product_price * discountPercentage / 100)) / itm?.attributes?.product_mrp) * 100)}% off
                                                    </div>}
                                            </div>}
                                    </div>
                                    <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5 max-w-[243px] min-h-[120px] text-[10px]`}>
                                        <div className="text-center pt-6 px-2">{itm?.attributes?.product_name.length > 50 ? itm?.attributes?.product_name.slice(0, 50) + ".." : itm?.attributes?.product_name}</div>
                                        <div className="text-center py-1">₹{itm?.attributes?.product_price}&nbsp;<span style={{ textDecoration: "line-through", color: "gray" }}>{itm?.attributes?.product_mrp ? <span> ₹{itm?.attributes?.product_mrp}</span> : null}  </span></div>
                                        <div className="flex items-center justify-center py-3">
                                            <div>or &nbsp;</div>
                                            <div>₹ {Math.trunc(itm?.attributes?.product_price - ((itm?.attributes?.product_price * discountPercentage) / 100))}</div>
                                            <div>+&nbsp;</div>
                                            <img width="20" height="20" src="/popcoin-icon.svg" />
                                            <div>{Math.trunc(itm?.attributes?.product_price * discountPercentage / 100)}</div>
                                        </div>
                                        {/* <div className="text-center pb-3">or ₹ {itm?.attributes?.price_with_coin}+ {itm?.attributes?.burn_coin}</div> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>

                <div className="flex items-center justify-center py-2 lg:hidden">
                    <div style={showMore ? { display: "none" } : { display: "block" }}>
                        <Button variant="outline" onClick={() => setShowMore((prev) => !prev)}>See More Products</Button>
                    </div>
                </div>
                <section className={`${!showMore ? `hidden` : `block`} grid grid-cols-2 grid-rows-1 gap-2`}>
                    {restData?.slice(0, 4)?.length > 0 && restData?.map((itm: any, index: number) => (
                        <div key={index}>
                            <Link prefetch={false} target="_blank" href={itm?.attributes?.product_link ? itm?.attributes?.product_link : '/'}>
                                <div className="grid w-full justify-center justify-items-center max-w-[285px] mx-auto">
                                    <div className="relative z-10 flex items-center justify-center">
                                        <img
                                            src={itm?.attributes?.product_image}
                                            alt="hgfd"
                                            className="object-cover rounded-xl shadow-lg border-[0.3px] aspect-square"
                                        />
                                        {discountPercentage === "-Infinity" ?
                                            <div>{null}</div> :
                                            <div style={{ backgroundColor: primaryColor }} className={`absolute top-8 right-0 p-1 pl-4 bg-red-500 text-white text-xl ${manrope.className} font-bold rounded-l-full`}>
                                                {itm?.attributes?.product_mrp === null ?
                                                    (<div>
                                                        {(Math.trunc((((itm?.attributes?.product_price * discountPercentage) / itm?.attributes?.product_price)))).toString()}% off
                                                    </div>)
                                                    : <div>
                                                        {Math.trunc((((itm?.attributes?.product_mrp - itm?.attributes?.product_price) + (itm?.attributes?.product_price * discountPercentage / 100)) / itm?.attributes?.product_mrp) * 100)}% off
                                                    </div>}
                                            </div>}
                                    </div>
                                    <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5 max-w-[243px] min-h-[120px] text-[10px]`}>
                                        <div className="text-center pt-6 px-2">{itm?.attributes?.product_name.length > 50 ? itm?.attributes?.product_name.slice(0, 50) + ".." : itm?.attributes?.product_name}</div>
                                        <div className="text-center py-1">₹{itm?.attributes?.product_price}&nbsp;<span style={{ textDecoration: "line-through", color: "gray" }}>{itm?.attributes?.product_mrp ? <span> ₹{itm?.attributes?.product_mrp}</span> : null}  </span></div>
                                        <div className="flex items-center justify-center py-3">
                                            <div>or &nbsp;</div>
                                            <div>₹ {Math.trunc(itm?.attributes?.product_price - ((itm?.attributes?.product_price * discountPercentage) / 100))}</div>
                                            <div>+&nbsp;</div>
                                            <img width="20" height="20" src="/popcoin-icon.svg" />
                                            <div>{Math.trunc(itm?.attributes?.product_price * discountPercentage / 100)}</div>
                                        </div>
                                        {/* <div className="text-center pb-3">or ₹ {itm?.attributes?.price_with_coin}+ {itm?.attributes?.burn_coin}</div> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>
                
                {/* // desktop */}
                <div className="mx-auto hidden lg:block">
                    <Carousel
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={1800}
                        centerMode={false}
                        //   className=""
                        //   containerClass="container-with-dots"
                        dotListClass=""
                        draggable={true}
                        focusOnSelect={false}
                        infinite={true}
                        itemClass="unlimiteddeals-item-class"
                        //   keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover={false}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        swipeable={true}
                    >
                        {/* //mapping */}
                        {productImagesData?.length > 0 && productImagesData?.map((itm: any, index: number) => (
                            <div key={index} className="mx-auto">
                                <Link prefetch={false} target="_blank" href={itm?.attributes?.product_link ? itm?.attributes?.product_link : '/'}>
                                    <div className="grid w-full justify-center justify-items-center max-w-[285px] mx-auto">
                                        <div className="relative w-[266px] h-[276px] z-10 flex items-center justify-center">
                                            <img
                                                src={itm?.attributes?.product_image}
                                                alt="hgfd"
                                                className="h-[276px] w-[266px] object-cover rounded-3xl shadow-lg border-[0.3px]"
                                            />
                                            {discountPercentage === "-Infinity" ?
                                                <div>{null}</div> :
                                                <div style={{ backgroundColor: primaryColor }} className={`absolute top-8 right-0 p-2 pl-4 bg-red-500 text-white text-2xl ${manrope.className} font-bold rounded-l-full`}>
                                                    {itm?.attributes?.product_mrp === null ?
                                                        (<div>
                                                            {(Math.trunc((((itm?.attributes?.product_price * discountPercentage) / itm?.attributes?.product_price)))).toString()}% off
                                                        </div>)
                                                        : <div>
                                                            {Math.trunc((((itm?.attributes?.product_mrp - itm?.attributes?.product_price) + (itm?.attributes?.product_price * discountPercentage / 100)) / itm?.attributes?.product_mrp) * 100)}% off
                                                        </div>}
                                                </div>}
                                        </div>
                                        <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5 max-w-[243px] min-h-[180px]`}>
                                            <div className="text-center pt-6 px-2">{itm?.attributes?.product_name.length > 50 ? itm?.attributes?.product_name.slice(0, 50) + ".." : itm?.attributes?.product_name}</div>
                                            <div className="text-center py-1">₹{itm?.attributes?.product_price}&nbsp;<span style={{ textDecoration: "line-through", color: "gray" }}>{itm?.attributes?.product_mrp ? <span> ₹{itm?.attributes?.product_mrp}</span> : null}  </span></div>
                                            <div className="flex items-center justify-center py-3">
                                                <div>or &nbsp;</div>
                                                <div>₹ {Math.trunc(itm?.attributes?.product_price - ((itm?.attributes?.product_price * discountPercentage) / 100))}</div>
                                                <div>+&nbsp;</div>
                                                <img width="20" height="20" src="/popcoin-icon.svg" />
                                                <div>{Math.trunc(itm?.attributes?.product_price * discountPercentage / 100)}</div>
                                            </div>
                                            {/* <div className="text-center pb-3">or ₹ {itm?.attributes?.price_with_coin}+ {itm?.attributes?.burn_coin}</div> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export { BrandDeals }