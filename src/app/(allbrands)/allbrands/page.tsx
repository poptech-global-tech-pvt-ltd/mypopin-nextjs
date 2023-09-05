'use client'
import Image from "next/image"
import Link from "next/link"
import { Manrope } from 'next/font/google'
import { useEffect, useState } from "react"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

function AllBrands() {
    const [allBrandsData, setAllBrandsData] = useState<any>();
    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?populate=*`).then((res) => res.json()).then((data) => setAllBrandsData(data?.data))
    },[])

    return (
        <>
            <div className="pt-0 lg:pt-24">
                <div className="py-6">
                    <div className={`text-center text-3xl ${manrope.className} font-bold py-10`}>Unmatched Offers & Discount Highlights</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-14 justify-items-center">
                        {allBrandsData && allBrandsData
                        ?.filter((i : any) => i?.attributes?.brand_offer_card?.data?.attributes?.url)
                        ?.map((i : any, index : number) => (
                            <div key={index} className="drop-shadow-xl transition-transform hover:scale-105">
                                {/* <Link href={i?.attributes?.brand_offer_card?.data?.attributes?.url}> */}
                                    <Image
                                        src={i?.attributes?.brand_offer_card?.data?.attributes?.url}
                                        width={362}
                                        height={256}
                                        alt={i?.attributes?.brand_offer_card?.data?.attributes?.brand_name}
                                        className="cursor-pointer"
                                    />
                                {/* </Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllBrands