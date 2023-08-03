import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <>
            <footer className="bg-white">
                <div style={{ margin: "0 auto" }} className="max-w-[1350px] md:px-4 pt-2 pb-4">
                    <div className="grid px-2 md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
                        <div className="pr-2">
                            <div className="font-bold text-lg pt-3">Our Top Brands</div>
                            <div className="font-medium">
                                <div className="py-1">
                                    Saaki
                                </div>
                                <div className="py-1">
                                    Teetrunk
                                </div>
                                <div className="py-1">
                                    Anveshan
                                </div>
                            </div>
                            <Link href="/allbrands">
                                <div className="underline underline-offset-2">View All</div>
                            </Link>
                        </div>
                        <div className="pr-2" >
                            <div className="font-bold text-lg pt-3">Useful links</div>
                            <div className="font-medium">
                                <div className="py-1">
                                    Blogs
                                </div>
                                <div className="py-1">
                                    Coinledger
                                </div>
                                <div className="py-1">
                                    Partner with POP
                                </div>
                                <div className="py-1">
                                    Schedule a Demo
                                </div>
                            </div>
                        </div>
                        <div className="pr-2">
                            <div className="font-bold text-lg pt-3">Contact Us</div>
                            <div>hello@popclub.co</div>
                            <div className="font-bold text-lg pt-3">Address</div>
                            <div className="py-1">
                                Urban Vault, HSR Layout 6/A-16, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka - 560102
                            </div>
                        </div>
                        <div className="pl-0">
                            <div className="font-bold text-xl pt-3">Follow Us</div>
                            <div className="flex my-2">
                                <Image
                                    className="mr-2"
                                    src="/facebook.svg"
                                    width={36}
                                    height={36}
                                    alt="facebook logo"
                                />
                                <Image
                                    className="m-2"
                                    src="/instagram.svg"
                                    width={36}
                                    height={36}
                                    alt="instagram logo"
                                />
                                <Image
                                    className="m-2"
                                    src="/pintrest.svg"
                                    width={36}
                                    height={36}
                                    alt="pinterest logo"
                                />
                                <Image
                                    className="m-2"
                                    src="/twitter.svg"
                                    width={36}
                                    height={36}
                                    alt="twitter logo"
                                />
                                <Image
                                    className="m-2"
                                    src="/linkedin.svg"
                                    width={36}
                                    height={36}
                                    alt="linkedin logo"
                                />
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
                                <Image
                                    className="mx-2"
                                    src="/apple.svg"
                                    width={22}
                                    height={28}
                                    alt="facebook logo"
                                />
                                <Image
                                    className="mx-2"
                                    src="/playstore.svg"
                                    width={25}
                                    height={28}
                                    alt="facebook logo"
                                />
                            </div>
                        </div>
                        <div className="text-center sm:text-center md:text-center lg:text-right xl:text-right">
                            Sitemap | Privacy policy | Terms and Conditions
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer }