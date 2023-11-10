import { Manrope } from 'next/font/google'
import Script from 'next/script'

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

function TermsAndConditions({ searchParams }: any) {
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
                <meta property="og:url" content="https://mypop.in/terms-and-condition" />
                <link rel="canonical" href="https://mypop.in/terms-and-condition" />
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
                <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >Terms & Conditions</h3>
                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>GENERAL:</h4>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>These Terms & Conditions apply to products purchased via POPclub placed through social media, or offline on the phone or on chat or through our Customer Delight Team which are all assets managed by POPclub Vision Tech Pvt. Ltd a company incorporated under the Companies Act, 1956, (“Company” or “POPclub Vision Tech Pvt. Ltd” and its successors and assigns).</p>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Please read the Terms & Conditions carefully before purchasing any products or availing any services on any asset of POPclub Vision Tech Pvt. Ltd. Any purchase made by you through the website or through any other asset shall signify your acceptance of the supply terms and your agreement to be legally bound by the same. In addition to the foregoing, you shall also be bound by the terms of use of the website, Privacy Policy, terms by the vendor or additional terms of service which are displayed with the selection of the product, if any (“additional terms”). If there is any conflict between the supply terms and the additional terms, the additional terms shall take precedence in relation to that sale.
                    If you do not agree with the supply terms, please do not access the website or any other asset of POPclub Vision Tech Pvt. Ltd for any purchase or service.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>The website uses regular industry standard technology designed to help keep your personal information safe. The Secure Server Software (SSL) encrypts all information you put in before it is sent to us. Furthermore, all of the customer data we collect is protected against unauthorized access. To prevent unauthorized access, maintain data accuracy, and to ensure correct use of information, we will employ commercially reasonable and practicable security practices and procedures, and security methods and technologies. We will also ensure on reasonable commercial efforts that any agent or third party that we employ complies with the same security standards as us for the protection of your personal information.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Your information may be transferred to or be maintained on computers, computer systems and computer resources located outside of your state or country where the privacy laws may not be as protective as those where you live. If you are located outside India and choose to provide information to us, please be aware that the website keeps or transfers information to India and processes it there. Your submission of such information represents your agreement to that transfer.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Unfortunately, the transmission of information over the internet is not completely secure. Although we strive to protect your personal data, we cannot guarantee the security of your data while it is being transmitted to our site; any transmission is at your own risk. Once we have received your information, we have commercially reasonable procedures and security features in place to reasonably endeavour to prevent unauthorized access.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Some content offered on the platform may not be suitable for some users, viewer discretion is advised. Also, some content offered on the platform may not be appropriate for viewership by children. Parents and/or legal guardians are advised to exercise discretion before allowing their children and/or wards to access content on the platform.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>If you use the platform, you shall be responsible for maintaining the confidentiality of your display name and password and you shall be responsible for all activities that occur under your display name and password. You agree that if you provide any information that is untrue, inaccurate, not current or incomplete, we shall have the right to indefinitely suspend or terminate or block access to your membership on the platform.</p>

                <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >You agree to:</h3>
                <ul>
                    <li>Immediately notify POPclub of any unauthorized use/breach of your password or account and</li>
                    <li>Ensure that you exit from your account at the end of each session.</li>
                </ul>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>BUSINESS:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>The website is a platform that facilitates the online sale and purchase of merchandise and services (“Services”) offered by POPclub Vision Tech Pvt. Ltd to the merchandise (“Products”) will pass directly from the POPclub Vision Tech Pvt. Ltd to you.
                    POPclub has the right to change or discontinue any service at any time, without notice. POPclub may add or modify the procedures, modes, processes or conditions of purchase at any time. POPclub shall not be liable to you or to any third party for any modification, suspension or discontinuance of any aspect of the services.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>At the time of sign up POPclub App, we may require access to certain additional information such as SMS and contact details. Prior to accessing any such additional information, explicit consent shall be sought from you. Please note that even after consent has been provided by you, we only read transactional or promotional SMS and do not open, access or read any personal SMS.We use this information to provide a personalize experience and also invite you to be part of various promotional offers based on the data.
                    Certain features may be restricted, unavailable or unusable if you choose not to provide certain information. For example: You would not be able to participate in rewards on signup and on recurring basis</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You can choose to enable us to access one or more of your email accounts by explicitly consenting to each account separately. Please note that your consent to any of the above is purely voluntary. You can de-link the access to your email any time you wish.
                    We only read emails related to financial services such as credit card transactions,Shopping and travel related transactions  biller details etc and do not open, read or access any personal e-mails. For the sake of clarity, Pop club employs automated processes for accessing and analysing information provided by you;We do not sell your personal information to or share it with unaffiliated third parties for their own advertising or marketing purposes without your explicit consent

                </p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}><strong>How We Use the Information we collect</strong></p>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>We may use, store and process the information provided by you to (1) improve the services offered through the Pop club App, (2) create and maintain a trusted and safe environment on POPclub (such as complying with our legal obligations and compliance with our policies) and (3) provide, personalise, measure and improve our products and services.
                    The information collected through different channels, allows us to collect statistics about our website/app usage and effectiveness, personalise your experience whilst you are on our website/app,as well as customize our interactions with you and to enhance the scope of the App Services. The following paragraph describe in more detail how we use your personal information.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>A) Providing, understanding and improving service offered through the Pop club App
                    Any information provided by you will be used for creating and updating your account and processing your transaction(s) or for any other purposes for which you have granted access to such information to us, based on your interaction with the Pop club App.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>To complete a financial transaction, we may share financial information (such as credit card details or other payment mode details) provided by you with authorised third-parties, for instance, our business partners, financial teams/institutions, or postal/ government authorities involved in fulfilment of the said transactions, if any. This does not include any information collected from e-mails. In connection with a financial transaction, we may also contact you as part of our customer satisfaction surveys or for market research purposes.
                    We may use the information collected to perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems, to conduct data analysis, testing and research and to monitor and analyse usage and activity trends. We process this personal information for these purposes given our legitimate interest in improving the App Services.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>In order to expand the scope of our services, we may from time to time, seek additional information from you. Any such collection of additional information and documents shall be subject to explicit & purpose specific consent sought from all Users.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>SERVICES:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You should take all responsibility for your own actions in utilizing the products purchased by you; POPclub shall not be liable for any such action.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws as applicable in India.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub shall not be responsible for any deficiency in payment of consideration payable towards the products purchased on the website.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>In accordance with the Information Technology Act 2000 and rules made there under, the Grievance Officer for the purpose of your personal sensitive information as governed by the Platform Privacy Policy is hello@popclub.co. Customer Delight Team. Please write to us on hello@popclub.co to register any grievances you may have.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>In the event that you have any complaints or concerns with respect to the website or our services, please contact our Customer Delight Team at hello@popclub.co</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>PRICING INFORMATION:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>The pricing information relating to the product shall be as disclosed to you at the time of your purchase.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub does not guarantee that the price will be the lowest in the city, region or geography. Prices and availability are subject to change without notice or any consequential liability to you.
                </p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>While POPclub strives to provide accurate information relating to products, services including pricing information, typographical and other errors may occur. In the event that a product or service is listed with incorrect price or with incorrect information due to an error, POPclub may, at its discretion, either contact you for instructions or cancel your order and notify you of such a cancellation.
                </p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub will have the right to modify the price of the product and contact you for further instructions via the e-mail address provided by you at the time of registration, or cancel the order and notify you of such a cancellation. If POPclub cancels the order after the payment has been processed, the entire amount will be converted into a credit voucher or shall be remitted back to source.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>PRICING INFORMATION:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>The pricing information relating to the product shall be as disclosed to you at the time of your purchase.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub does not guarantee that the price will be the lowest in the city, region or geography. Prices and availability are subject to change without notice or any consequential liability to you.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>While POPclub strives to provide accurate information relating to products, services including pricing information, typographical and other errors may occur. In the event that a product or service is listed with incorrect price or with incorrect information due to an error, POPclub may, at its discretion, either contact you for instructions or cancel your order and notify you of such a cancellation.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub will have the right to modify the price of the product and contact you for further instructions via the e-mail address provided by you at the time of registration, or cancel the order and notify you of such a cancellation. If POPclub cancels the order after the payment has been processed, the entire amount will be converted into a credit voucher.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>CREDIT CARD DETAILS:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You might be required to provide your credit or debit card details to the approved payment gateways while making the payment. In this regard you agree to provide correct and accurate credit/debit card details to the approved payment gateways for availing services on the website. You shall not use a credit/debit card that is not lawfully owned by you. The information provided by you will not be utilized or shared with any third party unless required in relation to fraud verifications or by law, regulation or court order. You will be solely responsible for the security and confidentiality of your credit/debit card details. POPclub expressly disclaims all liabilities that may arise as a consequence of any unauthorized use of your credit/debit card.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>DELIVERY OF THE PRODUCT:</h4>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Your shipping address and pin code will be verified with the database of POPclub before you proceed to pay for your purchase. If your order is not serviceable by delivery partners, vendors, or if your location is not covered by us, we would request you to provide us with an alternate shipping address which we expect to have on our delivery partner’s/vendor’s delivery list. If there is any dispute regarding the shipment of the products or services for the area not covered by POPclub, we will not be held responsible for the non-delivery of the product. In case you book multiple orders for the products and services in one transaction, efforts will be made to ship all products together. However, this may not always be possible. In case of any erroneous address selected by the customer, the customer shall be solely responsible for the consequences of the same.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>RETURN POLICY FOR PRODUCTS:</h4>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub’s returns and exchange policy gives you an option to return or exchange items purchased on POPclub for any reason within the specified return/exchange period (check product details page for the same). We only ask that you don’t use the product and preserve its original condition, tags, and packaging. You are welcome to try a product but please take adequate measures to preserve its condition.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>During pick up, our delivery agent may do a quality check on the return. For a successful pick up, we will initiate a refund after the product has been received at our warehouse and has passed a quality check. If the picked up product does not pass the quality check, we shall ship it back to you. If you choose to exchange the item because of a mismatch of size or receipt of a defective item, you will be provided with a replacement of the item, free of cost. However all exchanges are subject to stock availability and subject to your address being serviceable for an exchange. If you choose to exchange an item, our delivery representative will deliver the new item to you and simultaneously pick up the original item from you.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}><strong>The following EXCEPTIONS and RULES apply to this policy:</strong></p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Cosmetics, socks, deodorants, perfumes, briefs, shapewear bottoms, any lingerie set that includes a brief, swimwear, mittens, wrist-bands, made to order products cannot be exchanged or returned.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Some products like fine jewellery, watches and selected products which are susceptible to damage can only be returned/exchanged for a limited number of days. Certain products can only be exchanged and not returned. Please read the Product Detail Page to see the number of days upto which a product can be returned/exchanged, post-delivery.
                    All items to be returned or exchanged must be unused and in their original condition with all original tags and packaging intact (for e.g. shoes must be packed in the original shoe box).</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub will not be liable for the products returned by mistake. In circumstances where an extra or a different product is returned by mistake, POPclub would not be accountable for misplacement or replacement of the product and is not responsible for its delivery back to the user.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>COMPENSATION POLICY:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>If the quality of any products, services, information, or other material purchased or obtained by you through the website did not meet your expectations, no compensation will be given other than the return, credit voucher or exchange of the product shall be as per the return policy declared on the website/App. The customer cannot request compensation for any reason, including but not limited to: any variation in the finish or appearance of the final product; any delay in delivery caused by unforeseen circumstances; any special, incidental, indirect or consequential damage of any kind caused by a product; missed opportunities to avail certain discounts; any issue with our delivery partners or their personnel; any voucher which got deactivated due to the end of expiry date; unavailability of items which the customer tried to purchase etc. Unreasonable and unlawful requests for compensation, over and above the entitled refund, will be treated as loss to business cases. POPclub holds the rights to cancel orders and block accounts of such customers without any prior notice.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>For paid orders, the refund will be processed to the source of the payment or in the form of a credit voucher. It will directly reflect in your POPclub account as store credit.
                    For Cash On Delivery (COD) payments, in case of cancellations or returns initiated before payments have been made, there will be no refund given as no payment has been received by us. In case payments were received by us, we shall refund the same to the source declared by the customer. POPclub shall hold no responsibility in case the source declared by the customer is erroneous.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>A convenience fee of Rs. 49/- will be applicable on the orders under the value of Rs. 500/. Order value is calculated after applying discounts/VAT/GST or any other applicable charges.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>SHIPPING, DELIVERY AND CANCELLATION:</h4>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Please see terms relating to shipping, delivery and cancellation on the website.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>WARRANTIES AND CLAIMS:</h4>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Please note the standard warranties and the conditions for usage of the products in relation to each product. No claim (a) that is contrary to the above or (b) where products have been used contrary to the conditions of usage will be entertained.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>INDEMNIFICATIONS AND LIMITATION OF LIABILITY:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>You agree to indemnify, defend and hold harmless POPclub Vision Tech Pvt. Ltd from and against any and all losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by Preebee Lifestyle Private Limited that arise out of, result from, or may be payable by virtue of, any breach of any representation, warranty, covenant or agreement made or obligation to be performed by you pursuant to these supply terms or any additional terms applicable to the purchase of products.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>In no event shall POPclub Vision Tech Pvt. Ltd and its officers, directors, employees, partners or vendors be liable to you, the vendor or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable or whether or not POPclub Vision Tech Pvt. Ltd has been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortious action, or any other claim arising out of or in connection with your purchase of the products and services herein. Notwithstanding anything to contrary, Preebee Lifestyle Private Limited’s entire liability to you under this Terms of Offer For Sale or otherwise shall be the refund of the money charged from you, under which the unlikely liability arises.</p>

                <h4 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>GOVERNING LAW:</h4>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>These Terms & Conditions and the relationship between you and POPclub Vision Tech Pvt. Ltd shall be governed in accordance with the laws of India without reference to conflict of laws principles.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>All claims, differences and disputes arising under or in connection with or in relation to the Terms & Conditions or any transactions entered into on or through the website or the relationship between you and POPclub Vision Tech Pvt. Ltd shall be subject to the exclusive jurisdiction of the courts at Mumbai, Maharashtra and you hereby accede to and accept the jurisdiction of such courts.</p>

                <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >GENERAL TERMS FOR OFFERS, PROMOTIONS, CONTESTS:</h3>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub Vision Tech Pvt. Ltd shall introduce various offers, promotions, contests from time to time. The Terms & Conditions for these shall be separately called out and POPclub reserves the right to change/modify/add/delete any of Terms & Conditions on such contests or promotions at its discretion at any time without prior intimation.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>No promotional code and/or coupon can be used against any products from the Sale section, Guest Editor section and against any and all consignment products.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>While participating in such contests/promotions, you hereby agree to release and hold POPclub harmless from any claims or demand.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Winners to contests will be decided by the team at POPclub and POPclub is not obliged or required to disclose the mechanism of the same.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>POPclub reserves the right to vary any of the Terms & Conditions of the contest and the decision of POPclub shall be valid and binding on the contestants.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>All personal information collected, in the course of this contest shall be kept confidential. POPclub shall use such information for communicating various marketing and promotional activities, subject to the contestant’s choice to receive such communications, while entering the contest.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>The participant’s profile must be public. Entries from private profiles can’t be viewed and therefore will be considered invalid.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>If @getpopclub Instagram page reposts or shares any participant’s photo that does not mean that participant is a winner. A participant will only be considered a winner once POPclub explicitly declares the same.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Entries being featured on POPclub’s Instagram page and Facebook page are entirely up to the discretion of POPclub.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>If any entry is found to have abusive and profane language, or an attempt to attack the integrity, personality of any individual or an entity or where there is any attempt to harass any individual or entity or doing/having anything which in our view is demeaning or derogatory, such entry shall stand disqualified and or deleted from the contest and content.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>All other Terms & Conditions on the website, not in conflict with these terms and conditions, shall prevail.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>All disputes based on this contest are subject to arbitration and jurisdiction of all such disputes shall be within the Courts of Mumbai, Maharashtra.  </p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>This contest is void where prohibited by law. </p>

                <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >PRIORITY SHIPPING:</h3>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>This is a service at an additional costs – costs vary based on the product and the pin-code where its needs to be shipped.</p>

                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>This is a service offered only on selected products and pin-codes which can be confirmed by calling our Customer Delight team on hello@popclub.co</p>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>In case of unlikely circumstances of a delay in the arrival of the package for reasons beyond our control, POPclub will not be liable for the same.</p>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>If POPclub is unable to fulfill the shipment in a timely manner, the extra fee will be refunded in the form of a store credit.</p>

                <h3 className={`text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >Contact us at</h3>
                <p className={` text-[20px] pb-4 ${manrope.className} font-[500] `}>Empressa Building, 2nd floor, Sahar Road, Andheri East Mumbai-400059</p>


                {/* --------------------- */}
            </section>
        </>
    )
}

export default TermsAndConditions