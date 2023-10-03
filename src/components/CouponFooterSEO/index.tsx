import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

function CouponFooterSEO() {
    return (
        <>
            <section>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="max-w-5xl mx-auto px-2">
                            <div>POP: Shop, Earn Popcoins, Get Rewards & Become our Partner</div>
                        </AccordionTrigger>
                        <AccordionContent className="p-[0px] pb-0 px-2 lg:px-0 max-w-5xl mx-auto">
                            <div className="bg-white">
                                <h5 className="pt-4 pb-1 font-bold">About POP</h5>

                                <p className="pb-2">
                                    Everyone enjoys earning rewards in various aspects of life, whether while shopping for juice blenders to make smoothies while on the go or while shopping for tickets to the next gig. So, why not get rewarded while you shop your favourite brands?
                                </p>

                                <p className="pb-2">
                                    POP positions itself as a one-of-a-kind trailblazer in loyalty currency programs by revolutionising shopping for customers pan India. The POPcoins loyalty program is a rewarding system designed to acknowledge and appreciate customers for their purchases on the brands associated with the POP platform. As a POP member, you can earn POPcoins for every purchase made on the website or POP application, including when you shop with POP brand partners like Saaki, Zoh Probiotics, Almowear, Peore, Anveshan, Saga Jaipur, Body Tales, Blamblack, Boyo, Gramiyaa, Budding Bees, Doodle Collection, Prime Foods, BraavoKing, Campus Sutra, Khadi Essentials, Mai Sknn, Eume World, Tea Origin,  Makeup Eraser, Keebee, Man Theory, Laida, Tea Trunk, Paul Penders, Miko lolo, Qurez, Rubans, Sohi, Tatha, Varanga, The Skin Story, and others. These earned POPcoins will be credited to your account after the return period for the purchased item is over.                                </p>

                                <h6 className="pt-4 pb-1 font-bold">Benefits of shopping with POPcoins/ Why shop using POPcoins?</h6>

                                <p className="pb-2">
                                    The program rewards and incentivises loyal customers by offering them a unique currency called POPcoins. These POPcoins can be earned through various activities in the POP ecosystem and can be redeemed for a wide range of rewards, discounts, and exclusive benefits.
                                    Being a POPcoins member offers a range of exclusive benefits, such as free shipping on first purchases, early access to sales, and more.
                                    Unlock unbelievable discounts with your favourite brands partnered with the POP loyalty program.
                                </p>

                                <h6 className="pt-4 pb-1 font-bold">Amazing offers available on POP</h6>
                                <p className="pb-2">
                                    POP helps you discover the best things to do, eat and buy – wherever you are! Make every day awesome with POP. Pamper yourself with exciting wellness and shopping offers. With offers on everything, you are sure to try and discover new brands to shop from new every time. Shop with brands powered by POPcoins loyalty like:
                                </p>

                                <p className="pb-2">
                                    <p className="italic"> Leading Fashion brands in India</p>
                                    <Link href="/brands/saaki">Saaki</Link>- Up to 50% off on modern ethnicwear
                                    <br />
                                    <Link href="/brands/varanga">Varanga</Link>- Up to 70% off on versatile and timeless fashion
                                    <br />
                                    <Link href="/brands/rubans">Rubans</Link>- Indivisualistic adornments @ up to 75% off
                                    <br />
                                    <Link href="/brands/almowear">Almowear</Link>- Up to 35% off on premium men’s essentials
                                    <br />
                                    <Link href="/brands/sohi">Sohi</Link>- Shimmery confidence @ up to 75% off
                                    <br />
                                    <Link href="/brands/mikolo">Mikolo</Link>- Up to 70% off on playful kidswear
                                    <br />
                                    <Link href="/brands/eumeworld">Eume World</Link>- Up to 40% off on standard-shattering backbacks
                                </p>
                                <p className="pb-2">
                                    <p className="italic">Leading Food & Drinks brands in India </p>
                                    <Link href="/brands/anveshan"> Anveshan</Link>- Up to 50% off on unadulterated farmed foods
                                    <br />
                                    <Link href="/brands/teatrunk">Tea Trunk</Link>- Up to 30% off on nourishing teas
                                    <br />
                                    <Link href="/brands/gramiyaa">Gramiyaa</Link>- Up to 45% off on minimally processed oils
                                </p>
                                <p className="pb-2">
                                    <p className="italic">Leading Beauty brands in India  </p>
                                    <Link href="/brands/paulpenders">Paul Penders</Link>- Up to 50% off on clean beauty
                                    <br />
                                    <Link href="/brands/qurez">Qurez</Link>-Up to 40% off on natural beauty from within
                                    <br />
                                    <Link href="/brands/theskinstory">The Skin Story</Link>- Up to 40% off on nourishing beauty
                                    <br />
                                    <Link href="/brands/braavoking">BraavoKing</Link>- Up to 70% off on handcrafted men’s luxury
                                    <br />
                                    <Link href="/brands/khadiessentials">Khadi Essentials</Link>- Up to 50% off on radiant beauty

                                </p>
                                <p className="pb-2">
                                    <p className="italic">Leading Home & Living brands in India </p>
                                    <Link href="/brands/sagajaipur">Saga Jaipur</Link>- Up to 60% off on luxurious soft furnishings
                                    <br />
                                    <Link href="/brands/peore">Peore</Link>- Up to 45% off on honest filtration
                                </p>
                                <p className="pb-2">
                                    <p className="italic">Leading Health brands in India</p>
                                    <Link href="/brands/zohprobiotics">Zoh Probiotics</Link>- Up to 50% off on fermented goodness
                                </p>
                                <p className="pb-2">
                                    <p className="italic">Leading Stationery brands in India </p>
                                    <Link href="/brands/doodlecollection">Doodle Collection</Link>- Up to 75% off on stationery and lifestyle products
                                </p>
                                <h6 className="pt-4 pb-1 font-bold">How to get POPcoins</h6>

                                <p className="pb-2">
                                    Shop across the POP ecosystem with lifestyle brands across Fashion, Beauty, Food, and more and earn POPcoins on your purchases. Additionally, earn free POPcoins when you signup and when you refer a friend to shop on POP.
                                </p>


                                <h6 className="pt-4 pb-1 font-bold">How to use POPcoins</h6>

                                <p className="pb-2">
                                    Now, you may be wondering how to use POPcoins on the mypop website. POPcoins can be used as a form of payment for the products you purchase on the POP platform.
                                    Once you make your purchase and the number of days to receive earned POPcoins are completed, your benefits have now transformed into a reward ecosystem with a wider range of partners to choose from. By shopping on POP and partnering with brands like Campus Sutra, Qurez, Rubans, Saaki, and others, you can earn POPcoins and subsequently avail codes such as Rubans coupon code, Anveshan ghee coupon code, Khadi Essentials coupon, and much more.
                                </p>


                                <h6 className="pt-4 pb-1 font-bold">How POP helps shoppers with coupons</h6>

                                <p className="pb-2">
                                    Coupons help budget spending habits for customers shopping online, every day. They make shopping convenient by offering discounts or cashback on your favorite purchases.
                                    Several coupon websites in India offer coupons to their customers across hundreds of brands and millions of products. You can find coupons with the latest offers through these coupon websites and have fun shopping without burning your pockets!
                                </p>
                                <h6 className="pt-4 pb-1 font-bold">How to make the best out of POPcoins
                                </h6>
                                <p className="pb-2">
                                    Make your shopping dreams a reality! Grab grand deals with coupon discount codes across Fashion, Food, Beauty, Electronics, Stationery, Home, and Living. Unlock a world of possibilities with POP's loyalty currency program.
                                </p>

                                <p className="pb-2">
                                    <p className="italic">POPminis:</p> Discover samples/ trial products from the best brands on POPclub. Explore the rewards store to grab free brand samples. Buying trail-sized products allows you to explore more products from your favourite brands. You can see if the product works for you before you purchase a full-sized version of the desired product.
                                </p>

                                <p className="pb-2">
                                    <p className="italic">Discounts:</p>
                                    Access offers across various lifestyle brands that are available in the country. Unlock and redeem discounts by shopping with POPcoins across brands powered by the POPcoins loyalty program. POP partners with various brands to offer vouchers and services that can be obtained by redeeming POPcoins. These vouchers may provide discounts or exclusive benefits outside of the POP ecosystem. Customers can explore the POPcoins section to discover and choose from a range of partner brands and additionally, choose from the coupons page based on the offers available.
                                </p>

                                <h6 className="pt-4 pb-1 font-bold">How coupons can help shoppers across different lifestyle categories</h6>
                                <p className="pb-2">
                                    A loyalty currency program with the use of coupons/promo code can offer numerous benefits to customers or shoppers across various categories, including fashion, food, beauty, stationery, home and furniture, and pets. Here is how customers in each category can benefit from such programs:
                                    Fashion: The beauty of online shopping is that it does not restrict unlocking the best deals across D2C fashion brands. Loyalty currency programs can provide customers with coupons for online shopping that offer discounts on fashion items, making trendy clothing and accessories more affordable. With some creativity and a lot of research, we help you land the best deals on online shopping!
                                </p>

                                <p className="pb-2">
                                    Additionally, coupons associated with loyalty programs can unlock exclusive deals, such as buy-one-get-one offers, additional discounts on sale items, or free shipping, enhancing the overall shopping experience.
                                </p>

                                <p className="pb-2">
                                    <p className="italic">Beauty:</p>
                                    Loyalty currency programs can offer coupon codes for shopping beauty products, allowing customers to save on their skincare, makeup, and haircare purchases. Coupons associated with loyalty programs also provide customers with free samples, allowing them to try new products along with other additional benefits such as benefits that can be earned by shopping on one brand website but availed for discounts across various partner brands sites .
                                </p>
                                <p className="pb-2">
                                    <p className="italic">Food:</p>
                                    Loyalty currency programs combined with coupons can help customers save money on their food purchases.
                                </p>
                                <p className="pb-2">
                                    POPcoins open the door to a network of partnered food brands to buy from. By earning and accumulating POPcoins through loyalty programs, you can redeem them for discounts, rewards, special offers, or even free products from partner brands that offer healthy food options. This enables you to access high-quality food without straining your budget with brands that offer coupons for food items.
                                </p>

                                <p className="pb-2">
                                    <p className="italic">Home and Furniture</p>
                                    Loyalty currency programs combined with coupon discounts can help customers transform their living spaces at a more affordable cost with discounted home decor. Coupons associated with loyalty programs can provide access to seasonal or clearance sales, allowing customers to enjoy significant discounts on home and furniture purchases.
                                </p>


                                <p className="pb-2">
                                    <p className="italic">Pets:</p>
                                    Loyalty currency programs combined with coupons can offer discount codes for pet food, toys, accessories, and other pet supplies, helping customers with savings on their pet care expenses.
                                </p>

                                <h6 className="pt-4 pb-1 font-bold">How to get POP coupon codes</h6>
                                <p className="pb-2">
                                    Your secret to unlocking amazing discounts and rewards is here. Earn POPcoins and turn shopping into a rewarding experience. Check out the best deals every day on the coupon site to check out popular discount coupons POP has to offer. Once you have the coupon discount, you can apply it in the coupons and offers section while you checkout on the brand’s website while shopping.
                                </p>

                                <h6 className="pt-4 pb-1 font-bold">Which is better: Shopping from MyPOP website or POP application</h6>
                                <p className="pb-2">
                                    Current shoppers prefer shopping from the POP website as it makes shopping across multiple brands easier. While the app is helpful in terms of being a one-stop platform for all shopping needs, shopping from the website outperforms shopping from the application as you can use the same POPcoins to shop across multiple brands in the POP ecosystem, unlocking higher discounts and rewards with the POP loyalty currency.
                                </p>

                                <h6 className="pt-4 pb-1 font-bold">Perks of POPcoins</h6>
                                <p className="pb-2">
                                    Fuel your shopping spree by earning POPcoins effortlessly and treat yourself to something special. Unlock a world of rewards with the POPcoins loyalty currency program. Earn POPcoins on every purchase and enjoy exclusive benefits across cult-fave partner brands. Redeem your POPcoins for discounts, vouchers, and exciting deals.
                                    Loyalty sure does pay off, and we shall show you how! Shop more and earn more to redeem maximum rewards using POPcoins. Unlock a treasure trove of rewards by shopping smart and saving big on future purchases by earning POPcoins. Reward your shopping experience and make every purchase count and earn POPcoins effortlessly on every transaction! Effortlessly earn rewards like no other with POPcoins.
                                    Enjoy the most rewarding shopping deals with the most exciting D2C brands across categories like Fashion, Beauty, Food, Home & Living, and many more. Earn POPcoins as a reward every time you shop and use them across brands to avail online shopping discounts. Shop, earn, and be rewarded with the POP loyalty currency program. Enjoy a personalised shopping experience with rewards that cater to everyone!
                                </p>
                            </div>
                            <br />
                            <br />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </>
    )
}

export { CouponFooterSEO }