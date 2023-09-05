'use client'
import { Khand, Manrope } from 'next/font/google'
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const khand = Khand({
    weight: ['700', '400', '500'],
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800']
})


function POPBlog() {
    const [blogData, setBlogData] = useState<any>();

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?populate=*`).then((res) => res.json()).then((data) => setBlogData(data?.data))
    }, [])

    console.log({ blogData })

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section className="bg-[#F7F7F9] max-w-[70rem] mx-auto rounded-3xl p-8 -mt-[100px]">
                <br />
                <div className={`${khand.className} flex flex-col lg:flex-row leading-6 lg:leading-0`}>
                    <div className={`${khand.className} text-black text-[45px] lg:text-[40px] font-[800]`}>POP Circle. </div>
                    <div className={`${khand.className} text-[#6B7280] text-[14px] lg:text-[40px] font-[500] lg:font-[800]`}>&nbsp;Curated Reads For You</div>
                </div>
                <br />
                <br />
                <section className='blog-grid-container max-w-[58rem] mx-auto'>
                    {blogData && blogData?.length > 0 && (
                        <>
                            <div className='blog-grid-itm-1 px-2'>
                                <div><img className='rounded-2xl' src={blogData[0]?.attributes?.post_image?.data?.attributes?.url} /></div>
                                <div className='py-4'><Badge className='text-[#981B1B] bg-[#FEE2E1] hover:bg-[#FEE2E1]'>{blogData[0]?.attributes.category}</Badge></div>
                                <div className={`${manrope.className} text-[20px] font-bold`}>
                                    <a target="_blank" href={blogData[0]?.attributes?.external_link}>
                                        {blogData[0]?.attributes.title}
                                    </a>
                                </div>
                                <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{blogData[0]?.attributes.description}</div>
                                <div className='flex items-center py-1'>
                                    <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                    <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>{blogData[0]?.attributes?.author}</div>
                                    <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{blogData[0]?.attributes.date}</div>
                                </div>
                            </div>


                            <div className='blog-grid-itm-2 px-2'>
                                <div className='grid grid-cols-[2fr_1fr] items-center lg:items-start'>
                                    <div>
                                        <div className='pb-4'><Badge className='bg-[#DFE7FF] hover:bg-[#DFE7FF] text-[#3730A3]'>{blogData[1]?.attributes.category}</Badge></div>
                                        <div className={`${manrope.className} text-[14px] font-bold`}>
                                            <a target="_blank" href={blogData[1]?.attributes?.external_link}>
                                                {blogData[1]?.attributes.title}
                                            </a>
                                        </div>
                                        <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{blogData[1]?.attributes.description.slice(0, 64) + "..."}</div>
                                        <div className='flex items-center py-1'>
                                            <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                            <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>{blogData[1]?.attributes?.author}</div>
                                            <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{blogData[1]?.attributes.date}</div>
                                        </div>
                                    </div>
                                    <div className='h-full'>
                                        <div className='h-full'><img className='rounded-2xl object-cover h-full max-h-[200px]' src={blogData[1]?.attributes?.post_image?.data?.attributes?.url} /></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='blog-grid-itm-3 px-2 hidden md:block lg:block'>
                                <div className='grid grid-cols-[2fr_1fr] items-center lg:items-start'>
                                    <div>
                                        <div className='pb-4'><Badge className='bg-[#FEF9C3] hover:bg-[#FEF9C3] text-[#844D0F]'>{blogData[2]?.attributes.category}</Badge></div>
                                        <div className={`${manrope.className} text-[14px] font-bold`}>
                                            <a target="_blank" href={blogData[2]?.attributes?.external_link}>
                                                {blogData[2]?.attributes.title}
                                            </a>
                                        </div>
                                        <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{blogData[2]?.attributes?.description?.slice(0, 64) + "..."}</div>
                                        <div className='flex items-center py-1'>
                                            <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                            <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>{blogData[2]?.attributes?.author}</div>
                                            <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{blogData[2]?.attributes.date}</div>
                                        </div>
                                    </div>
                                    <div className='h-full'>
                                        <div className='h-full'><img className='rounded-2xl h-full object-cover max-h-[200px]' src={blogData[2]?.attributes?.post_image?.data?.attributes?.url} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-grid-itm-4 px-2 hidden md:block lg:block'>
                                <div className='grid grid-cols-[2fr_1fr] items-center lg:items-start'>
                                    <div>
                                        <div className='pb-4'><Badge className='text-[#6B21A8] bg-[#F3E7FF] hover:bg-[#F3E7FF]'>{blogData[3]?.attributes.category}</Badge></div>
                                        <div className={`${manrope.className} text-[14px] font-bold`}>
                                            <a target="_blank" href={blogData[2]?.attributes?.external_link}>
                                                {blogData[3]?.attributes.title}
                                            </a>
                                        </div>
                                        <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{blogData[3]?.attributes.description.slice(0, 64) + "..."}</div>
                                        <div className='flex items-center py-1'>
                                            <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                            <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>{blogData[3]?.attributes?.author}</div>
                                            <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{blogData[3]?.attributes.date}</div>
                                        </div>
                                    </div>
                                    <div className='h-full'>
                                        <div className='h-full'><img className='rounded-2xl object-cover h-full max-h-[200px]' src={blogData[3]?.attributes?.post_image?.data?.attributes?.url} /></div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
                <div className='flex justify-center py-4'>
                    <Link href="https://blog.mypop.in/">
                        <Button className='rounded-full bg-white hover:text-white drop-shadow text-black'>Show all blog articles</Button>
                    </Link>
                </div>

            </section>
            <div className='my-12' />
        </>
    )
}

export { POPBlog }