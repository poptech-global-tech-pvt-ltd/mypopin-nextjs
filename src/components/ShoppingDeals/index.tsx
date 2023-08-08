import { Khand } from 'next/font/google'
import Slider from "react-slick";


const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

function ShoppingDeals() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className={`text-center text-6xl py-16 ${khand.className} font-bold`}>Best Shopping Deals Online</div>
                <div className='shopping-deals'>
                    <Slider {...settings}>
                        <div>
                            <img src="/shoppingdeals/shopping-deal-1.svg" />
                        </div>
                        <div>
                            <img src="/shoppingdeals/shopping-deal-2.svg" />
                        </div>
                        <div>
                            <img src="/shoppingdeals/shopping-deal-3.svg" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export { ShoppingDeals }