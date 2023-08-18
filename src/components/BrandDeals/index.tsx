import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Manrope } from 'next/font/google'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700']
})

interface IBrandDeals {
    secondaryColor: string
    textColor: string
}

function BrandDeals({ secondaryColor, textColor }: IBrandDeals) {
    const [productImageData, setProductImageData] = useState<any>();
    const router = useRouter()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        console.log("hello")
        const currentBrandURL = window.location.pathname.split("/")[2]
        fetch(`https://mypop-dashboard.popclub.co.in/api/product-images?filters[$and][0][brand_names][brand_name][$contains]=${currentBrandURL}`)
            .then((res) => res.json())
            .then((data) => setProductImageData(data.data))
    }, [])

    const handleProductLink = (itm: any) => {
        router.push(`${itm?.attributes?.product_link}`)
        console.log(itm?.attributes?.product_link)
    }

    return (
        <>
            <div>
                <div className={`uppercase text-3xl text-center font-bold py-16`}>EXPLORE UNLIMITED DEALS</div>
                <div style={{ width: "100%" }}>
                    <Carousel
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={1800}
                        centerMode={false}
                        //   className=""
                        //   containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={true}
                        itemClass="unlimiteddeals-item-class"
                        //   keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={true}
                        responsive={responsive}
                        swipeable={true}
                    >
                        {productImageData?.length > 0 && productImageData?.map((itm: any, index: number) => (
                            <div key={index}>

                                <div onClick={() => handleProductLink(itm)} className="grid w-full justify-center justify-items-center">
                                    <div className="relative w-[266px] h-[276px] z-10">
                                        <img
                                            src={itm?.attributes?.product_image}
                                            alt="hgfd"
                                            className="h-full w-auto object-cover rounded-3xl"
                                        />
                                        <div style={{ backgroundColor: textColor }} className={`absolute top-8 right-0 p-2 pl-4 bg-red-500 text-white text-2xl ${manrope.className} font-bold rounded-l-full`}>
                                            {itm?.attributes?.discount_percentage}
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5`}>
                                        <div className="text-center pt-3">{itm?.attributes?.product_name}</div>
                                        <div className="text-center py-1">Rs {itm?.attributes?.product_mrp}</div>
                                        <div className="text-center pb-3">or Rs 1019+ 180</div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        {/* <div className="grid w-full justify-center justify-items-center">
                            <div className="relative w-[266px] h-[276px] z-10">
                                <img
                                    src="/brand-test-sample.webp"
                                    alt="hgfd"
                                    className="h-full w-auto object-cover rounded-3xl"
                                />
                                <div style={{ backgroundColor: textColor }} className={`absolute top-8 right-0 p-2 pl-4 bg-red-500 text-white text-2xl ${manrope.className} font-bold rounded-l-full`}>
                                    50% off
                                </div>
                            </div>
                            <div style={{ backgroundColor: secondaryColor, transform: "translateY(-8%)" }} className={`w-11/12 rounded-bl-3xl rounded-br-3xl font-bold ${manrope.className} z-5`}>
                                <div className="text-center pt-3">Skin Lightening Lotion</div>
                                <div className="text-center py-1">Rs 1199</div>
                                <div className="text-center pb-3">or Rs 1019+ 180</div>
                            </div>
                        </div> */}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export { BrandDeals }