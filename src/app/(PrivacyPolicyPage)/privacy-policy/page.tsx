import { Manrope } from 'next/font/google'
import Script from 'next/script'

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

function PrivacyPolicy({ searchParams }: any) {
    console.log("===>", searchParams.ref)
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
                <meta property="og:url" content="https://mypop.in/privacy-policy" />
                <link rel="canonical" href="https://mypop.in/privacy-policy" />
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
            <section style={searchParams.ref === "app" ? { backgroundColor: "black", color: "#e5e5e5", padding: "0px 10px" } : { backgroundColor: "white", color: "black" }} className="py-24 max-w-6xl mx-auto">
                <div className={`sm:text-[24px] md:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Privacy Policy</div>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>This section pertains to the Privacy Policy of POPclub owned by Popclub Vision Tech Pvt Limited. We would like to inform you that our Privacy Policy is subject to change without intimation and you shall be required to review the same regularly</p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    The protection and security of your personal information is one of Popclub Vision Tech Pvt Limited’s top priorities. This Privacy Policy discloses Popclub Vision Tech Pvt Limited’s practice with respect to the information collected from the users of this website. By using this website you agree to accept the terms of this Privacy Policy as well as the website’s Terms of Use. By accessing or using this website you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. This Privacy Policy extends to both users who visit the website but do not transact business on the website, as well as users who are registered on the website.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    ‘Personal Information’ refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, name, address, phone number, fax number, email address, financial profiles, identification number, credit card information etc.
                </p>
                <div className={`sm:text-[24px] md:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2`}>PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY PERSONAL INFORMATION COLLECTED</div>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    By accepting this privacy policy, you authorize POPclub to collect, store and use any information that you provide on our website. The information collected by us are:
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    All information entered by you on our website such as your name, address, contact number, email ID, chat history, and such other information sent by you via emails to our email ID. Information collected by means of cookies that are installed on your hard drive. Information such as the IP Address of your computer, the server from which you are accessing our website, details of web browser and operating system used to access our website, date, time and place of accessing our website etc.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    In the course of using Website or App or availing the products and services, Popclub may become privy to the personal information of its Users, including information that is of a sensitive/confidential nature. Pop club is strongly committed to protecting the privacy of all stakeholders and all stakeholder data, and has necessary and reasonable measures in place to protect the confidentiality of all such information. By using the Website or App Users are accepting the practices described here as part of the Privacy Policy and Storage Guidelines.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    This Privacy Policy explains our policy regarding the collection, use, disclosure and and other services including but not limited to delivery of promotions based on SMS, Bill , BNPL and related content via the site and application, any mobile or internet connected device or otherwise . This Privacy Policy forms part and parcel of the Terms of Use.
                </p>
                <div className={`sm:text-[24px] md:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2`}>COOKIES:</div>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    Cookies are small pieces of information saved by your browser onto your computer. Cookies are used to record various aspects of your visit and assist POPclub to provide you with uninterrupted service. POPclub does not use cookies to save personal information for outside uses.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    We have implemented Google Analytics features based on Display Advertising (Google Display Network Impression Reporting, and Google Analytics Demographics and Interest Reporting). Visitors can opt out of Google Analytics for Display Advertising and customize Google Display Network ads using the Ads Settings.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    We, along with third-party vendors, including Google, use first-party cookies (such as the Google Analytics cookies) and third-party cookies together to report how our ad impressions, other uses of ad services, and interactions with these ad impressions and ad services are related to visits to our site.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    No use or services available on this website are directed towards children. POPclub does not knowingly collect personal information from minors nor knowingly sell its products to minors.
                </p>
                <div className={`sm:text-[24px] md:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2`}>USE OF INFORMATION COLLECTED:</div>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    At the time of sign up Pop club App, we may require access to certain additional information such as SMS and contact details. Prior to accessing any such additional information, explicit consent shall be sought from you. Please note that even after consent has been provided by you, we only read transactional or promotional SMS and do not open, access or read any personal SMS.We use this information to provide a personalize experience and also invite you to be part of various promotional offers based on the data. Certain features may be restricted, unavailable or unusable if you choose not to provide certain information. For example: You would not be able to participate in rewards on signup and on recurring basis
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    You can choose to enable us to access one or more of your email accounts by explicitly consenting to each account separately. Please note that your consent to any of the above is purely voluntary. You can de-link the access to your email any time you wish. We only read emails related to financial services such as credit card transactions,Shopping and travel related transactions biller details etc and do not open, read or access any personal e-mails. For the sake of clarity, Pop club employs automated processes for accessing and analysing information provided by you;We do not sell your personal information to or share it with unaffiliated third parties for their own advertising or marketing purposes without your explicit consent
                </p>
                <div className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[700] pb-2`}>How We Use the Information we collect</div>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    We may use, store and process the information provided by you to (1) improve the services offered through the Pop club App, (2) create and maintain a trusted and safe environment on Pop club (such as complying with our legal obligations and compliance with our policies) and (3) provide, personalise, measure and improve our products and services. The information collected through different channels, allows us to collect statistics about our website/app usage and effectiveness, personalise your experience whilst you are on our website/app,as well as customize our interactions with you and to enhance the scope of the App Services. The following paragraph describe in more detail how we use your personal information.                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    A) Providing, understanding and improving service offered through the Pop club App Any information provided by you will be used for creating and updating your account and processing your transaction(s) or for any other purposes for which you have granted access to such information to us, based on your interaction with the Pop club App. To complete a financial transaction, we may share financial information (such as credit card details or other payment mode details) provided by you with authorised third-parties, for instance, our business partners, financial teams/institutions, or postal/ government authorities involved in fulfilment of the said transactions, if any. This does not include any information collected from e-mails. In connection with a financial transaction, we may also contact you as part of our customer satisfaction surveys or for market research purposes. We may use the information collected to perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems, to conduct data analysis, testing and research and to monitor and analyse usage and activity trends. We process this personal information for these purposes given our legitimate interest in improving the App Services.                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    In order to expand the scope of our services, we may from time to time, seek additional information from you. Any such collection of additional information and documents shall be subject to an explicit & purpose specific consent sought from all Users.</p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    POPclub owns all the information collected via the website or applications installed on the website. As applicable, the information collected by POPclub shall be used to contact you about the website and website related news and services available on the website; monitor and improve the website; calculate the number of visitors to the website and to know the geographical locations of the visitors; update you on all the special offers available on the website and provide you with a better shopping experience.</p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    This includes sending emails intimating the various offers on the website. You may at any time choose to unsubscribe from such emails. Some of your information may be shared with and used by third parties who shall need to have access to information, such as courier companies, payment gateways, vendors etc. to enable them and POPclub perform their duties and fulfill your order requirements.</p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    POPclub does not allow any unauthorized persons or organization to use any information that POPclub may collect from you through this website. However, POPclub is not responsible for any information collected or shared or used by any other third party website due to your browser settings.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    POPclub reserves the right to share any of your personal information to comply with the orders of subpoenas, court orders or other legal process. Your personal information may be disclosed pursuant to such subpoenas, court order or legal process, which shall be without notice to you.
                </p>
                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                    POPclub may share collective information such as demographics and website usage statistics with our sponsors, advertisers or other third parties (such third parties do not include POPclub’s marketing partners and network providers). When this type of information is shared, such parties do not have access to your personal information. When you contact POPclub through any means such as chat/email, POPclub reserves the right to include your email ID for marketing communications. You can unsubscribe from such communications anytime you wish to do so.</p>

                <p className={` sm:text-[18px] md:text-[18px] lg:text-[20px] pb-4 ${manrope.className}`}>
                    <div className='font-bold pb-2'>Contact us/Grievance Officer</div>
                    <div className='pb-2'>In accordance with the Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</div>
                    <div>Name:<span> Ritika Balvalli</span></div>
                    <div>Popclub Vision Tech Pvt Limited</div>
                    <div className='pb-2'>Urban Vault, HSR Layout 6/A-16, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka - 560102</div>
                    <div>E-mail:<span> ritika@popclub.co</span></div>
                </p>

            </section>
        </>
    )
}

export default PrivacyPolicy