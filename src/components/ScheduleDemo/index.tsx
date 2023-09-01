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
                                <Button className="rounded-full bg-white hover:bg-white text-[22px] text-[#F56651] px-14 py-8">Schedule Now</Button>
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
        </>
    )
}

export { ScheduleDemo }