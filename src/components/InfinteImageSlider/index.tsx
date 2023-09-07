import Link from "next/link"
import { useEffect, useState } from "react"

function InfiniteImageSlider() {
    const [brandLogos, setBrandLogos] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/popcoin-partners-widgets?populate=*`).then((res) => res.json()).then((data) => setBrandLogos(data?.data))
    }, [])

    console.log("brandLogos", brandLogos)

    return (
        <main className="infinite-container">
            <section>
                <article>
                    <div>
                        <ul>
                            {brandLogos?.map((i: any, index: number) => (
                                <li>
                                    <Link target="_blank" href={`/brands/${i?.attributes?.redirection_url}`}>
                                        <img className="min-w-[100px] lg:min-w-[200px] h-auto" src={i?.attributes?.image?.data?.attributes?.url} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    )
}

export { InfiniteImageSlider }