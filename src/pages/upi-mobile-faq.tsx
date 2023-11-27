'use client'
import { Manrope } from 'next/font/google'
import { useLayoutEffect, useState } from 'react'

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

function FAQ() {
    const [isVisible, setVisible] = useState("none");

    useLayoutEffect(() => {
        document.getElementsByTagName("body")[0].style.margin = "0px"
        document.getElementsByTagName("html")[0].style.backgroundColor = "black"
        setVisible("block")
    }, [])

    return (
        <>
            <section style={{ display: isVisible }}>
                <section style={{ backgroundColor: "black", color: "#e5e5e5", padding: "20px 10px" }} className="py-24 max-w-6xl mx-auto">
                    <div>
                        <h3 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`} >Frequently Asked Questions:</h3>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are POPcoins?</h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins is a currency that allows you to access exclusive offers and discounts
                            when you shop on POPcoins partner websites. You can earn and redeem POPcoins on partner brands that are part of the POPcoins program.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is there a membership fee to become a member of POPcoins ecosystem?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>No, there is no membership fee to participate in the POPcoins program. All you need to do is signup on any partner website or mypop.in and join the program.</p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are POPcoins partner brands?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins partner brands are the brands which use a common loyalty currency called POPcoins on their platform. The list of brands that are active on POPcoins ecosystem can be found on https://mypop.in.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>How many POPcoins do I get for shopping on POPcoins partner brands?</h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>You will receive 5 POPcoins for every Rs. 100 spent on the partner brands.
                            For instance, if you purchase a product for Rs. 1000, you will earn 50 POPcoins, which will be credited to your account after the return period has ended. Once the POPcoins are credited to your account, you can redeem them immediately.  <br />However, please note that you will not earn any POPcoins for reward purchases.
                        </p>

                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What is the validity period for POPcoins?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins are valid for 6 months from the date they are credited to your account. </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>What are the ways to use POPcoins?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>Here are some ways you can use the POPcoins you earn on POPcoins partner brands:
                        </p>
                        <ul>
                            <li>Redeem them for exclusive offers and discounts on partner brand products.
                            </li>
                            <li>Use coins to access offers on lifestyle areas like movies, events, OTT subscriptions, and travel to over 50 destinations through Rewards.
                            </li>
                        </ul>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is it possible to cancel rewards redeemed with POPcoins?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>No, once you have redeemed rewards using POPcoins, it is not possible to reverse the transaction.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Is it possible to use POPcoins as the sole payment method for shopping on partner brands?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>No, it is not possible to use POPcoins for the entire purchase amount. POPcoins can only be used to get a discount on a certain value of the cart, and the discount percentage is available on respective websites.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>When will POPcoins be credited to my account after purchase?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>POPcoins will be credited to your account once the order is delivered and the return period is over.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>If I cancel the order, will the POPcoins that were to be credited to my account also be cancelled?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>Yes, the POPcoins that you were supposed to earn will be revoked for the cancelled order.
                        </p>
                        <h4 className={`sm:text-[24px] lg:text-[28px] ${manrope.className} font-[700] pb-2 pt-10`}>Where can I check the details of my POPcoins?
                        </h4>
                        <p className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>To view the details of your POPcoins, please follow these easy steps on any partner website or mypop.in:
                        </p>
                        <ul className={` sm:text-[18px] lg:text-[20px] pb-4 ${manrope.className} font-[500] `}>
                            <li>Login to POPcoins program.
                            </li>
                            <li>Navigate to the bottom of the page and click on the "Check History" button.
                                This will take you to the coins history page, where you can check the status of your POPcoins, including whether they are 'on the way,' 'credited,' 'redeemed,' or 'expired.'
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default FAQ