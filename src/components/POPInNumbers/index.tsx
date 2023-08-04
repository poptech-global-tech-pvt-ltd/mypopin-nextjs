
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Fragment, useRef, useState } from 'react'
import { useIsVisible } from '../../hooks/useIsVisible'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})


const manrope = Manrope({
    subsets: ['latin'],
})


const popInNumbers = [
    { title: "No. of Brands", value: 0 },
    { title: "No. Of Customers", value: 0 },
    { title: "Savings Using POPcoins", value: 0 },
]

function POPInNumbers() {

    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const [count, setCount] = useState(0)

    console.log({ isVisible })
    return (
        <>
            <div className="max-w-5xl mx-auto py-14">
                <div className={`${khand.className}  text-center text-6xl pt-16 pb-12`}>Our POPpin' Numbers</div>
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* {popInNumbers?.map((i, index) => (
                        <Fragment key={index}>
                            <div className={`text-center ${manrope.className}`}>
                                <div className={`text-[#F56651] text-6xl font-extrabold ${khand.className}`}>{i?.value}</div>
                                <div className='text-2xl py-1 font-medium'>{i?.title}</div>
                            </div>
                        </Fragment>
                    ))} */}
                    <div className={`text-center ${manrope.className}`}>
                        <div className={`text-[#F56651] text-6xl font-extrabold ${khand.className}`}>36</div>
                        <div className='text-2xl py-1 font-medium'>No. of Brands</div>
                    </div>
                    <div className={`text-center ${manrope.className}`}>
                        <div className={`text-[#F56651] text-6xl font-extrabold ${khand.className}`}>5,14,995</div>
                        <div className='text-2xl py-1 font-medium'>No. Of Customers</div>
                    </div>
                    <div className={`text-center ${manrope.className}`}>
                        <div className={`text-[#F56651] text-6xl font-extrabold ${khand.className}`}>11,31,561</div>
                        <div className='text-2xl py-1 font-medium'>Savings Using POPcoins</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { POPInNumbers } 