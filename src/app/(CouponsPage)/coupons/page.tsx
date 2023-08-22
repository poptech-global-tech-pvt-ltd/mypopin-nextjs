'use client'
import { Button } from "@/components/ui/button";
import { color, motion } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import { Khand, Manrope } from 'next/font/google'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from 'react-responsive'
import { Copy, ArrowRightCircle } from 'lucide-react';


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Coupons() {
    const [couponData, setCouponData] = useState<any>([])
    const [categories, setCategories] = useState<any>([]);
    const [brandNames, setBrandNames] = useState<any>([]);
    const [filteredBrandData, setFilteredBrandData] = useState<any>();
    const [discountCode, setDiscountCode] = useState<string>("");
    const transitionConfig = {
        duration: 0.5
    };

    useEffect(() => {
        fetch('https://presentation.popclub.co.in/api/presentation-layer/4b35a8aca9f311840d68051abae50ff5/coupons')
            .then(response => response.json())
            .then(data => {
                if (data.is_success) {
                    setCouponData(data?.data?.filter((item: any) => item.hasOwnProperty('coupons')))
                    if (data?.data?.length) {
                        data?.data?.map((itm: any, index: any) => {
                            if (itm?.coupons) {
                                setCategories((prevCategories: any) => [...prevCategories, itm?.category]);
                                setBrandNames((prev: any) => [...prev, { isChecked: false, title: itm?.display_name }])
                            }
                        })
                    }
                } else {
                    console.log('API request failed:', data.message);
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])

    // @ts-ignore
    const uniqueCategories = Array.from(new Set(categories.map(JSON.stringify))).map(JSON.parse);


    const handleCategoryFilterClick = (itm: any) => {
        // setCouponData((prevData : any) => {
        //     const newData = [...prevData]
        //     newData[couponIndex].coupons[itemIndex].isChecked = !newData[couponIndex].coupons[itemIndex]?.isChecked
        //     return newData
        // })


        const filteredByCategory = couponData.filter((i: any) => i?.category.id === itm?.id)
        setCouponData(() => filteredByCategory)
    }

    const handleBrandNameFilterClick = (itm: any) => {
        const index = brandNames?.findIndex((i: any) => i?.title === itm?.title)
        console.log({ index })
        setBrandNames((prevData: any) => {
            const newData = [...prevData]
            newData[index].isChecked = !newData[index].isChecked
            return newData
        })

        const test1 = couponData.filter((item: any) => {
            return brandNames.some((j: any) => j.title === item.display_name && j.isChecked);
        });

        setFilteredBrandData(test1)


        // setCouponData((prevData : any) => 
        //     prevData?.filter((item : any) => brandNames.some((j : any) => j.title === item.display_name && j.isChecked))            
        // )
    }




    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    const handleCardClick = (itemIndex: number, couponIndex: number) => {
        // coupon is the row number
        setCouponData((prevData: any) => {
            const newData = [...prevData];
            if (newData[couponIndex]?.coupons && newData[couponIndex]?.coupons[itemIndex]) {
                newData[couponIndex].coupons[itemIndex].isFlipped = !newData[couponIndex]?.coupons[itemIndex]?.isFlipped;
                newData[couponIndex].coupons[itemIndex].isCopied = false;
            }
            return newData;
        });
        setDiscountCode(couponData[couponIndex]?.coupons[itemIndex]?.discountcode)
    };

    const handleCopyClick = (event: any, itemIndex: any, couponIndex: any) => {
        event?.stopPropagation()
        setCouponData((prevData: any) => {
            const newData = [...prevData];
            if (newData[couponIndex]?.coupons && newData[couponIndex]?.coupons[itemIndex]) {
                newData[couponIndex].coupons[itemIndex].isCopied = true;
            }
            return newData;
        });
        navigator.clipboard.writeText(discountCode);
    }

    useEffect(() => {
        console.log({ filteredBrandData })
        if (filteredBrandData != undefined) {
            setCouponData(() => {
                let result = filteredBrandData
                return result
            })
        }
        console.log({ filteredBrandData })
    }, [filteredBrandData])

    return (
        <>
            <div className="py-1 lg:py-24 mx-auto max-w-7xl">
                <div className={`grid lg:grid-cols-3 `}>
                    <div className={`${khand.className}  text-center text-6xl py-1 lg:py-16`}></div>
                    <div className={`${khand.className}  text-center text-6xl py-6`}>Coupons</div>
                    <Sheet>
                        <div className="flex justify-end px-4 lg:px-0">
                            <SheetTrigger>
                                <Button variant="outline"><span><img src="/filter-icon.svg" /></span>&nbsp;&nbsp;Filters</Button>
                            </SheetTrigger>
                        </div>
                        <SheetContent side={isTabletOrMobile ? "bottom" : "right"} className="z-[200] h-full">
                            <SheetHeader>
                                <SheetTitle>Categories</SheetTitle>
                                <SheetDescription>
                                    <ScrollArea className="h-[420px] w-full">
                                        {/* // for CATEGORIES */}
                                        {couponData?.map((itm: any, index: any) => (
                                            <div key={index} className="flex items-center space-x-2 py-2">
                                                <Checkbox checked={itm?.checked} onClick={() => handleCategoryFilterClick(itm)} id={itm.category.name} />
                                                <Label htmlFor={itm?.category?.name}>{itm?.category?.name}</Label>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </SheetDescription>
                                <SheetTitle>Brands</SheetTitle>
                                <SheetDescription>
                                    <ScrollArea className="h-[420px] w-full">
                                        {/* // FOR BRAND NAMES */}
                                        {brandNames
                                            // ?.filter((item: any) => item.hasOwnProperty('coupons'))
                                            ?.map((itm: any, index: any) => (
                                                <div key={index} className="flex items-center space-x-2 py-2">
                                                    <Checkbox checked={itm?.isChecked} onClick={() => handleBrandNameFilterClick(itm)} id={itm?.title} />
                                                    <Label htmlFor={itm?.display_name}>{itm?.title}</Label>
                                                </div>
                                            ))}
                                    </ScrollArea>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                {couponData
                    // ?.filter((item: any) => item.hasOwnProperty('coupons'))
                    ?.map((itm: any, couponIndex: number) => (
                        <div key={couponIndex}>
                            <div className={`text-left ${manrope.className} font-extrabold text-3xl py-6 max-w-7xl mx-auto lg:px-0 px-4`}>{itm?.display_name}</div>
                            <div className="coupon-carousel-container">
                                <Carousel
                                    responsive={responsive}
                                    className="z-[50] px-4">
                                    {itm?.coupons?.length > 0 && itm?.coupons?.map((j: any, itemIndex: any) => (
                                        <motion.div
                                            key={itemIndex}
                                            className="card__wrapper"
                                            onClick={() => {
                                                handleCardClick(itemIndex, couponIndex);
                                            }}
                                        >
                                            {/* // BACK SIDE OF THE COUPON CARD */}
                                            <motion.div
                                                transition={transitionConfig}
                                                initial={false}
                                                animate={{ rotateY: j.isFlipped ? 0 : -180 }}
                                                style={{ backgroundColor: itm?.color?.bg_color_1 }}
                                                className="text-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl border-[1px] shadow-lg card"
                                            >
                                                <div style={{ borderColor: itm?.color?.bg_color_2 }} className="w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                                    <div>
                                                        <div className='text-center flex items-center justify-center py-1'>
                                                            {itm?.logo && <img className="border-[1px] w-[80px] h-[80px] rounded-full" src={itm?.logo?.image} />}
                                                            {!itm?.logo && <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                        </div>
                                                        <div className="flex">
                                                            <Button
                                                                style={{ backgroundColor: itm?.color?.bg_color_1 ? itm?.color?.bg_color_1 : "white", color: itm?.color?.bg_color_1 ? "white" : "black" }} className="text-center mx-auto" onClick={(e) => handleCopyClick(e, itemIndex, couponIndex)}>{j?.isCopied ? 'Copied' : 'Tap to copy'}</Button>
                                                        </div>
                                                        <div className={`text-center border-[1px] rounded-lg`}>
                                                            <div className="flex items-center justify-center">
                                                                <Button
                                                                    style={{ backgroundColor: itm?.color?.bg_color_1 ? itm?.color?.bg_color_1 : "white", color: itm?.color?.bg_color_1 ? "white" : "black" }}
                                                                    onClick={(e) => handleCopyClick(e, itemIndex, couponIndex)} className="h-7">{j?.discountcode.length > 10 ? j?.discountcode.slice(0, 10) + ".." : j?.discountcode}&nbsp;&nbsp;<Copy className="w-[15px] h-[15px]" /></Button>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-center py-1'>
                                                            {j?.isCopied && (
                                                                <>
                                                                    <a href={itm?.redirection_url}>
                                                                        <Button
                                                                            style={{ backgroundColor: itm?.color?.bg_color_2, color: itm?.color?.text_color_2 }}
                                                                            onClick={(event) => event.stopPropagation()} className={`text-[0.67069rem] rounded-full h-0 px-3 py-3 my-2`}>REDEEM&nbsp;&nbsp;<ArrowRightCircle className="w-4 h-4" /></Button>
                                                                    </a>
                                                                </>
                                                            )}

                                                        </div>
                                                        <div className={`text-center text-[0.625rem] py-1 ${manrope.className}`}>
                                                            {j?.summary.split('•').map((i: any, index: number) => (
                                                                <div key={index}>{i}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            {/* // FRONT SIDE OF THE COUPON CARD */}
                                            <motion.div
                                                transition={transitionConfig}
                                                initial={false}
                                                animate={{ rotateY: j.isFlipped ? 180 : 0 }}
                                                // style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  }}
                                                className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl border-[1px] card shadow-lg"
                                            >
                                                <div style={{ borderColor: itm?.color?.bg_color_1 }} className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                                    <div>
                                                        <div className='text-center flex items-center justify-center py-2'>
                                                            {itm?.logo && <img className="border-[1.5px] w-[80px] h-[80px] rounded-full" src={itm?.logo?.image} />}
                                                            {!itm?.logo && <div className="border-[1.5px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                        </div>
                                                        <div className='text-center py-2'>
                                                            {j?.rules.value?.percentage ? (
                                                                <>
                                                                    <div className={`text-[1.64431rem] font-extrabold`}>{j?.rules.value?.percentage * 100}%</div>
                                                                </>
                                                            ) :
                                                                (
                                                                    <>
                                                                        <div className={`text-[1.64431rem] font-extrabold`}>₹{Math.floor(j?.rules.value?.amount?.amount)}</div>
                                                                    </>
                                                                )
                                                            }
                                                            <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                                        </div>
                                                        <div className={`text-[0.67069rem] py-1 font-extrabold`}>{itm?.discount_percentage_text ? `Earn extra ${itm?.discount_percentage_text} off with popcoins` : null}</div>
                                                        <div className='flex items-center justify-center py-2'>
                                                            {/* <a href={itm?.redirection_url}>
                                                                <Button style={{ backgroundColor: itm?.color?.bg_color_1 }} onClick={(e) => e.stopPropagation()} className={`text-[0.67069rem] rounded-full h-0 px-3 py-3`}>REDEEM</Button>
                                                            </a> */}
                                                        </div>
                                                        <div className={`text-[0.625rem] text-center font-normal`}>{j?.endsAt}</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Coupons
