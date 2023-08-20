"use client"
import Image from "next/image"
import { NavigationMenuDemo as NavigationMenu } from '@/components/NavigationMenu'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { User2 } from 'lucide-react';

function Header() {
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

    const pathName = usePathname()

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

    return (
        // if header animation has been removed, add "fixed" class to fix it
        <main className="w-full fixed z-[100]">
            <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur h-[10vh] flex items-center justify-center ">
                <div className="max-w-[1350px] w-full">
                    <div className="flex justify-between">
                        {/* //logo section */}
                        <div className="flex items-center">
                            <div>
                                <Link href="/">
                                    <Image
                                        src="/poplogo.svg"
                                        width={70}
                                        height={70}
                                        alt="Popclub logo"
                                    />
                                </Link>
                            </div>
                            {/* // remaining section */}
                            <div className="px-6">
                                <NavigationMenu />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {/* <div>100</div> */}
                                {/* // popcoins number */}
                                {/* <Image
                                    src="/popcoin.svg"
                                    width={25}
                                    height={25}
                                    alt="Popcoin"
                                    className="ml-3"
                                /> */}
                            </div>
                            <div className="btn-container-desktop-modal">
                                <Dialog>
                                    <DialogTrigger>
                                        {/* <Image
                                            src="/user-avatar.svg"
                                            width={25}
                                            height={25}
                                            alt="avatar"
                                            className="ml-3"
                                            onClick={() => handleLogin()}
                                        /> */}
                                        <User2 className="mt-[4px]" onClick={() => handleLogin()} />
                                    </DialogTrigger>
                                    <DialogContent className="lg:w-[340px!important] lg:p-2 lg:rounded-3xl h-[90vh] z-[110]">
                                        <DialogDescription>
                                            <div className="">
                                                {/* // disable z-index from header and it works */}
                                                <iframe className="mx-auto h-[80vh] lg:rounded-xl" width="100%" height="600px" src={`https://coins.mypopcoins.com/?key=${cookieKey}`}></iframe>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <Link href="/">
                                <Button className={`ml-3 ${pathName === "/" ? `bg-[#F56651] text-white hover:bg-[#F56651] hover:text-white` : `bg-white text-black`}`} variant="outline">I am a Customer</Button>
                            </Link>
                            <Link href="/partner-with-pop">
                                <Button className={`ml-3 ${pathName === "/partner-with-pop" ? `bg-[#F56651] text-white  hover:bg-[#F56651] hover:text-white` : `bg-[white] text-black`}`} variant="outline">I am a Brand</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </main>
    )
}

export { Header }