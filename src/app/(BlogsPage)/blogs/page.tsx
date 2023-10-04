'use client'
import Image from "next/image"
import Link from "next/link"
import { Khand, Manrope } from 'next/font/google'
import { useState, useEffect } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";



const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

const khand = Khand({
    weight: ['400', '500','600', '700'],
    subsets: ['latin'],
})

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Blogs({ params, searchParams }: any) {
    const [blogData, setBlogData] = useState<any>();
    const [isFeatured, setIsFeatured] = useState<any>();
    console.log({ params, searchParams })

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?populate=*`).then((res) => res.json()).then((data) => setBlogData(data?.data))
    }, [])

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?filters[$and][0][isFeatured][$eq]=true&populate=*`).then((res) => res.json()).then((data) => setIsFeatured(data?.data))
    }, [])

    console.log({ blogData })
    console.log({ isFeatured })
    return (
        <>
            <section className="py-8 lg:py-24 max-w-5xl mx-auto px-4 lg:px-0">
                <div className="py-10">
                    <div className={`${khand.className} text-left text-6xl font-bold text-slate-700 `}>POP Circle</div>
                </div>
                {/* <div className="flex items-center justify-end pb-8">
                    <Select defaultValue={searchParams.search ? searchParams.search : "all"} >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="b2b">B2B</SelectItem>
                            <SelectItem value="b2c">B2C</SelectItem>
                            <SelectItem value="all">All Blogs</SelectItem>
                        </SelectContent>
                    </Select>
                </div> */}
                <div className={`font-bold text-2xl ${manrope.className} text-slate-600 pb-2`}>Featured</div>
                <Carousel
                    responsive={responsive}
                    arrows
                >
                    {isFeatured?.length > 0 && (
                        isFeatured?.map((itm: any, index: number) => (
                            <div key={index}>
                                <Link href={`/blogs/${itm?.attributes?.uuid}`}>
                                    <div className={`relative text-black font-bold ${khand.className}`}>
                                        <img className="rounded-lg" style={{ height: "50vh", width: "100%", objectFit: "cover" }} src={itm?.attributes?.post_image?.data?.attributes?.url} />
                                        <div className="absolute bottom-0 left-0 bg-slate-300 w-full p-2 rounded-b-lg">
                                            <div className="p-1">
                                                <div className="text-xl font-[600]">{itm?.attributes?.title}</div>
                                                <div className="flex items-center space-x-1">
                                                    <div>
                                                        <img
                                                            src="/popcoin-icon.svg"
                                                            alt=""
                                                            className="rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="font-normal">{itm?.attributes?.author}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </Carousel>

                <br />
                <br />
                <div className="">
                    <div className={`font-bold text-2xl ${manrope.className} text-slate-600 pb-2`}>All Blogs</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogData?.map((itm: any, index: number) => (
                            <div key={index}>
                                <Link href={`/blogs/${itm?.attributes?.uuid}`}>
                                    <Image
                                        src={itm?.attributes?.post_image?.data?.attributes?.url}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-auto object-cover rounded-md aspect-square cursor-pointer transition-transform hover:scale-[1.03]"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </Link>
                                <div className="space-y-2">
                                    <div className="uppercase pt-2 text-[12px]">{itm?.attributes?.category}</div>
                                    <Link href={`/blogs/${itm?.attributes?.uuid}`}>
                                        <div className="text-[18px] font-semibold">{itm?.attributes?.title}</div>
                                    </Link>
                                    <div className="flex items-center space-x-1">
                                        <div>
                                            <Image
                                                src="/popcoin-icon.svg"
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="w-full h-auto object-cover rounded-full aspect-square"
                                                alt=""
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="text-[14px]">{itm?.attributes?.author}</div>
                                        <div>•</div>
                                        <div className="text-[14px]">
                                            {itm?.attributes?.createdAt
                                                ? new Date(itm.attributes.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs