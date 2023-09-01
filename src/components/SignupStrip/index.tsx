import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog"
import { useState } from "react";

function SignupStrip() {
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



    return (
        <>
            <section>
                <div className="mt-10">





                    <Dialog>
                        <DialogTrigger>
                            <Image
                                src="/signup-strip.svg"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto object-cover cursor-pointer"
                                alt="signup"
                                style={{ objectFit: "cover" }}
                                onClick={handleLogin}
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






                </div>
            </section>
        </>
    )
}

export { SignupStrip }