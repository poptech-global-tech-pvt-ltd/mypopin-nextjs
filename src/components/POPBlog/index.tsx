import { Khand, Manrope } from 'next/font/google'
import popBlog from "../../../blogs"
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button'
import Link from 'next/link'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})


function POPBlog() {
    return (
        <>
            <br />
            <br />
            <section className="bg-[#F7F7F9] max-w-5xl mx-auto rounded-3xl p-8">
                <div className={`${manrope.className} flex text-[32px] font-[800]`}>
                    <div className="text-black">POP Circle. </div>
                    <div className="text-[#6B7280]">Curated Reads For You</div>
                </div>
                <br />
                <section className='blog-grid-container'>
                    <div className='blog-grid-itm-1 px-2'>
                        <div><img className='rounded-2xl' src={popBlog[0].post_image} /></div>
                        <div className='py-4'><Badge className='text-[#981B1B] bg-[#FEE2E1]'>{popBlog[0].category}</Badge></div>
                        <div className={`${manrope.className} text-[20px] font-bold`}>{popBlog[0].title}</div>
                        <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{popBlog[0].description}</div>
                        <div className='flex items-center py-1'>
                            <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                            <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>POP</div>
                            <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{popBlog[0].date}</div>
                        </div>
                    </div>
                    <div className='blog-grid-itm-2 px-2'>
                        <div className='grid grid-cols-[2fr_1fr]'>
                            <div>
                                <div className='py-4'><Badge className='bg-[#DFE7FF] text-[#3730A3]'>{popBlog[1].category}</Badge></div>
                                <div className={`${manrope.className} text-[14px] font-bold`}>{popBlog[1].title}</div>
                                <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{popBlog[1].description.slice(0, 64) + "..."}</div>
                                <div className='flex items-center py-1'>
                                    <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                    <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>POP</div>
                                    <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{popBlog[0].date}</div>
                                </div>
                            </div>
                            <div>
                                <div className='h-full'><img className='rounded-2xl h-full object-cover' src={popBlog[1].post_image} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-grid-itm-3 px-2'>
                        <div className='grid grid-cols-[2fr_1fr]'>
                            <div>
                                <div className='py-4'><Badge className='bg-[#FEF9C3] text-[#844D0F]'>{popBlog[2].category}</Badge></div>
                                <div className={`${manrope.className} text-[14px] font-bold`}>{popBlog[2].title}</div>
                                <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{popBlog[2].description.slice(0, 64) + "..."}</div>
                                <div className='flex items-center py-1'>
                                    <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                    <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>POP</div>
                                    <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{popBlog[0].date}</div>
                                </div>
                            </div>
                            <div>
                                <div className='h-full'><img className='rounded-2xl h-full object-cover' src={popBlog[2].post_image} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-grid-itm-4 px-2'>
                        <div className='grid grid-cols-[2fr_1fr]'>
                            <div>
                                <div className='py-4'><Badge className='text-[#6B21A8] bg-[#F3E7FF]'>{popBlog[3].category}</Badge></div>
                                <div className={`${manrope.className} text-[14px] font-bold`}>{popBlog[3].title}</div>
                                <div className={`${manrope.className} text-[14px] font-normal text-[#475569]`}>{popBlog[3].description.slice(0, 64) + "..."}</div>
                                <div className='flex items-center py-1'>
                                    <div><img width="22" height="22" src="/popcoin-icon.svg" /></div>
                                    <div className={`text-[#4B5563] text-[12px] font-bold px-2 ${manrope.className}`}>POP</div>
                                    <div className={`text-[#6B7280] text-[12px] font-[500] ${manrope.className}`}>{popBlog[0].date}</div>
                                </div>
                            </div>
                            <div>
                                <div className='h-full'><img className='rounded-2xl h-full object-cover' src={popBlog[3].post_image} /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='flex justify-center py-4'>
                    <Link href="https://blog.mypop.in/">
                    <Button className='rounded-full bg-white hover:text-white drop-shadow text-black'>Show all blog articles</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { POPBlog }