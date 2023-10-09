'use client'
import Image from "next/image"
import Link from "next/link"
import { Manrope } from 'next/font/google'
import { useEffect, useState } from "react"
import Script from "next/script"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

function AllBrands() {

    const [allBrandsData, setAllBrandsData] = useState<any>();
    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?populate=*`).then((res) => res.json()).then((data) => setAllBrandsData(data?.data))
    }, [])

    console.log({allBrandsData})

    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>POP All Brands Collection: Explore Exclusive Deals on Various Categories | POP</title>
                <meta name="description" content="Discover diverse brands across various categories on POP's All Brands page. Shop seamlessly & unlock exclusive discounts on your favorite brands using POPcoins." />
                <meta name="keywords" content="Earn Popcoins, Get Rewards, Earn Rewards, Partner with POP, Popcoins, Popcoin, POP, pop" />
                <meta property="og:title" content="All Brands Collection: Explore Exclusive Deals on Various Categories | POP" />
                <meta property="og:description" content="Discover diverse brands across various categories on POP's All Brands page. Shop seamlessly & unlock exclusive discounts on your favorite brands using POPcoins." />
                <meta property="og:image" content="https://mypop.in/public/pc-logo.png" />
                <meta property="og:image:alt" content="All Brands Collection on POP" />
                <meta property="og:url" content="https://mypop.in/allbrands" />
                <link rel="canonical" href="https://mypop.in/allbrands" />
                {/* // schema org */}
                <Script id="schema-track" strategy="lazyOnload" type="application/ld+json" dangerouslySetInnerHTML={{
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
                    <img height="1" width="1" src="https://www.facebook.com/tr?id=1984458878587137&ev=PageView
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
            <div className="pt-0 lg:pt-24">
                <div className="py-6">
                    <h1 className={`text-center text-3xl ${manrope.className} font-bold py-10`}>Unmatched Offers & Discount Highlights</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-14 justify-items-center">
                        {allBrandsData && allBrandsData
                            ?.filter((i: any) => i?.attributes?.brand_offer_card?.data?.attributes?.url)
                            ?.map((i: any, index: number) => (
                                <div key={index} className="drop-shadow-xl transition-transform hover:scale-105">
                                    <Link href={`/brands/${i?.attributes?.url}`}>
                                        <Image
                                            src={i?.attributes?.brand_offer_card?.data?.attributes?.url}
                                            width={362}
                                            height={256}
                                            alt={i?.attributes?.brand_offer_card?.data?.attributes?.brand_name}
                                            className="cursor-pointer"
                                        />
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllBrands