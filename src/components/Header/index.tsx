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

function Header() {
    const pathName = usePathname()
    return (
        <main className="fixed w-full z-[100]">
            <div className="bg-white h-24 flex items-center justify-center">
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
                                <div>100</div>
                                {/* // popcoins number */}
                                <Image
                                    src="/popcoin.svg"
                                    width={25}
                                    height={25}
                                    alt="Popcoin"
                                    className="ml-3"
                                />
                            </div>
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        src="/user-avatar.svg"
                                        width={25}
                                        height={25}
                                        alt="avatar"
                                        className="ml-3"
                                        onClick={() => console.log("here")}
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 z-[110]">
                                    <DialogDescription>
                                        <div className="">
                                            {/* // disable z-index from header and it works */}
                                            <iframe className="mx-auto h-[80vh]" width="100%" height="600px" src="https://coins.mypopcoins.com/"></iframe>
                                        </div>
                                    </DialogDescription>
                                </DialogContent>
                            </Dialog>
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
            <hr />
        </main>
    )
}

export { Header }