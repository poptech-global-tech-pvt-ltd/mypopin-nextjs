import Link from "next/link"
import { useEffect, useState } from "react"
import { Khand } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function InfiniteImageSlider() {
    const [brandLogos, setBrandLogos] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/popcoin-partners-widgets?populate=*`).then((res) => res.json()).then((data) => setBrandLogos(data?.data))
    }, [])

    console.log("brandLogos", brandLogos)

    return (
        <>
            <div className="my-20" />
            <div className={`lg:pb-0 px-4 lg:px-0 text-[35px] leading-9 lg:leading-0 text-center lg:text-6xl py-16 font-bold lg:mb-[150px] ${khand.className}`}>Best Shopping Deals Online</div>
                <div className="infinite-container">
                    <section>
                        <article>
                            <div>
                                <ul>
                                    {brandLogos?.map((i: any, index: number) => (
                                        <li key={index}>
                                            <Link target="_blank" href={`/brands/${i?.attributes?.redirection_url}`}>
                                                <img className="min-w-[150px] lg:min-w-[200px] h-auto" src={i?.attributes?.image?.data?.attributes?.url} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </section>
                </div>
            {/* </div> */}
        </>
    )
}

export { InfiniteImageSlider }