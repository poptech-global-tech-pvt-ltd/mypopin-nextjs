process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import React, { Fragment } from 'react'
import Image from "next/image"
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

async function getData() {
    try {
        const res = await fetch(`https://mypop-dashboard.popclub.co.in/api/b2-b-features?populate=*`)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (err) {
        console.log({ err });
    }
}

async function Features() {
    const res = await getData()
    const featureData = res.data
    console.log("=====================>", featureData)
    return (
        <>
            <section className="py-2 lg:py-24 max-w-6xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-1 lg:py-6`}></div>
                <div className={`${khand.className}  text-center text-6xl py-6`}>Features</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
                    {featureData?.map((itm: any, index: number) => (
                        <Fragment key={index}>
                            <div className='space-y-3 m-2 lg:m-0'>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src={itm?.attributes?.Image?.data?.attributes?.url}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-auto h-full object-cover rounded-md cursor-pointer transition-transform hover:scale-[1.03]"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className={`text-center text-3xl ${khand.className} font-semibold px-10`}>{itm?.attributes?.Title}</div>
                                <div className={`text-center text-lg font-normal ${manrope.className}l`}>{itm?.attributes?.Description}</div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Features