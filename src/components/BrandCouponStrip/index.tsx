import Link from "next/link"
import { Button } from "../ui/button"
import { Khand, Manrope } from 'next/font/google'


interface IProps {
    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    brandName: string,
    url: string
}

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})


function BrandCouponStrip({ primaryColor, secondaryColor, textColor, brandName, url }: IProps) {
    return (
        <>
            <section className="my-10" style={{ backgroundColor: primaryColor, color: textColor }}>
                <div className="flex py-12 items-center justify-center">
                    <div className={`text-5xl ${khand.className} w-1/3`}>Unlock Exciting Coupons For {brandName}</div>
                    <div>
                        <Link href={`/coupons/${url}`}>
                            <Button className={`${manrope.className} rounded-full bg-white text-[#666] font-bold text-xl hover:bg-white hover:text-[#666] p-6`}>View {brandName} Coupons</Button>
                        </Link>    
                    </div>
                </div>
            </section>
        </>
    )
}

export { BrandCouponStrip }