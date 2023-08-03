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
})

const benefits = [
    { iconRelativePath: "/percent-icon.svg", title: "Offers", description: "Enjoy exciting savings on partner brands with irresistible discounts", extraFooter: true },
    { iconRelativePath: "/popminis-icon.svg", title: "POPminis", description: "Explore Free Trial Samples from your favourite D2C brands", extraFooter: false },
    { iconRelativePath: "travel-deal-icon.svg", title: "Travel Deals", description: "Simplified travel experience with exclusive ClearTrip & Lohono coupons", extraFooter: false },
    { iconRelativePath: "/reward-icon.svg", title: "Rewards", description: "Claim enticing rewards across OTT streaming platforms, Swiggy, Lenskart & more", extraFooter: false }
]

export const ExtraFooter = () => {
    return (
        <div className={`flex items-center ${manrope.className} font-bold text-[20px]`}>
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
        <div className='bg-[#F9F9F9]'>
            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
                    <div className={`text-6xl ${khand.className} font-medium flex items-center`}>Optimise Your Shopping Benefits With POPCoins</div>
                    {/* // card container */}
                    <div className='grid grid-cols-2 gap-4 px-14'>
                        {benefits?.map((itm, index) => (
                            <div key={index}>
                                <div className='bg-white p-10 rounded-lg drop-shadow-sm h-full hover:scale-105 cursor-pointer'>
                                    <div className='text-3xl font-bold flex'>
                                        <Image
                                            src={itm?.iconRelativePath}
                                            width={32}
                                            height={32}
                                            alt="Popcoin"
                                        />
                                        <div className='px-2'>{itm?.title}</div>
                                    </div>
                                    <div className='text-[16px] text-[#475569]'>{itm?.description}</div>
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