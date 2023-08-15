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
        items: 3
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

    const handleCardClick = (index: any) => {
        const updatedCards = [...cards];
        updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
        setCards(updatedCards);
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
                            setBrandNames((prev) => [...prev, itm?.display_name])
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
    console.log({ brandNames })
    return (
        <>
            <div className="py-24 max-w-7xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-16`}>Coupons</div>
                <Sheet key="bottom">
                    <div className="flex justify-end">
                        <SheetTrigger>
                            <Button variant="outline"><span><img src="/filter-icon.svg" /></span>&nbsp;&nbsp;Filters</Button>
                        </SheetTrigger>
                    </div>
                    <SheetContent className="z-[200] h-full">
                        <SheetHeader>
                            <SheetTitle>Categories</SheetTitle>
                            <SheetDescription>
                                {uniqueCategories?.map((itm: any, index: any) => (
                                    <div key={index} className="flex items-center space-x-2 py-2">
                                        <Checkbox id={itm.name} />
                                        <Label htmlFor={itm.name}>{itm?.name}</Label>
                                    </div>
                                ))}
                            </SheetDescription>
                            <SheetTitle>Brands</SheetTitle>
                            <SheetDescription>
                                <ScrollArea className="h-[420px] w-full">
                                    {brandNames?.map((itm: any, index: any) => (
                                        <div key={index} className="flex items-center space-x-2 py-2">
                                            <Checkbox id={itm} />
                                            <Label htmlFor={itm}>{itm}</Label>
                                        </div>
                                    ))}
                                </ScrollArea>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                {couponData?.map((itm: any, index: number) => (
                    <div key={index}>
                        <div className={`text-left ${manrope.className} font-extrabold text-3xl py-6`}>{itm?.display_name}</div>
                        <Carousel responsive={responsive}>
                            {itm?.coupons?.length > 0 && itm?.coupons?.map((j, index ) => (
                                <motion.div
                                    key={index}
                                    className="card__wrapper"

                                >
                                    <motion.div
                                        transition={transitionConfig}
                                        initial={false}
                                        // animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                                        className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl shadow-lg card"
                                    >
                                        <div className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                            <div>
                                                <div className='text-center flex items-center justify-center py-2'>
                                                    <img src={itm?.logo?.image} />
                                                </div>
                                                <div className='text-center py-2'>
                                                    <div className={`text-[1.64431rem] font-extrabold`}>+20% off</div>
                                                    <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                                </div>
                                                <div className={`text-[0.67069rem] py-2 font-extrabold`}>Earn extra 30% off with popcoins</div>
                                                <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>REDEEM</Button></div>
                                                <div className={`text-[0.625rem] text-center font-normal`}>Valid till 03 Aug</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        transition={transitionConfig}
                                        initial={false}
                                        // animate={{ rotateY: card.isFlipped ? 0 : -180 }}
                                        className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl shadow-lg card"
                                    >
                                        <div className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                            <div>
                                                <div className='text-center flex items-center justify-center py-2'>
                                                    <img src={itm?.logo?.image} />
                                                </div>
                                                <div className='text-center py-2'>
                                                    <div className={`text-[1.64431rem] font-extrabold`}>+20% off</div>
                                                    <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                                </div>
                                                <div className={`text-[0.67069rem] py-2 font-extrabold`}>Earn extra 30% off with popcoins</div>
                                                <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>REDEEM</Button></div>
                                                <div className={`text-[0.625rem] text-center font-normal`}>Valid till 03 Aug</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </Carousel>
                    </div>
                ))}
                <div className={`text-left ${manrope.className} font-extrabold text-3xl py-6`}>Saaki</div>
                {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}> */}
                {/* <Carousel className="z-[90]" responsive={responsive}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="card__wrapper"
                            onClick={() => {
                                handleCardClick(index);
                            }}
                        >
                            <motion.div
                                transition={transitionConfig}
                                initial={false}
                                animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                                className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl shadow-[0px_4px_50px_10px_rgba(165,165,165,0.25)] card"
                            >
                                <div className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                    <div>
                                        <div className='text-center flex items-center justify-center py-2'>
                                            <img src="/anveshan-coupon-logo.svg" />
                                        </div>
                                        <div className='text-center py-2'>
                                            <div className={`text-[1.64431rem] font-extrabold`}>+20% off</div>
                                            <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                        </div>
                                        <div className={`text-[0.67069rem] py-2 font-extrabold`}>Earn extra 30% off with popcoins</div>
                                        <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>REDEEM</Button></div>
                                        <div className={`text-[0.625rem] text-center font-normal`}>Valid till 03 Aug</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                transition={transitionConfig}
                                initial={false}
                                animate={{ rotateY: card.isFlipped ? 0 : -180 }}
                                className="bg-white w-[300px] h-[300px] flex items-center justify-center mx-auto my-auto rounded-xl shadow-[0px_4px_50px_10px_rgba(165,165,165,0.25)] card"
                            >
                                <div className="bg-white w-[270px] h-[270px] rounded-lg border-2 flex items-center flex-col">
                                    <div>
                                        <div className='text-center flex items-center justify-center py-2'>
                                            <img src="/anveshan-coupon-logo.svg" />
                                        </div>
                                        <div className='text-center py-2'>
                                            <div className={`text-[1.64431rem] font-extrabold`}>+20% off</div>
                                            <div className={`text-[0.82719rem] font-normal`}>on selected products</div>
                                        </div>
                                        <div className={`text-[0.67069rem] py-2 font-extrabold`}>Earn extra 30% off with popcoins</div>
                                        <div className='flex items-center justify-center py-2'><Button className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>REDEEM</Button></div>
                                        <div className={`text-[0.625rem] text-center font-normal`}>Valid till 03 Aug</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </Carousel> */}
            </div>
            {/* </div> */}

        </>
    );
}

export default Coupons
