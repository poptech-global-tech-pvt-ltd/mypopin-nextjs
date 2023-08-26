'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, Fragment } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"

function Footer() {
    // remove this and choose between swr OR tanstack-query
    const [allBrands, setAllBrands] = useState<any>([])

    useEffect(() => {
        const getBrandNames = async () => {
            fetch('https://mypop-dashboard.popclub.co.in/api/footer-top-brands?populate=*').then((res) => res.json()).then((data) => setAllBrands(data?.data[0].attributes.brand_names))
        }
        getBrandNames()
    }, [])

    return (
        <>
            <div className="max-w-[1350px] md:px-4 pt-2 pb-4 mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>POP: Shop, Earn Popcoins, Get Rewards & Become our Partner</AccordionTrigger>
                        <AccordionContent className="p-[0px] pb-0 px-2 lg:px-0">
                            <div className="bg-white">
                                <h6 className="pt-4 pb-2 font-bold">Comprehensive solutions as to why POPcoins help D2C brands</h6>
                                <p className="pb-2">In the evolving landscape of direct-to-consumer (D2C) brands, establishing a strong customer base and fostering loyalty is crucial for long-term success. One innovative solution that has emerged to address this challenge is the implementation of a loyalty currency called POPcoins.</p>
                                <h6 className="pt-4 pb-2 font-bold">Partner with us</h6>
                                <p className="pb-2">What are the benefits collaborative brands can reap by enrolling with POPcoins?</p>
                                <p className="pb-2">Expanded market opportunities: The first and most obvious one is brand collaboration, resulting in a multifold audience to acquire, which enables a wider reach of your brand. With this network, collaborative brands will achieve multifold perks and benefits.</p>
                                <p className="pb-2">
                                    Seamless cross-selling opportunities: Enjoy brand collaboration with POP loyalty currency that can be leveraged with the benefits of a co-branding partnership. Cross-sell between the POPcoin integrated brands, loyalty currency POPcoins ties customers of different D2C brands as one currency can be used across different brands, tying them together. By incentivising customers to explore different offerings within the network, brands can tap into previously untapped market segments and drive additional sales due to increasing brand awareness. This symbiotic relationship between brands fosters collaboration generates mutual benefits and expands the overall customer base while gaining higher margins of sales.
                                </p>
                                <p className="pb-2">
                                    Access to a vast customer network: By leveraging the POPcoin ecosystem, brands can increase brand awareness, alongside gaining access to a vast customer network that extends beyond their individual reach. The collaborative nature of the network enables brands to tap into the customer base of users across all POP partner brands, exponentially expanding their potential audience. This access to a wider customer network opens up new growth opportunities and strengthens market presence.
                                </p>
                                <p className="pb-2">
                                    One-stop destination for brand discovery: Increase brand awareness where customers can discover and access a diverse range of collaborative brands within the POPcoin network. This concept becomes a reality, offering customers a convenient one-stop destination for exploring new products, services, and experiences. Housing multiple collaborative brands under one umbrella help with D2C branding, as the network facilitates brand discovery and encourages customers to explore beyond their initial preferences
                                </p>
                                <p className="pb-2">
                                    Building consideration every step of the shopper's journey: POPcoins strategically build consideration throughout the shopper's journey. By showcasing the loyalty currency at key touchpoints, the D2C branding will create a sense of value, incentivising customers to engage and make purchases. This ongoing engagement reinforces brand loyalty and encourages repeat purchases.
                                </p>
                                <p className="pb-2">
                                    Understanding customers better with directed and actionable customer insights: The utilisation of POPcoins provides D2C branding with directed and actionable insights into customer behaviour and preferences. With access to detailed data on customer interactions, brands can make informed decisions and tailor their offerings to better meet customer needs. This deeper understanding of customers strengthens the overall brand-customer relationship and drives personalised experiences.
                                </p>
                                <p className="pb-2">
                                    Understanding customers better with automated customer journeys: The integration of POPcoins with customer relationship management (CRM) systems allows brands to automate customer journeys based on specific triggers and behaviours. This streamlines customer experience, ensuring timely and relevant interactions. D2C branding can deepen engagement, increase loyalty, and drive repeat business by nurturing customers along their journey.
                                </p>
                                <p className="pb-2">
                                    Driving top-of-the-funnel growth: POPcoins leverage a large customer database, enabling D2C branding to drive top-of-the-funnel growth. By leveraging customer data from across the network, brands can identify and target potential customers who align with their brand values and offerings. This proactive approach to customer acquisition expands the customer base and drives sustainable growth.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    How POPcoins can help increase brand loyalty
                                </h6>
                                <p className="pb-2">
                                    The implementation of a loyalty currency within an e-commerce platform empowers fashion, beauty, food, and home & living brands to effectively attract, retain, engage and leverage customers. By offering rewards in the form of loyalty points or coins, D2C branding can boost customer loyalty, encourage repeat purchases, and unlock cross-selling opportunities. Whether it's fashionistas accumulating points towards their next trendy purchase, beauty enthusiasts exploring new products, food lovers venturing into new flavours, or homeowners finding inspiration for their living spaces, a loyalty currency enhances the overall customer experience. By embracing this innovative approach, D2C branding can establish a strong competitive advantage in the e-commerce landscape and cultivate a loyal customer base that drives sustainable growth.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    Fashion
                                </h6>
                                <p className="pb-2">
                                    For fashion brands, a loyalty currency integrated into an e-commerce platform provides a powerful tool to increase brand awareness and engagement. By rewarding customers with loyalty points or coins for their purchases and other interactions, D2C branding can incentivise repeat purchases and foster a sense of exclusivity. Customers feel valued and are motivated to continue shopping with the brand to accumulate and redeem their loyalty currency. This boosts customer retention and encourages brand advocacy within the fashion community.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    Beauty
                                </h6>
                                <p className="pb-2">
                                    Beauty brands can leverage a loyalty currency to drive repeat purchases and unlock cross-selling opportunities. By offering loyalty points or coins for beauty products, brands can encourage customers to return for future purchases. Additionally, the loyalty currency can be used strategically to introduce customers to new products and build/expand their beauty regimen. For example, customers can earn loyalty currency for purchasing a specific skincare item and then use it to explore other complementary products within the brand's range. This cross-selling approach boosts customer satisfaction and increases the average order value.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    Food and Drinks
                                </h6>
                                <p className="pb-2">
                                    By implementing a loyalty program, food brands can foster brand loyalty and encourage customers to explore a variety of offerings. For instance, customers can earn POPcoins for purchasing food products and subsequently use them to try new flavours, explore different cuisines, or sample seasonal specials. This not only boosts customer retention but also exposes customers to a wider range of products, increasing the likelihood of repeat purchases and customer satisfaction.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    Home and Living
                                </h6>
                                <p className="pb-2">
                                    Home & living brands can greatly benefit from the integration of a loyalty currency within an e-commerce platform. By offering loyalty points or coins for home decor items, furniture, or other household products, brands can promote brand discovery and repeat business. Customers accumulate loyalty currency with each purchase, and this incentivises them to continue exploring and shopping within the brand's product range. Additionally, loyalty currency can be utilised to reward customers for referrals, social media interactions, and product reviews, further enhancing brand engagement and advocacy.
                                </p>
                                <h6 className="pt-4 pb-2 font-bold">
                                    Stationery
                                </h6>
                                <p className="pb-2">
                                    POPcoins provides stationery brands with the opportunity to offer exclusive access to limited editions, pre-orders, and special promotions. Loyalty program members can enjoy priority access to new product launches or early access to sales. This not only makes customers feel valued and appreciated but also creates a sense of anticipation and excitement within the stationery community. The exclusivity of these offers further reinforces brand loyalty and encourages customers to actively participate in the brand's journey.
                                </p>
                                <p className="pb-2">
                                    Additionally, as customers accumulate loyalty points or coins, they are motivated to redeem them for more stationery products. Brands can strategically promote complementary products, such as notebooks with matching pens or coordinated stationery sets, creating cross-selling opportunities and boosting customer satisfaction.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <hr />
            <footer className="bg-white">
                <div style={{ margin: "0 auto" }} className="max-w-[1350px] md:px-4 pt-2 pb-4">
                    <div className="grid px-2 md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
                        <div className="pr-2">
                            <div className="font-bold text-lg pt-3">Our Top Brands</div>
                            <div className="font-medium">
                                {allBrands?.data?.length && allBrands?.data?.map((i: any, index: any) => (
                                    <Fragment key={index}>
                                        <Link href={`/brands/${i?.attributes?.url}`}>
                                            <div className="py-1">
                                                {i?.attributes?.brand_name}
                                            </div>
                                        </Link>
                                    </Fragment>
                                ))}
                            </div>
                            <Link href="/allbrands">
                                <div className="underline underline-offset-2">View All</div>
                            </Link>
                        </div>
                        <div className="pr-2" >
                            <div className="font-bold text-lg pt-3">Useful links</div>
                            <div className="font-medium">
                                <div className="py-1">
                                    <Link href={`https://blog.mypop.in/`}>
                                        Blogs
                                    </Link>
                                </div>
                                {/* <div className="py-1">
                                    <Link href={`/`}>
                                        Coinledger
                                    </Link>
                                </div> */}
                                <div className="py-1">
                                    <Link href={`/partner-with-pop`}>
                                        Partner with POP
                                    </Link>
                                </div>
                                <Dialog>
                                    <DialogTrigger>
                                            <div className="py-1 ">
                                                Schedule a Demo
                                            </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 z-[110]">
                                        <DialogDescription>
                                            <div className="">
                                                <iframe className="mx-auto h-[80vh]" width="100%" height="600px" src={`https://form.jotform.com/231904966805464`}></iframe>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="pr-2">
                            <div className="font-bold text-lg pt-3">Contact Us</div>
                            <Link href={`mailto:hello@popclub.co`}>
                                <div>hello@popclub.co</div>
                            </Link>
                            <div className="font-bold text-lg pt-3">Address</div>
                            <div className="py-1">
                                Urban Vault, HSR Layout 6/A-16, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka - 560102
                            </div>
                        </div>
                        <div className="pl-0">
                            <div className="font-bold text-xl pt-3">Follow Us</div>
                            <div className="flex my-2 items-center">
                                <Link href={`https://www.facebook.com/getpopclub`}>
                                    <div>
                                        <Image
                                            className="mr-2"
                                            src="/facebook.svg"
                                            width={36}
                                            height={36}
                                            alt="facebook logo"
                                        />
                                    </div>
                                </Link>
                                <Link href={`https://www.instagram.com/getpopclub/`}>
                                    <div>
                                        <Image
                                            className="m-2"
                                            src="/instagram.svg"
                                            width={36}
                                            height={36}
                                            alt="instagram logo"
                                        />
                                    </div>
                                </Link>
                                {/* <Link href={``}>
                                    <div>
                                        <Image
                                            className="m-2"
                                            src="/pintrest.svg"
                                            width={36}
                                            height={36}
                                            alt="pinterest logo"
                                        />
                                    </div>
                                </Link> */}
                                <Link href={`https://twitter.com/getpopclub`}>
                                    <Image
                                        className="m-2"
                                        src="/twitter.svg"
                                        width={36}
                                        height={36}
                                        alt="twitter logo"
                                    />
                                </Link>
                                <Link href={`https://www.linkedin.com/company/getpopcoins`}>
                                    <Image
                                        className="m-2"
                                        src="/linkedin.svg"
                                        width={36}
                                        height={36}
                                        alt="linkedin logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bg-[#F8F8F8]">
                <div style={{ margin: "0 auto" }} className="bg-[#F8F8F8] max-w-[1350px] md:px-4">
                    <div className="grid py-4 h-[214px] lg:h-[68px] items-center px-2 md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr]">
                        <div className="text-center sm:text-center md:text-center lg:text-left xl:text-left">Copyright © {new Date().getFullYear()} POPclub Vision Tech Pvt. Ltd.</div>
                        <div className="text-center">
                            <div className="flex items-center justify-center">
                                <div>Let’s Try Out</div>
                                <Link target="_blank" href={`https://apps.apple.com/in/app/popclub-shop-earn-rewards/id6443502397`}>
                                    <Image
                                        className="mx-2"
                                        src="/apple.svg"
                                        width={22}
                                        height={28}
                                        alt="facebook logo"
                                    />
                                </Link>
                                <Link target="_blank" href={`https://play.google.com/store/apps/datasafety?id=com.popclub.android&hl=en_IN&gl=US`}>
                                    <Image
                                        className="mx-2"
                                        src="/playstore.svg"
                                        width={25}
                                        height={28}
                                        alt="facebook logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="text-center sm:text-center md:text-center lg:text-right xl:text-right">
                            <div className="flex items-center justify-center">
                                {/* <div className="px-2">
                                    <Link href={`/sitemap.xml`}>
                                        Sitemap
                                    </Link>
                                </div> */}
                                <div className="px-2">
                                    <Link href={`/privacy-policy`}>
                                        Privacy Policy
                                    </Link>
                                </div>
                                <div className="px-2">
                                    <Link href={`/terms-and-condition`}>
                                        Terms and Conditions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer }