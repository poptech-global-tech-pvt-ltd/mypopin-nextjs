'use client'
import Image from "next/image"
import Link from "next/link"
import { Khand, Manrope } from 'next/font/google'
import { useState, useEffect } from "react"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function Blogs() {
    const [blogData, setBlogData] = useState<any>();

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?populate=*`).then((res) => res.json()).then((data) => setBlogData(data?.data))
    }, [])

    console.log({ blogData })
    return (
        <>
            <section className="py-24 max-w-5xl mx-auto">
                <div className="py-10">
                    <div className={`${khand.className}  text-left text-6xl `}>POP Circle</div>
                    <div className={`${khand.className}  text-left text-6xl  text-[#6b7280]`}>Curated Reads for you</div>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogData?.map((itm: any, index: number) => (
                            <div>
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