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
import Script from "next/script"



const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

const khand = Khand({
    weight: ['400', '500', '600', '700'],
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
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Introducing POP: Shop, Earn POPcoins, Get Rewards & Become our Partner | POP</title>
                <meta name="description" content="Become our Customer and Shop from Brands integrated with POPcoins and Earn Rewards & Discounts. Partner with us and revolutionize your Business Journey with our Growth Solutions at POP." />
                <meta name="keywords" content="Earn Popcoins, Get Rewards, Earn Rewards, Partner with POP, Popcoins, Popcoin, POP, pop" />
                <meta property="og:title" content="Introducing POP: Shop, Earn Popcoins, Get Rewards & Become our Partner | POP" />
                <meta property="og:description" content="Become our Customer and Shop from Brands integrated with POPcoins and Earn Rewards & Discounts. Partner with us and revolutionize your Business Journey with our Growth Solutions at POP." />
                <meta property="og:image" content="https://mypop.in/public/pc-logo.png" />
                <meta property="og:image:alt" content="India's New Currency POPcoins" />
                <meta property="og:url" content="https://mypop.in/blogs" />
                <link rel="canonical" href="https://mypop.in/blogs" />
                {/* // basic schema org */}
                <Script id="basic-schema-track-1" strategy="lazyOnload" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "My POP",
                            "url": "https://mypop.in/",
                            "logo": "https://mypop.in/images/pc-logo.png",
                            "sameAs": [
                                "https://www.facebook.com/getpopclub",
                                "https://www.instagram.com/shoponpop/",
                                "https://twitter.com/getpopclub",
                                "https://www.linkedin.com/company/getpopcoins/"
                            ]
                        }
                    )
                }}>
                </Script>

                {/* <!-- Facebook Pixel Code --> */}
                <Script id="fb-pixel-code">
                    {`
          !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          };
          if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
          n.queue = []; t = b.createElement(e); t.async = !0;
          t.src = v; s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1984458878587137');
          fbq('track', 'PageView');
          `}
                </Script>
                <noscript>
                    <img loading="lazy" height="1" width="1" src="https://www.facebook.com/tr?id=1984458878587137&ev=PageView
           &noscript=1" />
                </noscript>
                {/* <!-- End Facebook Pixel Code --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* <!-- Moengage Code --> */}
                <Script id="monage-code" type="text/javascript">
                    {`
            !function (e, n, i, t, a, r, o, d) { var s = e[a] = e[a] || []; if (s.invoked = 0, s.initialised > 0 || s.invoked > 0) return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"), !1; e.moengage_object = a; var l = {}, g = function n(i) { return function () { for (var n = arguments.length, t = Array(n), a = 0; a < n; a++)t[a] = arguments[a]; (e.moengage_q = e.moengage_q || []).push({ f: i, a: t }) } }, u = ["track_event", "add_user_attribute", "add_first_name", "add_last_name", "add_email", "add_mobile", "add_user_name", "add_gender", "add_birthday", "destroy_session", "add_unique_user_id", "moe_events", "call_web_push", "track", "location_type_attribute"], m = { onsite: ["getData", "registerCallback"] }; for (var c in u) l[u[c]] = g(u[c]); for (var v in m) for (var f in m[v]) null == l[v] && (l[v] = {}), l[v][m[v][f]] = g(v + "." + m[v][f]); r = n.createElement(i), o = n.getElementsByTagName("head")[0], r.async = 1, r.src = t, o.appendChild(r), e.moe = e.moe || function () { return (s.invoked = s.invoked + 1, s.invoked > 1) ? (console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"), !1) : (d = arguments.length <= 0 ? void 0 : arguments[0], l) }, r.addEventListener("load", function () { if (d) return e[a] = e.moe(d), e[a].initialised = e[a].initialised + 1 || 1, !0 }), r.addEventListener("error", function () { return console.error("Moengage Web SDK loading failed."), !1 }) }(window, document, "script", "https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js", "Moengage");
            Moengage = moe({
            app_id: "D6GKDHFZXKZFT142EJF591VI",
            debug_logs: 0
            });
        `}
                </Script>
                {/* <!-- End of Moengage Code --> */}
                {/* <!-- Google tag (gtag.js) --> */}
                <Script id="google-tag-manager" async src="https://www.googletagmanager.com/gtag/js?id=G-5HQ42CSKWF"></Script>
                <Script id="gtag">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-5HQ42CSKWF');
          `}
                </Script>
            </head>


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