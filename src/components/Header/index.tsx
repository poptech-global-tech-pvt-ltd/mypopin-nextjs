'use client'
import Image from "next/image"
import { NavigationMenuDemo as NavigationMenu } from '@/components/NavigationMenu'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { UserCircle2 } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function Header() {
    const [cookieKey, setCookieKey] = useState<any>("");
    const [coinNumber, setCoinNumber] = useState<any>("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const pathName = usePathname()


    const handleLogin = () => {
        const hasCookieAlready = setSessionCookieOnce('sessionID')
        console.log({ hasCookieAlready })
        setCookieKey(hasCookieAlready)
        setIsDialogOpen(true)
    }

    function fetchUserCoins() {
        try {
            var sessionCookie = getSessionCookie('sessionID');
            console.log(sessionCookie)
            fetch(`https://presentation.popclub.co.in/api/get-available-coins?key=${sessionCookie}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cGwtcHJvZDpwbEAyMHR3ZW50eXR3bw==',
                }
            }).then((res) => res.json()).then(data => setCoinNumber(data))
        } catch (err) {
            console.log("Oops! An error has occurred");
        }
    }

    function setSessionCookieOnce(cookieName: any) {
        var sessionCookie = getSessionCookie(cookieName);
        console.log('getSessionCookie')
        console.log(sessionCookie)

        if (sessionCookie.length == 0) {
            console.log('setSessionCookie')
            setSessionCookie(cookieName)
        }
        else {
            console.log('fetchUserCoins')
            setCookieKey(sessionCookie)
            fetchUserCoins();
        }
    }

    function handleOpenChange(newOpenState: boolean) {
        if (newOpenState) {
            setIsDialogOpen(true)
        } else {
            setIsDialogOpen(false)
            featchCoin()
        }
    }

    function setSessionCookie(cookieName: any) {
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        var length = 32;
        var randomString = ''

        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length)
            randomString += characters.charAt(randomIndex)
        }
        var cookieString = cookieName + '=' + randomString + ';'
        document.cookie = cookieString
        setCookieKey(randomString)
    }

    function getSessionCookie(name: string) {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();

            if (cookie.indexOf(name + '=') === 0) {
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return '';
    }

    function featchCoin() {
        var sessionCookie = getSessionCookie('sessionID');
        console.log(sessionCookie)

        if (sessionCookie) {
            setCookieKey(sessionCookie)
            try {
                fetch(`https://presentation.popclub.co.in/api/get-available-coins?key=${sessionCookie}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic cGwtcHJvZDpwbEAyMHR3ZW50eXR3bw==',
                    }
                }).then((res) => res.json()).then(data => setCoinNumber(data))
            } catch (err) {
                console.log("Oops! An error has occurred");
            }
        }
    }
    // if a cookie already exists
    useEffect(() => {
        console.log('load')
        setSessionCookieOnce('sessionID')
    }, [])

    useEffect(() => {
        featchCoin()
    }, [cookieKey])

    console.log({ pathName })
    return (
        // if header animation has been removed, add "fixed" class to fix it
        <main className="w-full fixed z-[100]">
            <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur h-[10vh] max-h-[80px] flex items-center justify-center ">
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

                            {/* // ONLY render if url is not "/partner-with-pop" or "/features" */}
                            {pathName !== "/partner-with-pop" && (
                                <>
                                    {pathName !== '/features' && (
                                        <>
                                            {pathName !== '/integrations' && (
                                                <div className="px-6">
                                                    <NavigationMenu />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}

                            {(pathName === "/partner-with-pop" || pathName === "/features" || pathName === "/integrations") && (
                                <div className="px-6 flex space-x-3 font-semibold">
                                    <Link href="/features">
                                        <div>Features</div>
                                    </Link>
                                    <Link href="/integrations">
                                        <div>Integrations</div>
                                    </Link>
                                </div>
                            )}

                        </div>
                        <div className="flex items-center space-x-3 justify-center">
                            {pathName !== "/partner-with-pop" && (
                                <div>
                                    {coinNumber?.data?.coins > 0 && (
                                        <div className="flex items-center justify-center space-x-2 py-[5px] px-3 rounded-full bg-slate-200 shadow-sm">
                                            <div>
                                                {pathName !== "/partner-with-pop" && (
                                                    <Image
                                                        src="/popcoin.svg"
                                                        width={25}
                                                        height={25}
                                                        alt="Popcoin"
                                                    />
                                                )}
                                            </div>
                                            {pathName !== "/partner-with-pop" && (
                                                <div>{coinNumber?.data?.coins}</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {pathName !== "/partner-with-pop" && (
                                <div className="btn-container-desktop-modal">
                                    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
                                        <DialogTrigger className="flex items-center justify-center">
                                            <UserCircle2 size={33} strokeWidth={1.2} onClick={() => handleLogin()} />
                                        </DialogTrigger>
                                        <DialogContent className="lg:w-[340px!important] lg:p-2 lg:rounded-3xl h-[90vh] z-[110]">
                                            <DialogDescription>
                                                <div className="">
                                                    {/* // disable z-index from header and it works */}
                                                    <iframe className="mx-auto h-[80vh] lg:rounded-xl" width="100%" height="600px" src={`https://coins.mypopcoins.com/?brand=mypopin&key=${cookieKey}`}></iframe>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            )}
                            <Tabs value={pathName} className="navbar-container" defaultValue="customer">
                                <TabsList className="tabslist h-[45px] p-2">
                                    <TabsTrigger data-state={(pathName.split('/')[1] === "brands") || (pathName === "/") || (pathName.split('/')[1] === "coupons") ? "active" : "inactive" } className="tabstrigger h-[35px]" value="/"><Link href="/">I am a Customer</Link></TabsTrigger>
                                    <TabsTrigger data-state={(pathName === '/features') || (pathName === "/partner-with-pop") || (pathName === "/integrations") || (pathName === "/features") ? "active" : "inactive"} className="tabstrigger h-[35px]" value="/partner-with-pop"> <Link href="/partner-with-pop">I am a Brand</Link></TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </main>
    )
}

export { Header }