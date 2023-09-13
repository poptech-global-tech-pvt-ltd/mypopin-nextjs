import Link from "next/link"

async function getData() {
    try {
        const res = await fetch(`https://mypop-dashboard.popclub.co.in/api/popcoin-partners-widgets?populate=*`)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (err) {
        console.log({ err });
    }
}

async function InfiniteImageSlider() {
    const res = await getData()
    const brandLogos = res.data

    return (
        <main className="infinite-container">
            <section>
                <article>
                    <div>
                        <ul>
                            {brandLogos?.map((i: any, index: number) => (
                                <li key={index}>
                                    <Link prefetch={false} target="_blank" href={`/brands/${i?.attributes?.redirection_url}`}>
                                        <img loading="lazy" className="min-w-[150px] lg:min-w-[200px] h-auto" src={i?.attributes?.image?.data?.attributes?.url} />
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