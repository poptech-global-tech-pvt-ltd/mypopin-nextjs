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
                <div className={`${khand.className} text-[6.25rem] leading-[100px]`}>Our POPpin’ Numbers</div>
                <div className='my-auto'>
                    <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center my-auto`}>38</div>
                    <div className={`text-center ${manrope.className} text-2xl`}>Brand Partners</div>
                </div>
                <div className='my-auto'>
                    <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center`}>5,28,064</div>
                    <div className={`text-center ${manrope.className} text-2xl`}>POP Ecosystem Customers</div>
                </div>
                <div className='my-auto'>
                    <div className={`text-[#F56651] text-center ${khand.className} text-5xl text-center`}>4,46,47,609</div>
                    <div className={`text-center ${manrope.className} text-2xl`}>Coins In Circulation</div>
                </div>
            </div>
        </div>
    )
}

export { B2BPopInNumbers }