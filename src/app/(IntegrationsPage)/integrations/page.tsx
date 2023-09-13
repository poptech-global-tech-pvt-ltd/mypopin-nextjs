import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function IntegrationPage() {
    return (
        <>
            <section className="py-2 lg:py-24 max-w-6xl mx-auto space-y-14">
                <div className={`${khand.className}  text-center text-6xl py-1 lg:py-0`}></div>
                <div className={`${khand.className}  text-center text-6xl`}>Integrations</div>
                <div className='shadow-md px-1 lg:px-24 py-6 space-y-4 border-[0.5px] rounded-3xl lg:m-0 m-2'>
                    <div className={`text-center ${khand.className} text-5xl text-[#F56651]`}>Featured</div>
                    <div className={`text-center font-normal ${manrope.className}`}>Integrate POPcoins with your Shopify store to unlock loyalty programs, referrals, bonusing, and more.
                        With one loyalty currency, build trust with your customers, drive traffic to your store, and increase conversions.
                    </div>
                    <div className='flex flex-wrap  lg:space-x-8 lg:space-y-4 items-center justify-center'>
                        <img className='max-w-[100px] mx-4' src="/shopify-logo.svg" />
                        <img className='max-w-[100px] mx-4' src="/shopify-plus-logo.svg" />
                    </div>
                </div>

                <div className='shadow-md px-1 lg:px-24 py-6 space-y-4 border-[0.5px] rounded-3xl lg:m-0 m-2'>
                    <div className={`text-center ${khand.className} text-5xl text-[#F56651]`}>CRM</div>
                    <div className={`text-center font-normal ${manrope.className}`}>Leverage email marketing to effectively target existing and potential customers increasing customer lifetime value. Boost TPC and average order value through cross-sell campaigns to win back lost customers by offering them special incentives.
                    </div>
                    <div className='text-center flex flex-wrap lg:space-x-8 lg:space-y-4 items-center justify-center'>
                        <img className='max-w-[100px] mx-4' src="/klaviyo.png" />
                        <img className='max-w-[100px] mx-4' src="/contlo.png" />
                        <img className='max-w-[100px] mx-4' src="/moengage.png" />
                        <img className='max-w-[100px] mx-4' src="/webengage.png" />
                    </div>
                </div>

                <div className='shadow-md px-1 lg:px-24 py-6 space-y-4 border-[0.5px] rounded-3xl lg:m-0 m-2'>
                    <div className={`text-center ${khand.className} text-5xl text-[#F56651]`}>Checkout</div>
                    <div className={`text-center font-normal ${manrope.className}`}>By integrating this solution, brands on Shopify can boost brand loyalty and customer lifetime value. Customers can earn reward coins for their purchases and use them for enticing discounts, which incentivises repeat purchases and fosters stronger customer relationships.
                    </div>
                    <div className='text-center flex flex-wrap lg:space-x-8 lg:space-y-4 items-center justify-center'>
                        <img className='max-w-[100px] mx-4' src="/shiprocket.png" />
                        <img className='max-w-[100px] mx-4' src="/gokwik.png" />
                        <img className='max-w-[100px] mx-4' src="/shopflo.png" />
                        <img className='max-w-[100px] mx-4' src="/razorpay.png" />
                        <img className='max-w-[100px] mx-4' src="/zecpe.png" />
                    </div>
                </div>

            </section>
        </>
    )

}


export default IntegrationPage