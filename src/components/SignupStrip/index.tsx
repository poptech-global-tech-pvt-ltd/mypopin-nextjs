import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog"
import { useEffect, useState } from "react";
import { UserCircle2 } from "lucide-react";

function SignupStrip({ isLoggedIn, setLoggedIn }: any) {
    const [cookieKey, setCookieKey] = useState<any>("");
    const [coinNumber, setCoinNumber] = useState<any>("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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

    return (
        <>
            {/* // MOBILE */}
            <div className="block lg:hidden">
                {!(coinNumber?.data?.coins > 0) && (
                    <section>
                        <Dialog>
                            <DialogTrigger>
                                <Image
                                    src="/signup-strip-mobile.png"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-[100vw] h-auto object-cover cursor-pointer"
                                    alt="signup"
                                    onClick={handleLogin}
                                />
                            </DialogTrigger>
                            <DialogContent className="block lg:hidden p-4 lg:p-0 rounded-lg lg:rounded-none lg:m-2  w-[90vw] lg:[100px] z-[110]">
                                <DialogDescription>
                                    <div className="">
                                        {/* // disable z-index from header and it works */}
                                        <iframe className="mx-auto h-[80vh] rounded-lg" width="100%" height="600px" src={`https://coins.mypopcoins.com/?brand=mypopin&key=${cookieKey}`}></iframe>
                                    </div>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </section>
                )}
            </div>

            {/* // DESKTOP */}
            <div className="hidden lg:block">
                {!(coinNumber?.data?.coins > 0) && (
                    <section>
                        <div className="btn-container-desktop-modal">
                            <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
                                <DialogTrigger className="flex items-center justify-center">
                                    <Image
                                        src="/signup-strip.svg"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-auto object-cover cursor-pointer min-h-[70px]"
                                        alt="signup"
                                        onClick={handleLogin}
                                    />
                                </DialogTrigger>
                                <DialogContent className="hidden lg:block lg:w-[340px!important] lg:p-2 lg:rounded-3xl h-[90vh] z-[110]">
                                    <DialogDescription>
                                        <div className="">
                                            <iframe className="mx-auto h-[80vh] lg:rounded-xl" width="100%" height="600px" src={`https://coins.mypopcoins.com/?brand=mypopin&key=${cookieKey}`}></iframe>
                                        </div>
                                    </DialogDescription>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </section>
                )}
            </div>

        </>
    )
}

export { SignupStrip }