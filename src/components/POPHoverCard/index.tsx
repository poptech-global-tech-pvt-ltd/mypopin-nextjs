'use client'

import Image from "next/image"
import { Manrope } from 'next/font/google'
import { Button } from '../ui/button'

const manrope = Manrope({
    subsets: ['latin'],
})

export interface POPHoverCardProps {
    brandLogoPath: string,
    brandBackgroundPath: string,
    hoverText: string,
    coinEarningText: string
}


function POPHoverCard({ brandLogoPath, brandBackgroundPath, hoverText, coinEarningText }: POPHoverCardProps) {
    return (
        <>
            <div className="item">
                <div className="cards" style={{
                    backgroundImage: "url(" + brandBackgroundPath + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="hover-content position-absolute">
                        <p>{hoverText}</p>
                        <Button className={`bg-white mt-4 lg:mt-8 rounded-full text-xs lg:text-base font-semibold p-2 lg:p-5 mx-auto text-black hover:text-black hover:bg-white`}>Explore More</Button>
                    </div>
                    <div className="front-content">
                        <img src={brandLogoPath} alt="" className="logo" />
                        <div className="earncoins-strip d-flex align-items-center ">
                            <img src="/coins.png" alt="" />{coinEarningText}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { POPHoverCard }