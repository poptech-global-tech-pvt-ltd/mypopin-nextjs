'use client'

import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Image from "next/image"


const khand = Khand({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const benefits = [
    { iconRelativePath: "/percent-icon.svg", title: "Offers", description: "Enjoy exciting savings on partner brands with irresistible discounts", extraFooter: true },
    { iconRelativePath: "/popminis-icon.svg", title: "POPminis", description: "Explore Free Trial Samples from your favourite D2C brands", extraFooter: false },
    // { iconRelativePath: "travel-deal-icon.svg", title: "Travel Deals", description: "Simplified travel experience with exclusive ClearTrip & Lohono coupons", extraFooter: false },
    // { iconRelativePath: "/reward-icon.svg", title: "Rewards", description: "Claim enticing rewards across OTT streaming platforms, Swiggy, Lenskart & more", extraFooter: false }
]

export const ExtraFooter = () => {
    return (
        <div className={`flex items-center ${manrope.className} font-bold text-[16px] lg:text-[20px]`}>
            <div>1</div>
            <div>
                <Image
                    src="/pop-coin-fiat.svg"
                    width={22}
                    height={22}
                    alt="Popcoin"
                    className='mx-1'
                />
            </div>
            <div className='mx-1'
            >=</div>
            <div className='mx-1'
            >₹</div>
            <div className='mx-1'
            >1</div>
        </div>
    )
}

function PopBenefits() {
    return (
        <div className='bg-[rgb(249,249,249)]'>
            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
                    {/* <div className={`text-6xl ${khand.className} flex items-center font-bold`}>Optimise Your Shopping Benefits With POPCoins</div> */}
                    <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 lg:text-left lg:text-6xl py-16 text-center font-bold ${khand.className}`}>Optimise Your Shopping Benefits With POPCoins</div>
                    {/* // card container */}
                    <div className='grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4 px-2 lg:px-14'>
                        {benefits?.map((itm, index) => (
                            <div className='max-h-[250px]' key={index}>
                                <div className='bg-white p-[10px] lg:p-10 rounded-lg drop-shadow-sm h-full cursor-pointer transition-transform hover:scale-105'>
                                    <div className='text-3xl font-bold flex items-center justify-center'>
                                        <img
                                        className='w-[22px] lg:w-[32px] h-[22px] lg:h-[32px]'
                                            src={itm?.iconRelativePath}
                                            // width={32}
                                            // height={32}
                                            alt="Popcoin"
                                        />
                                        <div className='text-[17px] lg:text-[20px] px-2'>{itm?.title}</div>
                                    </div>
                                    <div className='text-[10px] lg:text-[17px] text-[#475569]'>{itm?.description}</div>
                                    {index === 0 && <ExtraFooter />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PopBenefits }