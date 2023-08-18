'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
import { Copy } from 'lucide-react';





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
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2.5
    }
};

function Coupons() {

    const [couponData, setCouponData] = useState<any>([])

    const numCards = 10; // Number of cards

    const initialCards = Array.from({ length: numCards }, () => ({
        isFlipped: false
    }));

    const [cards, setCards] = useState(initialCards);
    const [categories, setCategories] = useState<any>([]);
    const [brandNames, setBrandNames] = useState<any>([]);

    const transitionConfig = {
        duration: 0.5
    };

    useEffect(() => {
        fetch('https://presentation.popclub.co.in/api/presentation-layer/4b35a8aca9f311840d68051abae50ff5/coupons')
            .then(response => response.json())
            .then(data => {
                if (data.is_success) {
                    setCouponData(data?.data)
                    console.log(data?.data)
                    if (data?.data?.length) {
                        data?.data?.map((itm: any, index: any) => {
                            setCategories((prevCategories: any) => [...prevCategories, itm?.category]);
                            setBrandNames((prev: any) => [...prev, itm?.display_name])
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
    console.log({ couponData })


    const handleCategoryFilterClick = (itm: any) => {
        console.log({ itm })
        const filteredByCategory = couponData.filter((i: any) => i?.category.id === itm?.id)
        setCouponData(() => filteredByCategory)
    }

    const handleBrandNameFilterClick = (itm: any) => {
        console.log({ itm })
        const filteredByBrandNames = couponData.filter((i: any) => i?.display_name === itm)
        setCouponData(() => filteredByBrandNames)
    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })


    const handleCardClick = (couponIndex: number, itemIndex: number) => {
        console.log({ couponIndex, itemIndex })
        setCouponData((prevData: any) => {
            const newData = [...prevData];
            newData[itemIndex].coupons[couponIndex].isFlipped = !newData[itemIndex].coupons[couponIndex]?.isFlipped;
            return newData;
        });
    };

    const handleDiscountCodeClick = (event: any, j: any) => {
        event.preventDefault()
        console.log("hello-backkk")
        console.log({ j })
    }

    return (
        <>
            <div className="py-1 lg:py-24 mx-auto">
                <div className={`grid lg:grid-cols-3 max-w-7xl`}>
                    <div className={`${khand.className}  text-center text-6xl py-1 lg:py-16`}></div>
                    <div className={`${khand.className}  text-center text-6xl py-16`}>Coupons</div>
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
                                    {/* // for CATEGORIES */}
                                    {uniqueCategories?.map((itm: any, index: any) => (
                                        <div key={index} className="flex items-center space-x-2 py-2">
                                            <Checkbox onClick={() => handleCategoryFilterClick(itm)} id={itm.name} />
                                            <Label htmlFor={itm.name}>{itm?.name}</Label>
                                        </div>
                                    ))}
                                </SheetDescription>
                                <SheetTitle>Brands</SheetTitle>
                                <SheetDescription>
                                    <ScrollArea className="h-[420px] w-full">
                                        {/* // FOR BRAND NAMES */}
                                        {brandNames?.map((itm: any, index: any) => (
                                            <div key={index} className="flex items-center space-x-2 py-2">
                                                <Checkbox onClick={() => handleBrandNameFilterClick(itm)} id={itm} />
                                                <Label htmlFor={itm}>{itm}</Label>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                {couponData
                    ?.filter((item: any) => item.hasOwnProperty('coupons'))
                    ?.map((itm: any, couponIndex: number) => (
                        <div key={couponIndex}>
                            <div className={`text-left ${manrope.className} font-extrabold text-3xl py-6 max-w-7xl mx-auto lg:px-0 px-4`}>{itm?.display_name}</div>
                            <Carousel responsive={responsive}>
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
                                            className="text-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl shadow-lg card"
                                        >
                                            <div style={{ borderColor: itm?.color?.bg_color_2 }} className="w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                                <div>
                                                    <div className='text-center flex items-center justify-center py-2'>
                                                        {itm?.logo && <img className="border-[0px] rounded-full" src={itm?.logo?.image} />}
                                                        {!itm?.logo && <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                    </div>
                                                    {/* <div className='text-center py-2'>
                                                        <div className={`text-[1.64431rem] font-extrabold`}>+20% off</div>
                                                        <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                                    </div>
                                                    <div className={`text-[0.67069rem] py-2 font-extrabold`}>Earn extra 30% off with popcoins</div>
                                                    <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>REDEEM</Button></div>
                                                    <div className={`text-[0.625rem] text-center font-normal`}>Valid till 03 Aug</div>
                                                 */}
                                                    <div className="text-center text-[0.625rem] py-2">Tap to Copy</div>
                                                    <div onClick={(event) => handleDiscountCodeClick(event, j)} className={`text-center border-[1px] rounded-lg py-2 px-12`}>
                                                        <div className="flex items-center justify-center">
                                                            <div>{j?.discountcode}</div>
                                                            <div className="px-2"><Copy className="w-[15px] h-[15px]" /></div>
                                                        </div>
                                                    </div>
                                                    <div className={`text-center text-[0.625rem] py-4 ${manrope.className}`}>
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
                                            // style={{ boxShadow: "0px 4px 50px 10px rgba(165, 165, 165, 0.25)" }}
                                            className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl card shadow-md"
                                        >
                                            <div className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                                <div>
                                                    <div className='text-center flex items-center justify-center py-2'>
                                                        {itm?.logo && <img className="border-[1.5px] rounded-full" src={itm?.logo?.image} />}
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
                                                    <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-3 py-3`}>REDEEM</Button></div>
                                                    <div className={`text-[0.625rem] text-center font-normal`}>{j?.endsAt}</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </Carousel>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Coupons
