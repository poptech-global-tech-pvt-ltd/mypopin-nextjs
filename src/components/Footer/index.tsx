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
import { useRouter, usePathname } from 'next/navigation'
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { B2BFooterSEO } from "../B2BFooterSEO"
import { B2CFooterSEO } from "../B2CFooterSEO"


function Footer() {
    // remove this and choose between swr OR tanstack-query
    const [allBrands, setAllBrands] = useState<any>([])
    const pathname = usePathname()

    useEffect(() => {
        const getBrandNames = async () => {
            fetch('https://mypop-dashboard.popclub.co.in/api/footer-top-brands?populate=*').then((res) => res.json()).then((data) => setAllBrands(data?.data[0].attributes.brand_names))
        }
        getBrandNames()
    }, [])

    console.log({pathname})

    return (
        <>
            <div className="max-w-[1350px] md:px-4 pt-2 lg:pt-0 pb-4 lg:pb-0 mx-auto">
                <section style={pathname.split("/")[1] === "brands" ? { display: "none" } : { display: "block" }}>
                    {pathname === "/" ? <B2CFooterSEO /> : <B2BFooterSEO />}
                </section>
            </div>
            <hr />
            <section style={pathname.split("/")[1] === "brands" ? { backgroundColor: "#F46651", color: "white" } : { backgroundColor: "white", color: "black" }}>
                <footer style={pathname.split("/")[1] === "brands" ? { backgroundColor: "#F46651", color: "white" } : { backgroundColor: "white", color: "black" }} className="max-w-5xl mx-auto">
                    <div style={{ margin: "0 auto" }} className="max-w-[1350px] md:px-0 pt-10 lg:pt-4 pb-4">
                        <div className="grid px-2 lg:px-0 md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
                            <div className="pr-2">
                                {pathname === "/partner-with-pop" && (
                                    <img className="max-w-[88px] block md:hidden lg:hidden" src="/pc-footer-logo.png" />
                                )}
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
                                <div className="flex my-2 items-center space-x-2">
                                    <Link href={`https://www.facebook.com/getpopclub`}>
                                        <div>
                                            <div style={pathname.split("/")[1] === "brands" ? { color: "white", border: "1.5px solid white" } : { color: "black", border: "1.5px solid black" }} className="rounded-full p-2">
                                                <Facebook style={pathname.split("/")[1] === "brands" ? { color: "white" } : { color: "black" }} className="w-[20px] h-[20px]" />
                                            </div>
                                        </div>

                                    </Link>
                                    <Link href={`https://www.instagram.com/shoponpop/`}>
                                        <div>
                                            <div style={pathname.split("/")[1] === "brands" ? { color: "white", border: "1.5px solid white" } : { color: "black", border: "1.5px solid black" }} className="rounded-full p-2">
                                                <Instagram style={pathname.split("/")[1] === "brands" ? { color: "white" } : { color: "black" }} className="w-[20px] h-[20px]" />
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`https://twitter.com/getpopclub`}>
                                        <div style={pathname.split("/")[1] === "brands" ? { color: "white", border: "1.5px solid white" } : { color: "black", border: "1.5px solid black" }} className="rounded-full p-2">
                                            <Twitter style={pathname.split("/")[1] === "brands" ? { color: "white" } : { color: "black" }} className="w-[20px] h-[20px]" />
                                        </div>
                                    </Link>
                                    <Link href={`https://www.linkedin.com/company/getpopcoins`}>
                                        <div style={pathname.split("/")[1] === "brands" ? { color: "white", border: "1.5px solid white" } : { color: "black", border: "1.5px solid black" }} className="rounded-full p-2">
                                            <Linkedin style={pathname.split("/")[1] === "brands" ? { color: "white" } : { color: "black" }} className="w-[20px] h-[20px]" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
            <footer id="footer-contact-us" style={pathname.split("/")[1] === "brands" ? { backgroundColor: "#F46651", color: "white" } : { backgroundColor: "#F8F8F8", color: "black" }}>
                <div style={pathname.split("/")[1] === "brands" ? { backgroundColor: "#F46651", color: "white", margin: "0 auto" } : { backgroundColor: "white", color: "black", margin: "0 auto" }} className="max-w-[1350px] md:px-4">
                    <div className="grid py-4 h-[214px] lg:h-[68px] items-center px-2 md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr]">
                        <div className="text-center sm:text-center md:text-center lg:text-left xl:text-left">Copyright © {new Date().getFullYear()} POPclub Vision Tech Pvt. Ltd.</div>
                        <div className="text-center">
                            <div className="flex items-center justify-center">
                                <div className="font-bold">Let’s Try Out</div>
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