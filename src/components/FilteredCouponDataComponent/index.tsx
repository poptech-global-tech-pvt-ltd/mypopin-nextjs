import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Carousel from 'react-multi-carousel';
import { Button } from '../ui/button';
import { Khand, Manrope } from 'next/font/google'
import { extractNumbersAndRest } from '@/utils/extractNumbersAndRest';
import { ArrowRightCircle, Copy } from 'lucide-react';


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})

const khand = Khand({
    weight: '700',
    subsets: ['latin']
})

function FilteredCouponDataComponent({ data, setFilteredCouponData }: any) {
    const [brandData, setBrandData] = useState<any>([]);
    const [isFlippedRows, setIsFlippedRows] = useState<boolean[][]>([]);



    console.log("datafrom", data)

    // Group coupons by 'storeuuid'
    const groupedCouponData: { [storeuuid: string]: any[] } = {};

    data?.forEach((coupon: any) => {
        const storeuuid = coupon?.attributes?.storeuuid;
        if (!groupedCouponData[storeuuid]) {
            groupedCouponData[storeuuid] = [];
        }
        groupedCouponData[storeuuid].push(coupon);
    });

    console.log({ groupedCouponData })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    // fetch for brand name table
    useEffect(() => {
        fetch('https://mypop-dashboard.popclub.co.in/api/brand-names?pagination[page]=1&pagination[pageSize]=200&populate=*').then((res) => res.json()).then((data) => {
            // Add the 'isChecked' key to each item in the data array
            const newData = data.data.map((item: any) => ({
                ...item,
                isChecked: false, // Initialize 'isChecked' to false
            }));
            // Set the modified data in the state
            setBrandData({ ...data, data: newData });
        })
    }, [])

       // Toggle card flip
       const toggleCardFlip = (rowIndex: number, couponIndex: number) => {
        setIsFlippedRows(prevIsFlippedRows => {
            const newIsFlippedRows = [...prevIsFlippedRows];
            newIsFlippedRows[rowIndex] = newIsFlippedRows[rowIndex] || [];
            newIsFlippedRows[rowIndex][couponIndex] = !newIsFlippedRows[rowIndex][couponIndex];
            return newIsFlippedRows;
        });
    };


    // Initialize card flipping state for each row
    useEffect(() => {
        const newIsFlippedRows = Object.keys(groupedCouponData).map(() => []);
        setIsFlippedRows(newIsFlippedRows);
    }, []); // Add an empty dependency array to run this effect only once


    const handleCopyClick = (event: any, discountCode: string, id: number) => {
        event.stopPropagation()
        navigator.clipboard.writeText(discountCode);

        setFilteredCouponData((prevData: any) => {
            // Use map to create a new array with updated isChecked values
            return prevData.map((coupon: any) => {
                if (coupon.id === id) {
                    // Update the isChecked value to true for the matching coupon
                    return {
                        ...coupon,
                        isChecked: true,
                    };
                }
                return coupon; // Return other coupons as they are
            });
        });
    }


    return (
        <>
            <section>
                {Object.keys(groupedCouponData).map((storeuuid, rowIndex) => {
                    const brand = brandData.data?.find((brand: any) => brand?.attributes?.url === storeuuid);
                    return (
                        <>
                            <br />
                            <br />
                            <div key={rowIndex}>
                                <h2 className={`${manrope.className} font-extrabold px-4 py-4 text-3xl text-slate-700`}>{(brandData.data?.find((brand: any) => brand?.attributes?.url === storeuuid))?.attributes?.brand_name}</h2>
                                <Carousel
                                    responsive={responsive}
                                    className="z-[50] px-4">
                                    {groupedCouponData[storeuuid].map((coupon: any, couponIndex: number) => {
                                        return (
                                            <>
                                                <ReactCardFlip
                                                    isFlipped={isFlippedRows[rowIndex] && isFlippedRows[rowIndex][couponIndex]}
                                                    key={couponIndex} flipDirection="horizontal">
                                                    {/* // FRONT SIDE */}
                                                    <div
                                                        onClick={() => toggleCardFlip(rowIndex, couponIndex)}
                                                        className="w-[300px] h-[300px] bg-white rounded-md shadow-md flex items-center justify-center border-[0.3px]">
                                                        <div
                                                            style={{ borderColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black" }} className="w-[270px] h-[270px] border-[2px] mx-auto my-auto rounded-md cursor-pointer">
                                                            <div className='text-center flex items-center justify-center py-3'>
                                                                {brand?.attributes?.round_logo?.data?.attributes?.url ? <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white shadow-sm" src={brand?.attributes?.round_logo?.data?.attributes?.url} /> : <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                            </div>
                                                            <div className="text-center">
                                                                <div className="font-extrabold text-[1.6rem]">{extractNumbersAndRest(coupon?.attributes?.shortSummary)?.value}&nbsp;<span>{coupon?.attributes?.shortSummary ? <span>off</span> : null}</span></div>
                                                                <div className="font-normal text-[0.8rem]">{extractNumbersAndRest(coupon?.attributes?.shortSummary)?.rest?.split("off")[1]}</div>
                                                            </div>
                                                            {brand?.attributes?.isDoubleDiscount && (
                                                                <>
                                                                    <div className="flex items-center justify-center text-[10px] py-2">
                                                                        <div>
                                                                            <img width="30" height="30" src="/popcoin-icon.svg" />
                                                                        </div>
                                                                        <div className="px-2 py-[3px] rounded-tr-full rounded-br-full font-bold border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-[#F5664B]">{`Plus extra ${brand?.attributes?.discount_percentage ? brand?.attributes?.discount_percentage : "30"}% off with popcoins`}</div>
                                                                    </div>
                                                                </>
                                                            )}
                                                            <div className="flex items-center justify-center py-6">
                                                                <Button style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black", color: brand?.attributes?.text_color ? brand?.attributes?.text_color : "white" }} className={`text-[0.67069rem] rounded-full h-0 px-5 py-4`}>GET CODE</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* // BACK SIDE */}
                                                    <div>
                                                        <div
                                                            onClick={() => toggleCardFlip(rowIndex, couponIndex)}
                                                            style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "white" }} className="w-[300px] h-[300px] rounded-md shadow-md flex items-center justify-center border-[0.3px]">
                                                            <div
                                                                className="w-[270px] h-[270px] mx-auto my-auto rounded-md cursor-pointer">
                                                                <div className='text-center flex items-center justify-center py-1'>
                                                                    {
                                                                        brand?.attributes?.round_logo?.data?.attributes?.url
                                                                            ?
                                                                            <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white"
                                                                                src={brand?.attributes?.round_logo?.data?.attributes?.url}
                                                                            />
                                                                            :
                                                                            <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white">
                                                                            </div>
                                                                    }
                                                                </div>

                                                                <div className="flex">
                                                                    <Button
                                                                        onClick={(event) => handleCopyClick(event, coupon?.attributes?.title, coupon?.id)}
                                                                        style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "white", color: brand?.attributes?.primary_color ? "white" : "black" }} className="text-center mx-auto rounded-lg"> {coupon?.isChecked ? "Copied!" : "Tap to Copy"}</Button>
                                                                </div>

                                                                <div style={{ borderColor: "white" }} className={`text-center border-[1px] rounded-lg mx-8`}>
                                                                    <div className="flex items-center justify-center">
                                                                        <Button
                                                                            style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black", color: "white" }}
                                                                            onClick={(event) => handleCopyClick(event, coupon?.attributes?.title, coupon?.id)}
                                                                            className="h-7 uppercase">{coupon?.attributes?.title?.length > 10 ? coupon?.attributes?.title?.slice(0, 10) + ".." : coupon?.attributes?.title}&nbsp;&nbsp;<Copy className="w-[15px] h-[15px]" /></Button>
                                                                    </div>
                                                                </div>
                                                                <br />
                                                                <>
                                                                    {coupon?.isChecked ? (
                                                                        <div className="flex items-center justify-center">
                                                                            <a target="_blank" href={brand?.attributes?.redirection_url}>
                                                                                <Button
                                                                                    style={{ backgroundColor: brand?.attributes?.primary_color, color: brand?.attributes?.text_color }}
                                                                                    onClick={(event) => event.stopPropagation()} className={`text-[0.67069rem] rounded-full h-0 px-3 py-3 mb-1 shadow-xl border-[0.01px]`}>REDEEM NOW&nbsp;&nbsp;<ArrowRightCircle className="w-4 h-4" /></Button>
                                                                            </a>
                                                                        </div>
                                                                    ) : null}

                                                                </>
                                                                <div className="text-center text-white text-[0.825rem]">
                                                                    <div>{coupon?.attributes?.summary?.split("•")[0] ? coupon?.attributes?.summary?.split("•")[0] : null}</div>
                                                                    <div>{coupon?.attributes?.summary?.split("•")[1] ? coupon?.attributes?.summary?.split("•")[1] : null}</div>
                                                                    <div>{coupon?.attributes?.summary?.split("•")[2] ? coupon?.attributes?.summary?.split("•")[2] : null}</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </ReactCardFlip>
                                            </>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export { FilteredCouponDataComponent }