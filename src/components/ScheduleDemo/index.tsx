'use client'

import { Button } from "../ui/button"
import Image from "next/image"
import { Khand, Manrope } from 'next/font/google'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const khand = Khand({
    weight: ['600', '700'],
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '600', '700']
})


function ScheduleDemo() {
    return (
        <>
            {/* <div className="grid grid-cols-3 max-w-[100vw] bg-black justify-items-center items-center">
                <img src="/demo/left.png" />
                <img src="/demo/center.png" />
                <img src="/demo/right.png" />
            </div> */}

            <section className="animated-section-content">
                    <div className="body-content text-center">
                        <h2>Schedule Your Demo Today!</h2>
                        <p>Watch our POPcoins demo to turbocharge your e-commerce conversions and build a scalable retention strategy.</p>
                        {/* <a href="#" target="_blank" className="btn-style scheduleButton">Schedule Now</a> */}
                        <Dialog>
                            <DialogTrigger>
                                <Button className="btn-style scheduleButton">Schedule Now</Button>
                            </DialogTrigger>
                            <DialogContent className="p-0 z-[110]">
                                <DialogDescription>
                                    <div className="">
                                        <iframe className="mx-auto h-[80vh]" width="100%" height="600px" src={`https://form.jotform.com/231904966805464`}></iframe>
                                    </div>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                        <div className="logo-group d-flex align-items-center justify-content-center">
                            <img src="/shopify-logo-animate.png" alt="" />
                            <img src="/shopifyplus-logo-animate.png" alt="" />
                        </div>
                    </div>
                </section>

            {/* <section className="bg-black py-8">
                <div className="max-w-6xl mx-auto">
                    <div className={`${khand.className} text-[65px] font-[700] text-white text-center`}>Schedule Your Demo Today!</div>
                    <div className={`${manrope.className} text-[22px] font-[600] text-white text-center`}>Watch our POPcoins demo to turbocharge your e-commerce conversions and build a scalable retention strategy.</div>
                    <div className="flex items-center justify-center py-8">
                        <Dialog>
                            <DialogTrigger>
                                <Button className={`text-[#F56651] rounded-full bg-white text-[22px] ${manrope.className} font-bold p-10 hover:bg-white hover:text-blackw`}>Schedule Now</Button>
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
                    <div className='flex py-2 items-center justify-center'>
                        <img className='pr-2 max-w-[170px]' src="/shopify-logo-white.png" alt="shopify logo" />
                        <img className='pr-2 max-w-[170px]' src="/shopify-plus-logo-white.png" alt="shopify plus logo" />
                    </div>
                </div>
            </section> */}
        </>
    )
}

export { ScheduleDemo }