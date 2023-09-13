'use client'
import { useState, useEffect, Fragment } from "react"
import ReactCardFlip from 'react-card-flip';
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})


function BrandCouponPage({ params, searchParams }: any) {

    const [couponData, setCouponData] = useState<any>();
    const [brandData, setBrandData] = useState<any>();
    const pathname = usePathname()


    useEffect(() => {
        const result = fetch(`https://mypop-dashboard.popclub.co.in/api/coupons`).then((res) => res.json()).then((result) => {
            const modifiedArray = result.data.map((itm: any) => ({ ...itm, isFlipped: false }));
            setCouponData(modifiedArray);
        })
    }, [])

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?filters[url][$eq]=${pathname.split("/")[2]}&populate=*`).then((res) => res.json()).then((result) => setBrandData(result.data))
    }, [])

    console.log({ couponData })
    console.log({ brandData })

    const handleClick = (id: any) => {
        setCouponData((prevData: any) => {
            return prevData.map((item: any) => {
                if (item.id === id) {
                    return { ...item, isFlipped: !item.isFlipped }; // Toggle isFlipped
                }
                return item;
            });
        });
    };

    return (
        <>
            <section className="py-8 lg:py-24 max-w-6xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-1 lg:py-4`}></div>
                {brandData?.length > 0 ? (
                    <>
                        <div className={`${khand.className}  text-left text-6xl text-[#F46651] py-6`}>{brandData[0]?.attributes?.brand_name}&nbsp;&bull;&nbsp;<span className="text-slate-500">Coupons</span></div>
                        <div className="grid grid-cols-3 gap-10 items-center justify-items-center">
                            {couponData?.map((itm: any, index: number) => (
                                <div key={index}>
                                    <ReactCardFlip isFlipped={itm.isFlipped} flipDirection="horizontal">
                                        {/* // FRONT SIDE */}
                                        <div>
                                            {brandData?.length > 0 ? (
                                                <>
                                                    <div className="w-[300px] h-[300px] bg-white rounded-md shadow-md flex items-center justify-center border-[0.3px]">
                                                        <div style={{ borderColor: brandData[0]?.attributes.text_color ? brandData[0]?.attributes.text_color : "gray" }} className="w-[270px] h-[270px] border-[1px] mx-auto my-auto rounded-md">
                                                            {brandData?.length > 0 ? (
                                                                <div className='text-center flex items-center justify-center py-1'>
                                                                    {brandData[0]?.attributes?.round_logo?.data?.attributes?.url ? <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white" src={brandData[0]?.attributes?.round_logo?.data?.attributes?.url} /> : <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                                </div>
                                                            ) : null}
                                                            <div className="text-center font-bold">{itm?.attributes?.shortSummary}</div>
                                                            <br />
                                                            <div className="flex items-center justify-center text-[10px]">
                                                                <div>
                                                                    <img width="30" height="30" src="/popcoin-icon.svg" />
                                                                </div>
                                                                {brandData?.length > 0 ? (
                                                                    <>
                                                                        <div className="px-2 py-[3px] rounded-tr-full rounded-br-full font-bold border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-[#F5664B]">{`Earn extra ${brandData[0]?.attributes?.discount_percentage ? brandData[0]?.attributes?.discount_percentage : "30"}% off with popcoins`}</div>
                                                                    </>
                                                                ) : null}
                                                            </div>
                                                            <br />
                                                            {brandData?.length > 0 ? (
                                                                <div className="flex items-center justify-center">
                                                                    <Button onClick={() => handleClick(itm.id)} style={{ backgroundColor: brandData[0]?.attributes?.primary_color ? brandData[0]?.attributes?.primary_color : "black", color: brandData[0]?.attributes?.text_color ? brandData[0]?.attributes?.text_color : "white" }} className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>GET CODE</Button>
                                                                </div>
                                                            ) : null}

                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}

                                        </div>
                                        {/* //BACK SIDE */}
                                        <div>
                                            {brandData?.length > 0 ? (
                                                <div style={{ backgroundColor: brandData[0]?.attributes.text_color ? brandData[0]?.attributes.text_color : "white" }} className="w-[300px] h-[300px] rounded-md shadow-md flex items-center justify-center border-[0.3px]">
                                                    <div style={{ borderColor: brandData[0]?.attributes.text_color ? brandData[0]?.attributes.text_color : "gray" }} className="w-[270px] h-[270px] border-[1px] mx-auto my-auto rounded-md">
                                                        {brandData?.length > 0 ? (
                                                            <div className='text-center flex items-center justify-center py-1'>
                                                                {brandData[0]?.attributes?.round_logo?.data?.attributes?.url ? <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white" src={brandData[0]?.attributes?.round_logo?.data?.attributes?.url} /> : <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                            </div>
                                                        ) : null}
                                                        <div className="text-center font-bold text-white">{itm?.attributes?.shortSummary}</div>
                                                        <br />
                                                        <div style={{ borderColor: "white" }} className={`text-center border-[1px] rounded-lg mx-8`}>
                                                            <div className="flex items-center justify-center">
                                                                <Button
                                                                    style={{ backgroundColor: brandData[0]?.attributes?.text_color ? brandData[0]?.attributes?.text_color : "white", color: "white" }}
                                                                    // onClick={(e) => handleCopyClick(e, itemIndex, couponIndex)} 
                                                                    className="h-7">{itm?.attributes?.title > 10 ? itm?.attributes?.title.slice(0, 10) + ".." : itm?.attributes?.title}&nbsp;&nbsp;<Copy className="w-[15px] h-[15px]" /></Button>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        {brandData?.length > 0 ? (
                                                            <div className="flex items-center justify-center">
                                                                <Button onClick={() => handleClick(itm.id)} style={{ backgroundColor: brandData[0]?.attributes?.primary_color ? brandData[0]?.attributes?.primary_color : "black", color: brandData[0]?.attributes?.text_color ? brandData[0]?.attributes?.text_color : "white" }} className={`text-[0.67069rem] rounded-full h-0 px-4 py-3`}>GET CODE</Button>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            ) : null}

                                        </div>
                                    </ReactCardFlip>
                                </div>
                            ))}
                        </div>
                    </>
                ) : null}



            </section>
        </>
    )
}

export default BrandCouponPage 