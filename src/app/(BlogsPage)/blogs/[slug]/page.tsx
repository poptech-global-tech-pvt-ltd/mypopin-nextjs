process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import CategoryLabel from "@/components/CategoryLabel"
import Container from "@/components/Container"
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image"
import ReactMarkdown from "react-markdown";

async function getData(slug: string) {
    try {
        const res = await fetch(`https://mypop-dashboard.popclub.co.in/api/blog-widgets?filters[$and][0][uuid][$eq]=${slug}&populate=*`)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (err) {
        console.log({ err });
    }
}

async function BlogDetail({ params, searchParams }: any) {

    const slug = params.slug
    const res = await getData(slug)
    const blogDetailData = res?.data

    console.log("============", blogDetailData[0].attributes)

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
                            ) : null}
                        </div>
                        {blogDetailData && blogDetailData.length === 1 ? (
                            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                                {blogDetailData[0].attributes.title}
                            </h1>
                        ) : null}
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
                                            null
                                        }
                                        {/* </Link> */}
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm">
                                        {blogDetailData && blogDetailData.length === 1 ? (
                                            <div>
                                                {blogDetailData.length > 0 && new Date(blogDetailData[0].attributes.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>
                                        ) :
                                            null}
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
                        null}
                </div>

                <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                    <div className="mx-auto max-w-screen-md ">
                        <div className="mx-auto my-3">
                            {
                                blogDetailData && blogDetailData.length === 1 ? (
                                    <div className="blog-post-container">
                                        <ReactMarkdown>
                                            {blogDetailData[0].attributes.full_description}
                                        </ReactMarkdown>
                                    </div>
                                ) :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetail


export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const slug = params.slug
    const res = await getData(slug)
    const blogDetailData = res?.data


    return {
        title: `${blogDetailData[0].attributes?.meta_title}`,
        description: `${blogDetailData[0].attributes?.meta_desc}`,
        alternates: {
            languages: {
                'en-US': '/en-US',
            },
        },
    }
}
