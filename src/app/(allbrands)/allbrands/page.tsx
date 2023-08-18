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

    const allBrands = [
        { imageRelativeLink: "/allbrandsImages/almowear.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/anveshan-offer.png", alt: "brand logo", pathToUrl: "/brands/anveshan" },
        { imageRelativeLink: "/allbrandsImages/blamblack.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/boyo-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/braavokings-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/budding-bees.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/campus-sutra-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/doodle-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/eume-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/gramiyaa-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/keebee-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/khadi-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/laida-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/mai-sknn-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/makeup-eraser-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/man-theory-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/nomad-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/paul-penders-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/promo-foods-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/qurez.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/saaki-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/sagar-jaipur-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/snackible.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/sohi-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/tatha-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/tea-origin-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/theskinstory.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/varanga-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/weaves-of-tradition-offer.png", alt: "brand logo", pathToUrl: "" },
        { imageRelativeLink: "/allbrandsImages/zoh-offer.png", alt: "brand logo", pathToUrl: "" },
    ]

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?populate=*`).then((res) => res.json()).then((data) => setAllBrandsData(data?.data))
    },[])

   console.log({allBrandsData})
    return (
        <>
            <div className="pt-0 lg:pt-24">
                <div className="py-6">
                    <div className={`text-center text-3xl ${manrope.className} font-bold py-10`}>Unmatched Offers & Discount Highlights</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-14 justify-items-center">
                        {allBrandsData && allBrandsData?.map((i : any, index : number) => (
                            <div key={index} className="drop-shadow-xl transition-transform hover:scale-105">
                                {/* <Link href={i?.attributes?.brand_offer_card?.data?.attributes?.url}> */}
                                    <Image
                                        src={i?.attributes?.brand_offer_card?.data?.attributes?.url}
                                        width={362}
                                        height={256}
                                        alt="facebook logo"
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