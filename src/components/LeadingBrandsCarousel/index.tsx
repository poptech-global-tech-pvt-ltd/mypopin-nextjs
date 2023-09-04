'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// static data has been deprecated- this is now coming from strapi
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

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

function LeadingBrandsCarousel() {
    const [brandLogos, setBrandLogos] = useState<any>()

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/popcoin-partners-widgets?populate=*`).then((res) => res.json()).then((data) => setBrandLogos(data?.data))
    }, [])

    console.log({ brandLogos })

    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            // autoPlaySpeed={7}
            centerMode={false}
            className=""
            containerClass=""
            customTransition="all 2s linear"
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl={false}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
        >
            {brandLogos && brandLogos?.length && brandLogos?.map((i: any, index: number) => (
                <div key={index}>
                    <Link href={`/brands/${i?.attributes?.redirection_url}`}>
                        <img
                            src={i?.attributes.image.data.attributes.url}
                            width="auto"
                            height="20"
                            alt={i.alt}
                        />
                    </Link>
                </div>
            ))}
            {/* // TODO remove this repeative loop when more data is in strapi */}
            {brandLogos && brandLogos?.length && brandLogos?.map((i: any, index: number) => (
                <div key={index}>
                    <Link href={`/brands/${i?.attributes?.redirection_url}`}>
                        <img
                            src={i?.attributes.image.data.attributes.url}
                            width="auto"
                            height="20"
                            alt={i.alt}
                        />
                    </Link>
                </div>
            ))}
        </Carousel>
    )
}

export default LeadingBrandsCarousel