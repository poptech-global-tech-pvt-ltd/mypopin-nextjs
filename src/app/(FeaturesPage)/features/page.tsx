process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import React, { Fragment } from 'react'
import Image from "next/image"
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Script from 'next/script';

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

async function getData() {
    try {
        const res = await fetch(`https://mypop-dashboard.popclub.co.in/api/b2-b-features?populate=*`)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (err) {
        console.log({ err });
    }
}

async function Features() {
    const res = await getData()
    const featureData = res.data
    console.log("=====================>", featureData)
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
                <meta property="og:url" content="https://mypop.in/features" />
                <link rel="canonical" href="https://mypop.in/features" />
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
            <section className="py-2 lg:py-24 max-w-6xl mx-auto">
                <div className={`${khand.className}  text-center text-6xl py-1 lg:py-6`}></div>
                <div className={`${khand.className}  text-center text-6xl py-6`}>Features</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
                    {featureData?.map((itm: any, index: number) => (
                        <Fragment key={index}>
                            <div className='space-y-3 m-2 lg:m-0'>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src={itm?.attributes?.Image?.data?.attributes?.url}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-auto h-full object-cover rounded-md cursor-pointer transition-transform hover:scale-[1.03]"
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className={`text-center text-3xl ${khand.className} font-semibold px-10`}>{itm?.attributes?.Title}</div>
                                <div className={`text-center text-lg font-normal ${manrope.className}l`}>{itm?.attributes?.Description}</div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Features