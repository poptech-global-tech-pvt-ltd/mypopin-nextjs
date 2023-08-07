import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { Button } from '../ui/button'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

const integrationLogos = [
    { url: "/integration-appbrew.svg" },
    { url: "/integration-gokwik.svg" },
    { url: "/integration-klaviyo.svg" },
    { url: "/integration-kontlo.svg" },
    { url: "/integration-razorpay.svg" },
    { url: "/integration-shiprocket.svg" },
    { url: "/integration-shopflo.svg" },
    { url: "/integration-shopify.svg" },
    { url: "/integration-simpl.svg" },
    { url: "/integration-wigzo.svg" },
    // { url: "/integration-zecpe.svg" },
]

function B2BIntegrations() {
    return (
        <div className="bg-black hover:bg-[#F56651]">
            <div className="max-w-6xl mx-auto">
                <div className={`${khand.className} text-7xl text-center py-8 text-white`}>Integrations</div>
                {/* <div className='flex'>
                    {integrationLogos?.map((i, index) => (
                        <div key={index}>
                            <Image width="157" height="46" src={i.url} alt={i.url} />
                        </div>
                    ))}
                </div> */}

                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-items-center">
                        {integrationLogos?.map((i, index) => (
                            <div key={index}>
                                <Image width="157" height="46" src={i.url} alt={i.url} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center py-8'><Button className={`rounded-full bg-black]`}>View All</Button></div>
            </div>
        </div>
    )
}

export { B2BIntegrations }