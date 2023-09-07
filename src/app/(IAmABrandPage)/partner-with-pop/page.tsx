'use client'

import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import dynamic from 'next/dynamic'
import { B2BHero } from '@/components/B2BHero'
import { BrandPartners } from '@/components/BrandPartners'
import { B2BPopInNumbers } from '@/components/B2BPopInNumbers'
import { B2BIntegrations } from '@/components/B2BIntegrations'
import { B2BCaseStudies } from '@/components/B2BCaseStudies'
import { ScheduleDemo } from '@/components/ScheduleDemo'
import { POPBlog } from '@/components/POPBlog'
import Script from 'next/script'
const LeadingBrandsCarousel = dynamic(() => import('@/components/LeadingBrandsCarousel'), { ssr: false })
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel'), { ssr: false })

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function PartnerWithPOP() {
    return (
        <>
            <head>
                {/* <!-- Required meta tags --> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Partner with Pop: A Collaborative Platform to help improve your D2C Brand's Loyalty | POP</title>
                <meta name="description" content="Become our Partner and unlock endless opportunities for your D2C brand. Connect with us and amplify your brand's retention. Discover the power of collaboration with Pop. Schedule your Demo today!" />
                <meta name="keywords" content="partner with POP, Join POP, Sign up as a partner with Pop, become a partner" />
                <meta property="og:title" content="Partner with Pop: A Collaborative Platform to help improve your D2C Brand's Loyalty | POP" />
                <meta property="og:description" content="Become our Partner and unlock endless opportunities for your D2C brand. Connect with us and amplify your brand's retention. Discover the power of collaboration with Pop. Schedule your Demo today!" />
                <meta property="og:image" content="https://mypop.in/public/dashboard-placeholder.png" />
                <meta property="og:image:alt" content="POP Partner's Dashboard Placeholder" />
                <meta property="og:url" content="https://mypop.in/partner-with-pop" />
                <link rel="canonical" href="https://mypop.in/partner-with-pop" />
                {/* <!-- Facebook Pixel Code --> */}
                <Script id="fb-pixel-code-new">
                    {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', '1984458878587137'); 
    fbq('track', 'PageView');
    `}
                </Script>
                <noscript>
                    <img height="1" width="1"
                        src="https://www.facebook.com/tr?id=1984458878587137&ev=PageView
    &noscript=1"/>
                </noscript>
                {/* <!-- End Facebook Pixel Code --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* <!-- Moengage Code --> */}
                <Script id="monage-code-2" type="text/javascript">
                    {`
    !function(e,n,i,t,a,r,o,d){var s=e[a]=e[a]||[];if(s.invoked=0,s.initialised>0||s.invoked>0)return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1;e.moengage_object=a;var l={},g=function n(i){return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];(e.moengage_q=e.moengage_q||[]).push({f:i,a:t})}},u=["track_event","add_user_attribute","add_first_name","add_last_name","add_email","add_mobile","add_user_name","add_gender","add_birthday","destroy_session","add_unique_user_id","moe_events","call_web_push","track","location_type_attribute"],m={onsite:["getData","registerCallback"]};for(var c in u)l[u[c]]=g(u[c]);for(var v in m)for(var f in m[v])null==l[v]&&(l[v]={}),l[v][m[v][f]]=g(v+"."+m[v][f]);r=n.createElement(i),o=n.getElementsByTagName("head")[0],r.async=1,r.src=t,o.appendChild(r),e.moe=e.moe||function(){return(s.invoked=s.invoked+1,s.invoked>1)?(console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1):(d=arguments.length<=0?void 0:arguments[0],l)},r.addEventListener("load",function(){if(d)return e[a]=e.moe(d),e[a].initialised=e[a].initialised+1||1,!0}),r.addEventListener("error",function(){return console.error("Moengage Web SDK loading failed."),!1})}(window,document,"script","https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js","Moengage");
    Moengage = moe({
    app_id:"D6GKDHFZXKZFT142EJF591VI",
    debug_logs: 0
    });
    `}
                </Script>
                {/* <!-- End of Moengage Code --> */}

                {/* <!-- Google tag (gtag.js) --> */}
                <Script id="google-tag-manager-2" async src="https://www.googletagmanager.com/gtag/js?id=G-5HQ42CSKWF"></Script>
                <Script id="data-layer">
                    {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date());
gtag('config', 'G-5HQ42CSKWF')
`}
                </Script>
            </head>
            <div className="pt-10 lg:pt-24">
                <div>
                    <B2BHero />
                </div>
                <div className='mt-24 lg:mt-0'>
                    <div className={`${khand.className} text-2xl lg:text-7xl text-center font-bold py-10 lg:py-10`}>Trusted By Leading Brands</div>
                    <div className='py-5 pb-10'>
                        <LeadingBrandsCarousel />
                        <div className='py-0 lg:py-4' />
                    </div>
                </div>
                <BrandPartners />
                <B2BPopInNumbers />
                <B2BIntegrations />
                <B2BCaseStudies />
                <div className={`${khand.className} text-center pt-12 font-bold text-3xl lg:text-6xl`}>Brand Testimonials</div>
                <div className='max-w-6xl flex justify-center mx-auto'>
                    <TestimonialsCarousel />
                </div>
                <ScheduleDemo />
                <POPBlog />
                <div className='lg:py-2' />
            </div>
        </>
    )
}

export default PartnerWithPOP