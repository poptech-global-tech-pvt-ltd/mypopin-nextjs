'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

const partnerImages = [
    { imgRelativeUrl: "/partner/partner-saaki-logo.png", alt: "saaki" },
    { imgRelativeUrl: "/partner/partner-rubans-logo.png", alt: "rubans" },
    { imgRelativeUrl: "/partner/partner-maisknn-logo.png", alt: "maisknn" },
    { imgRelativeUrl: "/partner/partner-teaorigin-logo.png", alt: "tea-origin" },
    { imgRelativeUrl: "/partner/partner-varanga-logo.png", alt: "varanga" },
    { imgRelativeUrl: "/partner/partner-anveshan-logo.png", alt: "anveshan" },
    { imgRelativeUrl: "/partner/partner-zoh-logo.png", alt: "zoh-probiotics" },
    { imgRelativeUrl: "/partner/partner-teatrunk-logo.png", alt: "tea-trunk" },
    { imgRelativeUrl: "/partner/partner-saga-logo.png", alt: "saga-jaipur" },
    { imgRelativeUrl: "/partner/partner-paul-logo.png", alt: "paul-penders" },
    { imgRelativeUrl: "/partner/partner-boyo-logo.png", alt: "boyo" },
    { imgRelativeUrl: "/partner/partner-tatha-logo.png", alt: "tatha" },
    { imgRelativeUrl: "/partner/partner-campussutra-logo.png", alt: "campus-sutra" },
    { imgRelativeUrl: "/partner/partner-braavo-logo.png", alt: "braavoking" },
    { imgRelativeUrl: "/partner/partner-doodle-logo.png", alt: "doodle-collection" },
    { imgRelativeUrl: "/partner/partner-eume-logo.png", alt: "eume-world" },
    { imgRelativeUrl: "/partner/partner-khadi-logo.png", alt: "khadi-essentials" },
    { imgRelativeUrl: "/partner/partner-prime-logo.png", alt: "prime-foods" },
    { imgRelativeUrl: "/partner/partner-nomad-logo.png", alt: "nomadfoodproject" },
    { imgRelativeUrl: "/partner/partner-bodytails-logo.png", alt: "bodytales" },
    { imgRelativeUrl: "/partner/partner-qurez-logo.png", alt: "qurez" },
    { imgRelativeUrl: "/partner/partner-theskinstory-logo.png", alt: "theskinstory" },
    { imgRelativeUrl: "/partner/partner-budding-bees-logo.png", alt: "budding-bees" },
    { imgRelativeUrl: "/partner/partner-almowear-logo.png", alt: "almowear" },
    { imgRelativeUrl: "/partner/partner-man-theory-logo.png", alt: "man-theory" },
    { imgRelativeUrl: "/partner/partner-blamblack-logo.png", alt: "blamblack" },
    { imgRelativeUrl: "/partner/partner-laida-logo.png", alt: "laida" },
    { imgRelativeUrl: "/partner/partner-sohi-logo.png", alt: "sohi" },
    { imgRelativeUrl: "/partner/partner-makeup-eraser-logo.png", alt: "makeup-eraser" },
    { imgRelativeUrl: "/partner/partner-gramiyaa-logo.png", alt: "gramiyaa" },
    { imgRelativeUrl: "/partner/partner-keebee-logo.png", alt: "keebee" },
    { imgRelativeUrl: "/partner/partner-peore.png", alt: "peore" },
    { imgRelativeUrl: "/partner/partner-weaves-of-tradition-logo.png", alt: "weaves-of-tradition" }
];

function LeadingBrandsCarousel() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false
    }

    return (
        <Slider {...settings}>
            {partnerImages?.map((i, index) => (
                <div key={index}>
                    <Image
                        src={i.imgRelativeUrl}
                        width={180}
                        height={52}
                        alt={i.alt}
                    />
                </div>
            ))}
        </Slider>
    )
}

export default LeadingBrandsCarousel