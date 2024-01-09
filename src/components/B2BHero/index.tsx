'use client'
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '../ui/dialog'
import Head from 'next/head';


const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})
const inter = Inter({
    subsets: ['latin'],
})

function B2BHero() {
    return (
        <>
            <Head>
                <script async src="https://assets.calendly.com/assets/external/widget.js"></script>
            </Head>
            <div>
                <div className="h-[85vh] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] max-w-7xl mx-auto">
                    <section className='mx-auto my-auto px-2'>
                        <div className={`text-6xl lg:text-8xl text-center lg:text-left ${khand.className}`}>
                            <h1>One-Stop Solution<br /> for Retention</h1>
                        </div>
                        <div className={`text-xl ${manrope.className} py-2 text-center lg:text-left`}>Maximise customer engagement by implementing a highly relevant loyalty program. Say 👋 to POPcoins , India’s 1st ecosystem currency focused on d2c brands.</div>
                        <div className='py-2 text-center lg:text-left'>
                            <Dialog>
                                <DialogTrigger>
                                    <div className="py-1 ">
                                        <Button className={`bg-black ${inter.className} rounded-full text-xl font-normal p-7 mx-auto`}>Schedule a Demo</Button>

                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 z-[110]">
                                    <DialogDescription>
                                        <div className="">
                                            <iframe className="mx-auto h-[80vh]" width="100%" height="600px" src={`https://calendly.com/d/49r-kvg-5r2`}></iframe>
                                        </div>
                                    </DialogDescription>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className='flex py-2 justify-center lg:justify-normal'>
                            <Image className='pr-2' width="134" height="39" src="/shopify-logo.svg" alt="shopify logo" />
                            <Image className='pr-2' width="138" height="35" src="/shopify-plus-logo.svg" alt="shopify plus logo" />
                        </div>
                    </section>
                    <section className='mx-auto my-auto'>
                        <div>
                            <video style={{ clipPath: "inset(1px 1px)" }} autoPlay muted loop playsInline>
                                <source src="https://ik.imagekit.io/wftc9lab0/B2bHero.mp4?updatedAt=1689592126092" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export { B2BHero }