'use client'

import { Khand } from 'next/font/google'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import { useState } from 'react';
import Link from 'next/link';

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    weight: ['300', '700', '800'],
    subsets: ['latin'],
})


function BrandPartners() {

    const [animationJump, setAnimationJump] = useState<number>(-10)

    const handleMouseEnter = () => {
        console.log("entrrrr")
        setAnimationJump(-10)
    }

    const handleMouseOut = () => {
        console.log("exitttt")
        setAnimationJump(0)
    }

    return (
        <>
            <div className="b2b-section-bg-img py-20">
                <Link href="/features">
                    <div className="max-w-6xl gap-3 lg:gap-0 mx-auto my-auto text-white grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_2.2fr]">
                        <div className='mx-auto grid grid-cols-[1fr_2.5fr] lg:grid-cols-1'>
                            {/* // 1st image */}
                            <img style={{ transform: `translateY(${animationJump}px)` }} className={`mx-auto w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] transition-transform`} src="/in-depth-integration.svg" alt="in depth integration" />
                            <div>
                                <div className={`${manrope.className} font-extrabold text-left lg:text-center text-lg lg:text-[18px] pt-2`}>In-Depth Integration</div>
                                <div className={`${manrope.className} text-[11px] font-[300] lg:text-[16px] text-left lg:text-center`}>Showcase coins at key points in the customer journey to boost conversion.</div>
                            </div>
                        </div>
                        <div className='mx-auto grid grid-cols-[1fr_2.5fr] lg:grid-cols-1'>
                            {/* // 2nd image */}
                            <img style={{ transform: `translateY(${animationJump}px)` }} className={`mx-auto w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] transition-transform `} src="/customer-base.svg" alt="in depth integration" />
                            <div>
                                <div className={`${manrope.className} font-extrabold text-left lg:text-center text-lg lg:text-[18px] pt-2`}>Customer Base</div>
                                <div className={`${manrope.className} text-[11px] lg:text-[16px] text-left lg:text-center`}>Highly activated d2c customer base in the popcoins network.</div>
                            </div>
                        </div>
                        <div className='mx-auto grid grid-cols-[1fr_2.5fr] lg:grid-cols-1'>
                            {/* // 3rd image */}
                            <img style={{ transform: `translateY(${animationJump}px)` }} className={`mx-auto w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] transition-transform `} src="/actionable-insights.svg" alt="in depth integration" />
                            <div>
                                <div className={`${manrope.className} font-extrabold text-left lg:text-center text-lg lg:text-[18px] pt-2`}>Actionable Insights</div>
                                <div className={`${manrope.className} text-[11px] lg:text-[16px] text-left lg:text-center`}>Access actionable insights to drive further customer engagement.</div>
                            </div>
                        </div>
                        <div className='-order-1 lg:order-last'>
                            <div onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} className={`text-[44px] lg:text-8xl ${khand.className} text-center pb-8 lg:pb-0 lg:text-end`}>Why Brands Partner With POPcoins</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export { BrandPartners }