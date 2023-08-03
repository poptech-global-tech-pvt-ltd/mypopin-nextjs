
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Fragment } from 'react'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})


const manrope = Manrope({
    subsets: ['latin'],
})


const popInNumbers = [
    { title: "No. of Brands", value: "36" },
    { title: "No. Of Customers", value: "4,75,936" },
    { title: "Savings Using POPcoins", value: "10,76,639" },
]

function POPInNumbers() {
    return (
        <>
            <div className="max-w-5xl mx-auto py-14">
                <div className={`${khand.className}  text-center text-6xl pt-16 pb-12`}>Our POPpin' Numbers</div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {popInNumbers?.map((i, index) => (
                        <Fragment>
                            <div className={`text-center ${manrope.className}`}>
                                <div className={`text-[#F56651] text-6xl font-extrabold ${khand.className}`}>{i?.value}</div>
                                <div className='text-2xl py-1 font-medium'>{i?.title}</div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export { POPInNumbers } 