'use client'

import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

const integrationLogos = [
    { url: "/integration-shopify.png" },
    { url: "/integration-appbrew.png" },
    { url: "/integration-gokwik.png" },
    { url: "/integration-klaviyo.png" },
    { url: "/integration-kontlo.png" },
    { url: "/integration-razorpay.png" },
    { url: "/integration-shiprocket.png" },
    { url: "/integration-shopflo.png" },
    { url: "/integration-simpl.png" },
    // { url: "/integration-wigzo.png" },
    
]

function B2BIntegrations() {
    return (
        <div className="px-12 py-4 lg:p-16 integrations-section">
            <div className="max-w-6xl mx-auto">
                <Link href="/integrations">
                    <div className={`${khand.className}  text-5xl lg:text-[70px] text-center py-8 text-white`}>Integrations</div>
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-items-center">
                            {integrationLogos?.map((i, index) => (
                                <div key={index}>
                                    <img className='lg:w-[157px] lg:h-auto w-[80px] h-auto' width="auto" height="157" src={i.url} alt={i.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export { B2BIntegrations }