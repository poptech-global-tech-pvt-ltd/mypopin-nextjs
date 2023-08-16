'use client'

import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Fragment, useRef, useState, useEffect } from 'react'
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
    const [count, setCount] = useState(1);
    const [custCount, setCustCount] = useState(514915)
    const [savingsCount, setSavingCount] = useState(1131511);
    const noOfBrandRef = useRef(null);
    const noOfCustomers = useRef(null);
    const noOfSaving = useRef(null)

    function formatNumberWithCommas(number: string | number) {
        return number.toLocaleString();
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    // Start the interval when the component is in the viewport
                    const intervalId = setInterval(() => {
                        setCount((prev) => (prev < 48 ? prev + 1 : prev));
                        setCustCount((prev) => (prev < 514995 ? prev + 1 : prev));
                        setSavingCount((prev) => (prev < 1131561 ? prev + 1 : prev));
                    }, 1);
                    return () => {
                        clearInterval(intervalId); // Stop the interval when the component is out of the viewport
                    };
                }
            },
            { threshold: 1 } // Customize the threshold as needed
        );

        if (noOfBrandRef.current) {
            observer.observe(noOfBrandRef.current);
        }
        if (noOfCustomers.current) {
            observer.observe(noOfCustomers.current);
        }
        if (noOfSaving.current) {
            observer.observe(noOfSaving.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>
            <div className="max-w-5xl mx-auto py-14">
                <div className={`px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-10 lg:py-16 font-bold ${khand.className}`}>Our POPpin' Numbers</div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className={`text-center ${manrope.className}`}>
                        <div ref={noOfBrandRef} className={`text-[#F56651] text-[46px] lg:text-6xl font-extrabold ${khand.className}`}>{formatNumberWithCommas(Number(count))}</div>
                        <div className='text-[16px] lg:text-2xl py-0 lg:py-1 font-medium'>No. of Brands</div>
                    </div>
                    <div className={`text-center ${manrope.className}`}>
                        <div className={`text-[#F56651] text-[46px] lg:text-6xl font-extrabold ${khand.className}`}>{formatNumberWithCommas(Number(custCount))}</div>
                        <div className='text-[16px] lg:text-2xl py-0 lg:py-1 font-medium'>No. Of Customers</div>
                    </div>
                    <div className={`text-center ${manrope.className}`}>
                        <div className={`text-[#F56651] text-[46px] lg:text-6xl font-extrabold ${khand.className}`}>{formatNumberWithCommas(Number(savingsCount))}</div>
                        <div className='text-[16px] lg:text-2xl py-0 lg:py-1 font-medium'>Savings Using POPcoins</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { POPInNumbers } 