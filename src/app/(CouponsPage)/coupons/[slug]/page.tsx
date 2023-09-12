'use client'
import { useState, useEffect, Fragment } from "react"
import ReactCardFlip from 'react-card-flip';

function BrandCouponPage({ params, searchParams }: any) {

    const [couponData, setCouponData] = useState<any>();

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/coupons`).then((res) => res.json()).then((result) => setCouponData(result.data))
    }, [])

    console.log({ couponData })

    const handleClick = (itm : any) => {
        console.log({itm})
    }

    return (
        <>
            <section className="py-8 lg:py-24 max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {couponData?.map((itm: any, index: number) => (
                        <div key={index}>
                            <ReactCardFlip isFlipped={itm.isFlipped} flipDirection="vertical">
                                <div>
                                    <div>
                                        <button onClick={(itm) => handleClick}>flip</button>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button onClick={(itm) => handleClick}>flip</button>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default BrandCouponPage 