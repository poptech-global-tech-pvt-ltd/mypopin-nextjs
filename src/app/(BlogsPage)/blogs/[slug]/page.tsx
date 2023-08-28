import CategoryLabel from "@/components/CategoryLabel"
import Container from "@/components/Container"
import Image from "next/image"
import Link from "next/link"

function BlogDetail() {
    return (
        <>
            <section className="py-24 max-w-6xl mx-auto">
                <Container className="!pt-0">
                    <div className="mx-auto max-w-screen-md ">
                        <div className="flex justify-center">
                            <CategoryLabel categories={[{title : "technology", color : "blue"}]} />
                        </div>

                        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                            post title
                        </h1>

                        <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 flex-shrink-0">
                                    {true && (
                                        // <Link href={`/author/${post.author.slug.current}`}>
                                        <Image
                                            src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75"
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
                                        {/* <Link href={`/author/${post.author.slug.current}`}> */}
                                        author name
                                        {/* </Link> */}
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm">
                                        {/* <time
                                            className="text-gray-500 dark:text-gray-400"
                                            dateTime={post?.publishedAt || post._createdAt}>
                                            {format(
                                                parseISO(post?.publishedAt || post._createdAt),
                                                "MMMM dd, yyyy"
                                            )}
                                        </time> */}
                                        <span>· 8  min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                    {true && (
                        <Image
                            src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=3840&q=75"
                            alt=""
                            loading="eager"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    )}
                </div>

                <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                    <article className="mx-auto max-w-screen-md ">
                        <div className="mx-auto my-3">
                            Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face.

                            Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage.

                            In today’s day and age, companies like Google or Amazon do not pursue growth through incremental market share gains; rather, they focus on understanding their customers’ needs and creating entirely new markets to answer them. Creating a house of brands for these markets would be folly — not only would each brand need to be created from scratch, increasing the already significant investment, but the new category itself often needs to be explained to consumers, compounding the cost.

                            Instead, investing in a strong master brand-led architecture and putting multiple if not all brands under the leadership of a strong brand, presents numerous advantages. First, mergers and acquisitions, or partnerships, are making it necessary to bring multiple market participants to “the same page” — and this common ground often involves a master brand recognized by all. Second, the risk profile of a “branded house” architecture has changed: the master brand can create an aura of innovation and risk-taking, supporting the launch of new products. Third, investments can be streamlined, as a strong master brand can be leveraged across markets and product


                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default BlogDetail