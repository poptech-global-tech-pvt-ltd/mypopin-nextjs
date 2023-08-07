import Slider from "react-slick";
import Image from 'next/image'
function B2BCaseStudies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        // @ts-ignore
        <Slider {...settings} style={{ display: "flex" }}>
            <div style={{ display: "flex" }} className="flex">
                <Image width="371" height="336" src="/casestudies/brand-slide-anveshan-image.png" alt="shopify logo" />
                <span>ghkj</span>
            </div>
        </Slider>
    )
}

export { B2BCaseStudies }

{/* <div>
                        <Image width="371" height="336" src="/casestudies/brand-slide-saaki-image.png" alt="shopify logo" />
                    </div> */}