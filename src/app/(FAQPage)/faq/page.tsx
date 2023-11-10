import { Manrope } from 'next/font/google'
import Script from 'next/script'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

function FAQ({ searchParams }: any) {
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
        <meta property="og:url" content="https://mypop.in/faq" />
        <link rel="canonical" href="https://mypop.in/faq" />
        {/* // faq schema org */}
        <Script id="schema-track-3" strategy="lazyOnload" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What are POPcoins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "POPcoins is a currency that allows you to access exclusive offers and discounts when you shop on POPcoins partner websites. You can earn and redeem POPcoins on partner brands that are part of the POPcoins program."
                }
              }, {
                "@type": "Question",
                "name": "Is there a membership fee to become a member of POPcoins ecosystem?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, there is no membership fee to participate in the POPcoins program. All you need to do is signup on any partner website or mypop.in and join the program."
                }
              }, {
                "@type": "Question",
                "name": "What are POPcoins partner brands?POPcoins partner brands are the brands which use a common loyalty currency called POPcoins on their platform. The list of brands that are active on POPcoins ecosystem can be found on https://mypop.in.",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "POPcoins partner brands are the brands which use a common loyalty currency called POPcoins on their platform. The list of brands that are active on POPcoins ecosystem can be found on https://mypop.in."
                }
              }, {
                "@type": "Question",
                "name": "How many POPcoins do I get for shopping on POPcoins partner brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will receive 5 POPcoins for every Rs. 100 spent on the partner brands. For instance, if you purchase a product for Rs. 1000, you will earn 50 POPcoins, which will be credited to your account after the return period has ended. Once the POPcoins are credited to your account, you can redeem them immediately. However, please note that you will not earn any POPcoins for reward purchases"
                }
              }, {
                "@type": "Question",
                "name": "What is the validity period for POPcoins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "POPcoins are valid for 6 months from the date they are credited to your account."
                }
              }, {
                "@type": "Question",
                "name": "What are the ways to use POPcoins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Here are some ways you can use the POPcoins you earn on POPcoins partner brands: Redeem them for exclusive offers and discounts on partner brand products. Use coins to access offers on lifestyle areas like movies, events, OTT subscriptions, and travel to over 50 destinations through Rewards."
                }
              }, {
                "@type": "Question",
                "name": "Is it possible to cancel rewards redeemed with POPcoins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, once you have redeemed rewards using POPcoins, it is not possible to reverse the transaction."
                }
              }, {
                "@type": "Question",
                "name": "Is it possible to use POPcoins as the sole payment method for shopping on partner brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, it is not possible to use POPcoins for the entire purchase amount. POPcoins can only be used to get a discount on a certain value of the cart, and the discount percentage is available on respective websites."
                }
              }, {
                "@type": "Question",
                "name": "When will POPcoins be credited to my account after purchase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "POPcoins will be credited to your account once the order is delivered and the return period is over."
                }
              }, {
                "@type": "Question",
                "name": "If I cancel the order, will the POPcoins that were to be credited to my account also be cancelled?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the POPcoins that you were supposed to earn will be revoked for the cancelled order."
                }
              }, {
                "@type": "Question",
                "name": "Where can I check the details of my POPcoins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To view the details of your POPcoins, please follow these easy steps on any partner website or mypop.in: Login to POPcoins program. Navigate to the bottom of the page and click on the \"Check History\" button. This will take you to the coins history page, where you can check the status of your POPcoins, including whether they are 'on the way,' 'credited,' 'redeemed,' or 'expired.'"
                }
              }]
            }
          )
        }}>
        </Script>
        {/* // basic schema */}
        <Script id="schema-track-4" strategy="lazyOnload" type="application/ld+json" dangerouslySetInnerHTML={{
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

      <section style={searchParams.ref === "app" ? { backgroundColor: "black", color: "#e5e5e5", padding: "0px 10px" } : { backgroundColor: "white", color: "black" }} className="py-24 max-w-6xl mx-auto">
        <div>
          <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >Frequently Asked Questions:</h3>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are POPcoins?</h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins is a currency that allows you to access exclusive offers and discounts
            when you shop on POPcoins partner websites. You can earn and redeem POPcoins on partner brands that are part of the POPcoins program.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is there a membership fee to become a member of POPcoins ecosystem?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>No, there is no membership fee to participate in the POPcoins program. All you need to do is signup on any partner website or mypop.in and join the program.</p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are POPcoins partner brands?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins partner brands are the brands which use a common loyalty currency called POPcoins on their platform. The list of brands that are active on POPcoins ecosystem can be found on https://mypop.in.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>How many POPcoins do I get for shopping on POPcoins partner brands?</h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You will receive 5 POPcoins for every Rs. 100 spent on the partner brands.
            For instance, if you purchase a product for Rs. 1000, you will earn 50 POPcoins, which will be credited to your account after the return period has ended. Once the POPcoins are credited to your account, you can redeem them immediately.  <br />However, please note that you will not earn any POPcoins for reward purchases.
          </p>

          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What is the validity period for POPcoins?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins are valid for 6 months from the date they are credited to your account. </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are the ways to use POPcoins?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Here are some ways you can use the POPcoins you earn on POPcoins partner brands:
          </p>
          <ul>
            <li>Redeem them for exclusive offers and discounts on partner brand products.
            </li>
            <li>Use coins to access offers on lifestyle areas like movies, events, OTT subscriptions, and travel to over 50 destinations through Rewards.
            </li>
          </ul>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is it possible to cancel rewards redeemed with POPcoins?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>No, once you have redeemed rewards using POPcoins, it is not possible to reverse the transaction.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is it possible to use POPcoins as the sole payment method for shopping on partner brands?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>No, it is not possible to use POPcoins for the entire purchase amount. POPcoins can only be used to get a discount on a certain value of the cart, and the discount percentage is available on respective websites.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>When will POPcoins be credited to my account after purchase?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins will be credited to your account once the order is delivered and the return period is over.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>If I cancel the order, will the POPcoins that were to be credited to my account also be cancelled?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Yes, the POPcoins that you were supposed to earn will be revoked for the cancelled order.
          </p>
          <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Where can I check the details of my POPcoins?
          </h4>
          <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>To view the details of your POPcoins, please follow these easy steps on any partner website or mypop.in:
          </p>
          <ul className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>
            <li>Login to POPcoins program.
            </li>
            <li>Navigate to the bottom of the page and click on the "Check History" button.
              This will take you to the coins history page, where you can check the status of your POPcoins, including whether they are 'on the way,' 'credited,' 'redeemed,' or 'expired.'
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default FAQ