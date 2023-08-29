'use client'
import CategoryLabel from "@/components/CategoryLabel"
import Container from "@/components/Container"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ReactMarkdown from "react-markdown";

function BlogDetail() {
    const [blogDetailData, setBlogDetailData] = useState<any>();
    const pathname = usePathname()
    console.log(pathname.split('/')[2])

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?filters[$and][0][uuid][$eq]=${pathname.split('/')[2]}&populate=*`).then((res) => res.json()).then((data) => setBlogDetailData(data?.data))
    }, [pathname])

    const calculateReadingTime = (descriptionLength: number) => {
        if (descriptionLength < 500) {
            return "3"
        }
        else if (descriptionLength < 1000) {
            return "5"
        }
        else if (descriptionLength < 1500) {
            return "9"
        }
        else if (descriptionLength < 2000) {
            return "12"
        }
        else if (descriptionLength < 2500) {
            return "15+"
        }
    }

    return (
        <>
            <section className="py-8 lg:py-24 max-w-6xl mx-auto">
                <Container className="!pt-0">
                    <div className="mx-auto max-w-screen-md ">
                        <div className="flex justify-center">

                            {blogDetailData && blogDetailData.length === 1 ? (
                                <div>
                                    <CategoryLabel categories={[{ title: blogDetailData[0].attributes?.category, color: "blue" }]} />
                                </div>
                            ) :
                                <div>
                                    <Skeleton borderRadius={1} className='h-[15px]' />
                                </div>}
                        </div>
                        {blogDetailData && blogDetailData.length === 1 ? (
                            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                                {blogDetailData[0].attributes.title}
                            </h1>
                        ) : <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                            <Skeleton borderRadius={1} className='h-[40px]' />
                        </h1>}
                        <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 flex-shrink-0">
                                    {true && (
                                        // <Link href={`/authorpageifthereisany}`}>
                                        <Image
                                            src="/popcoin-icon.svg"
                                            alt=""
                                            className="rounded-full object-cover"
                                            fill
                                            sizes="40px"
                                        />
                                        // </Link>
                                    )}
                                </div>
                                <div>
                                    <p className="text-gray-800 dark:text-gray-400">
                                        {/* <Link href={`/authorpagelink`}> */}
                                        {blogDetailData && blogDetailData.length === 1 ? (
                                            <div>
                                                {blogDetailData.length > 0 && blogDetailData[0].attributes?.author}
                                            </div>
                                        ) :
                                            <div>
                                                <Skeleton borderRadius={1} className='h-[15px]' />
                                            </div>}
                                        {/* </Link> */}
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm">
                                        {blogDetailData && blogDetailData.length === 1 ? (
                                            <div>
                                                {blogDetailData.length > 0 && new Date(blogDetailData[0].attributes.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>
                                        ) :
                                            <div>
                                                <Skeleton borderRadius={1} className='h-[15px]' />
                                            </div>}
                                        {/* <span>· </span> */}
                                        {/* <span>
                                            {blogDetailData && blogDetailData.length === 1 ? (<div>  {calculateReadingTime(blogDetailData[0].attributes.full_description)}</div>) : (<div>{null}</div>)}
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                    {blogDetailData && blogDetailData.length === 1 ? (
                        <Image
                            src={blogDetailData[0].attributes.post_image.data.attributes.url}
                            alt=""
                            loading="eager"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    ) :
                        <div>
                            <Skeleton borderRadius={10} className='h-[576px]' />
                        </div>}
                </div>

                <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                    <article className="mx-auto max-w-screen-md ">
                        <div className="mx-auto my-3">
                            {
                                blogDetailData && blogDetailData.length === 1 ? (
                                    <div className="blog-post-container">
                                        <ReactMarkdown>
                                            {blogDetailData[0].attributes.full_description}
                                        </ReactMarkdown>
                                    </div>
                                ) :
                                    <div>
                                        <Skeleton borderRadius={10} className='h-[100px]' />
                                    </div>
                            }
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default BlogDetail