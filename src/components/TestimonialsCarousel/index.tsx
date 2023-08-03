import Slider from "react-slick";
import Image from "next/image"
import Link from "next/link"

function TestimonialsCarousel() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonials = [
        { imageRelativePath: '/testimonials/testimonial-anveshan.svg', alt: "anveshan" },
        { imageRelativePath: '/testimonials/testimonial-gramiyaa.svg', alt: "gramiyaa" },
        { imageRelativePath: '/testimonials/testimonial-saaki.svg', alt: "saaki" }
    ]

    return (
        <>
            <Slider {...settings}>
                {testimonials?.map((i, index) => (
                    <div key={index}>
                        <Image
                            src={i.imageRelativePath}
                            width={600}
                            height={600}
                            alt={i.alt}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default TestimonialsCarousel