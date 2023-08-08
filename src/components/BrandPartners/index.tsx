import { Khand } from 'next/font/google'
import Image from 'next/image'
import { Manrope } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})


function BrandPartners() {
    return (
        <>
            <div className="b2b-section-bg-img py-20">
                <div className="max-w-6xl mx-auto my-auto text-white grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_2.2fr]">
                    <div className='mx-auto grid grid-cols-2 lg:grid-cols-1'>
                        <Image className='mx-auto lg:w-[60%] w-[45%]' width="127" height="127" src="/in-depth-integration.svg" alt="in depth integration" />
                        <div>
                            <div className={`${khand.className} font-extrabold text-left lg:text-center text-lg lg:text-xl pt-2`}>In-Depth Integration</div>
                            <div className={`${manrope.className} text-lg text-left lg:text-center`}>Showcase coins at key points in the customer journey to boost conversion.</div>
                        </div>
                    </div>

                    <div className='mx-auto grid grid-cols-2 lg:grid-cols-1'>
                        <Image className='mx-auto lg:w-[60%] w-[45%]' width="127" height="127" src="/in-depth-integration.svg" alt="in depth integration" />
                        <div>
                            <div className={`${khand.className} font-extrabold text-left lg:text-center text-lg lg:text-xl pt-2`}>Customer Base</div>
                            <div className={`${manrope.className} text-lg text-left lg:text-center `}>Highly activated d2c customer base in the popcoins network.</div>
                        </div>
                    </div>
                    <div className='mx-auto grid grid-cols-2 lg:grid-cols-1'>
                        <Image className='mx-auto lg:w-[60%] w-[45%]' width="127" height="127" src="/in-depth-integration.svg" alt="in depth integration" />
                        <div>
                            <div className={`${khand.className} font-extrabold text-left lg:text-center text-lg lg:text-xl pt-2`}>Actionable Insights</div>
                            <div className={`${manrope.className} text-lg text-left lg:text-center`}>Access actionable insights to drive further customer engagement.</div>
                        </div>
                    </div>

                    <div className='-order-1 lg:order-last'>
                        <div className={`text-5xl lg:text-8xl ${khand.className} text-center pb-8 lg:pb-0 lg:text-end`}>Why Brands Partner With POPcoins</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { BrandPartners }