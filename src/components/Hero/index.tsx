'use client'
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Image from "next/image"


const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function Hero() {
    return (
        <>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 lg:px-16 pt-24 pb-14">
                    <div>
                        <div className={`text-5xl text-center lg:text-left lg:text-[5rem] font-bold leading-none ${khand.className}`}>
                            <div>Shop.</div>
                            <h1>Earn POPCoins</h1>
                            <div>Get Discounts</div>
                        </div>
                        <br />
                        <div className={`${manrope.className} text-center lg:text-left`}>
                            Earn POPCoins when you shop from brands integrated with the POPcoins loyalty and claim discounts, exclusive rewards and more!
                        </div>
                        <div className='py-4'>
                            <Image
                                alt="popcoin logo gif"
                                src="https://www.mypop.in/images/HarShopPePOP.gif"
                                height={70}
                                width={486}
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div>
                        <video style={{ clipPath: "inset(1px 1px)" }} autoPlay muted loop playsInline>
                            <source src="https://ik.imagekit.io/wftc9lab0/Final_4_4_1.mp4?updatedAt=1689051136647" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </main>
        </>
    )
}

export { Hero }

