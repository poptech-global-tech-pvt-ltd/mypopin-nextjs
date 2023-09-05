"use client"
import { useState, useEffect } from "react";
import Image from "next/image"
import { Squash as Hamburger } from 'hamburger-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { Button } from "../ui/button";
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog";
import { useRouter } from 'next/navigation'
import ScrollLink from "@/utils/ScrollLink";


function MobileHeader() {
    const [isOpen, setOpen] = useState(false)
    const [brandData, setBrandData] = useState<any>({});
    const pathName = usePathname();
    const router = useRouter()


    useEffect(() => {
        const getBrandNames = async () => {
            try {
                const response = await fetch('https://mypop-dashboard.popclub.co.in/api/brand-names?populate=*');
                const data = await response.json();

                // Transform the data to group brands by category
                const transformedData = data.data.reduce((acc: any, item: any) => {
                    const category = item.attributes.brand_categories.data[0].attributes.categoryname;
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push(item.attributes.brand_name);
                    return acc;
                }, {});

                setBrandData(transformedData);
            } catch (error) {
                console.error('Error fetching brand names:', error);
            }
        };
        getBrandNames();
    }, []);

    const isBrandDataAvailable = Object.keys(brandData).length !== 0

    const staticBrandData = {
        "Beauty": [
            "Body Tales",
            "BraavoKing",
            "Femisafe",
            "Khadi Essentials",
            "Mai Sknn",
            "Makeup Eraser",
            "Man Theory",
            "Paul Penders",
            "Tatha",
            "The Skin Story"
        ],
        "Fashion": [
            "Bacca Bucci"
        ],
        "Food & Drinks": [
            "Anveshan"
        ],
        "Health": [
            "Zoh Probiotics"
        ],
        "Home & Living": [
            "Dusaan",
            "Klotthe",
            "Saga Jaipur"
        ],
        "Stationary": [
            "Doodle Collection"
        ]
    }

    const [cookieKey, setCookieKey] = useState("");

    const handleLogin = () => {
        //get cookie name
        function getCookie(name: string) {
            const cookieValue: any = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return cookieValue ? decodeURIComponent(cookieValue.pop()) : null;
        }
        //set cookie name
        function setCookie(name: any, value: any, daysToExpire: any) {
            const expires = new Date();
            expires.setDate(expires.getDate() + daysToExpire);

            const cookieValue = encodeURIComponent(value) + (daysToExpire ? `; expires=${expires.toUTCString()}` : '');

            document.cookie = `${name}=${cookieValue}; path=/`;
        }
        // generate a 32 digit random number
        function generateRandomNumberString(length: any) {
            const characters = '0123456789';
            let randomString = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomString += characters[randomIndex];
            }

            return randomString;
        }
        const hasCookieAlready = getCookie('cookieKey')

        if (hasCookieAlready) {
            //from useState
            setCookieKey(hasCookieAlready)
        }

        else {
            let randomNo = generateRandomNumberString(32)
            //from useState
            setCookieKey(randomNo)

            // adding cookie to the browser
            setCookie('cookieKey', randomNo, 7);
        }
    }

    useEffect(() => {
        if (cookieKey) {
            if (cookieKey) {
                try {


                    fetch(` https://coins.mypopcoins.com/user-coins?brand=mypopin&key=${cookieKey}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic cGwtcHJvZDpwbEAyMHR3ZW50eXR3bw=='
                        }
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("data---->", data);
                        });
                } catch (err) {
                    console.log("Oops! An error has occurred");
                }
            }
        }
    }, [cookieKey])


    const handleCouponsClick = () => {
        router.push("/coupons")
        setOpen(false)
    }

    const handleBlogClick = () => {
        router.push("https://blog.mypop.in/")
        setOpen(false)
    }

    const handleHelpSupportClick = () => {
        router.push("/")
        setOpen(false)
    }

    const handleCustomerBtnCLick = () => {
        router.push("/")
        setOpen(false)
    }

    const handleBrandBtnClick = () => {
        router.push("/partner-with-pop")
        setOpen(false)
    }

    const handleBrandClick = (brandName: any) => {
        router.push("/brands/" + brandName.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, ""))
        setOpen(false)
    }

    const handleMainTopLogoMobileClick = () => {
        router.push("/")
        setOpen(false)
    }

    return (
        <>
            <main>
                <nav>
                    {/* // closed/header */}
                    <div className="h-[10vh] flex items-center">
                        <div className="flex px-4 justify-between w-full">
                            {/* <Link href="/"> */}
                            <div onClick={handleMainTopLogoMobileClick}>
                                <Image src="/poplogo.svg" alt="logo" width={69} height={44} />
                            </div>
                            {/* </Link> */}
                            <div className="flex items-center justify-center">
                                {/* <div>100</div> */}
                                <Dialog>
                                    <DialogTrigger>
                                        <Image
                                            src="/user-avatar.svg"
                                            width={25}
                                            height={25}
                                            alt="avatar"
                                            className="ml-3"
                                            onClick={() => handleLogin()}
                                        />
                                    </DialogTrigger>
                                    <DialogContent className="p-4 lg:p-0 rounded-lg lg:rounded-none lg:m-2  w-[90vw] lg:[100px] z-[110]">
                                        <DialogDescription>
                                            <div className="">
                                                {/* // disable z-index from header and it works */}
                                                <iframe className="mx-auto h-[80vh] rounded-lg" width="100%" height="600px" src={`https://coins.mypopcoins.com/?key=${cookieKey}`}></iframe>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                            </div>
                        </div>
                    </div>
                    <Separator />
                    {/* // dropdown menu */}
                    <div className={`${!isOpen ? `hidden` : `block h-[90vh]`}`}>
                        <div className="p-4">
                            {/* // POP Partners */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="bg-[#F5F5F5] p-3">POP Partners</AccordionTrigger>
                                    <AccordionContent className="p-[0px] pb-0">
                                        <div className="bg-[#fff4f3] p-3 rounded-b-lg">
                                            <nav className="h-[50vh] overflow-scroll">
                                                {/* // if data is in STRAPI */}
                                                {isBrandDataAvailable && Object.keys(brandData).map((category: string) => (
                                                    <div key={category} className="pr-2">
                                                        <div className="font-bold text-lg pt-3 text-[14px]">{category}</div>
                                                        <div className="font-medium">
                                                            {brandData[category].map((brand: string, index: number) => (
                                                                <div key={index}>
                                                                    {/* <Link href={`/brands/${brand.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, "")}`}> */}
                                                                    <div onClick={() => handleBrandClick(brand)} key={index} className={`py-1 text-[14px]`}>
                                                                        {brand}
                                                                    </div>
                                                                    {/* </Link> */}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                {/* // if data is not in strapi */}
                                                {!isBrandDataAvailable && Object.keys(staticBrandData).map((category: string) => (
                                                    <div key={category} className="pr-2">
                                                        <div className="font-bold text-lg pt-3">{category}</div>
                                                        <div className="font-medium">
                                                            {/* @ts-ignore */}
                                                            {staticBrandData[category].map((brand: string, index: number) => (
                                                                <div key={index}>
                                                                    {/* <Link href={`/brands/${brand.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, "")}`}> */}
                                                                    <div onClick={() => handleBrandClick(brand)} key={index} className="py-1">
                                                                        {brand}
                                                                    </div>
                                                                    {/* </Link> */}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </nav>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <div className="py-1" />
                            {/* //Our POP World */}
                            {/* <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="bg-[#F5F5F5] p-3">Our POPWorld</AccordionTrigger>
                                    <AccordionContent className="p-[0px] pb-0">
                                        <div className="bg-[#fff4f3] p-3 rounded-b-lg">
                                            POPShop
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion> */}
                            <ScrollLink href="#popshop">
                                <div className="bg-[#F5F5F5] p-3">
                                    <div className="text-black font-medium">POPShop</div>
                                </div>
                            </ScrollLink>
                            <div className="py-1" />
                            {/* // Blogs */}
                            {/* <Link href="/coupons"> */}
                            <div onClick={handleCouponsClick} className="bg-[#F5F5F5] p-3">
                                <div className="text-black font-medium">Coupons</div>
                            </div>
                            {/* </Link> */}
                            <div className="py-1" />
                            {/* // Blogs */}
                            {/* <Link href="https://blog.mypop.in/"> */}
                            <div onClick={handleBlogClick} className="bg-[#F5F5F5] p-3">
                                <div className="text-black font-medium">Blogs</div>
                            </div>
                            {/* </Link> */}
                            <div className="py-1" />
                            {/* // Help & Support */}
                            {/* <Link href="#"> */}
                            <ScrollLink href="#footer-contact-us">
                                <div className="bg-[#F5F5F5] p-3">
                                    <div className="text-black font-medium">Contact Us</div>
                                </div>
                            </ScrollLink>
                            {/* </Link> */}
                            <div className="py-1" />
                            <div className="flex flex-col items-center">
                                {/* <Link href="/"> */}
                                <Button onClick={handleCustomerBtnCLick} className={`my-2 mt-10 w-[200px] ${pathName === "/" ? `bg-[#F56651] text-white hover:bg-[#F56651] hover:text-white` : `bg-white text-black`}`} variant="outline">I am a Customer</Button>
                                {/* </Link> */}
                                <Link href="/partner-with-pop">
                                    <Button onClick={handleBrandBtnClick} className={`my-2 w-[200px] ${pathName === "/partner-with-pop" ? `bg-[#F56651] text-white  hover:bg-[#F56651] hover:text-white` : `bg-[white] text-black`}`} variant="outline">I am a Brand</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </main>
        </>
    )
}

export { MobileHeader }