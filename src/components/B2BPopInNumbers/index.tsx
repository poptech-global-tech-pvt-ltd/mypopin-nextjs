'use client'

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


function B2BPopInNumbers() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] py-16">
                <div className={`${khand.className} text-center lg:text-left text-[35px] lg:text-8xl px-4 lg:py-0 leading-1 lg:leading-[100px]`}>Our POPpin’ Numbers</div>
                <div className='py-4 lg:py-0'>
                    <div className='lg:pt-10'>
                        <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center my-auto`}>57</div>
                        <div className={`text-center ${manrope.className} text-xl lg:text-2xl`}>Brand Partners</div>
                    </div>
                </div>
                <div className=' py-4 lg:py-0'>
                    <div className='lg:pt-10'>
                        <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center`}>9,12,866</div>
                        <div className={`text-center ${manrope.className} text-xl lg:text-2xl`}>POP Ecosystem Customers</div>
                    </div>
                </div>
                <div className=' py-4 lg:py-0'>
                    <div className='lg:pt-10'>
                        <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center`}>7,49,16,799</div>
                        <div className={`text-center ${manrope.className} text-xl lg:text-2xl`}>Coins In Circulation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { B2BPopInNumbers }