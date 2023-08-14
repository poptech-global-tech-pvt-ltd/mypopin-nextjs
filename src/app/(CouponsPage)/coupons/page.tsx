'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
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
    const numCards = 10; // Number of cards

    const initialCards = Array.from({ length: numCards }, () => ({
        isFlipped: false
    }));

    const [cards, setCards] = useState(initialCards);

    const transitionConfig = {
        duration: 0.5
    };

    const handleCardClick = (index: any) => {
        const updatedCards = [...cards];
        updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
        setCards(updatedCards);
    };

    return (
        <>
            <div className="py-24 max-w-6xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-16`}>Coupons</div>
                <Sheet>
                    <div className="flex justify-end">
                        <SheetTrigger>
                            <Button variant="outline"><span><img src="/filter-icon.svg" /></span>&nbsp;&nbsp;Filters</Button>
                        </SheetTrigger>
                    </div>
                    <SheetContent className="my-[150px]">
                        <SheetHeader>
                            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <div className={`text-left ${manrope.className} font-extrabold text-3xl py-6`}>Saaki</div>
                {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}> */}
                <Carousel responsive={responsive}>

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
                </Carousel>
            </div>
            {/* </div> */}

        </>
    );
}

export default Coupons
