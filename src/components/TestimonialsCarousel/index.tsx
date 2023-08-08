import Slider from "react-slick";
import Image from "next/image"

function TestimonialsCarousel() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <Slider {...settings}>
            <div>
                <Image width={500} height={500} alt="" src="/testimonials/testimonial-anveshan.svg" />
            </div>
            <div>
                <Image width={100} height={100} alt="" src="/testimonials/testimonial-gramiyaa.svg" />
            </div>
            <div>
                <Image width={100} height={100} alt="" src="/testimonials/testimonial-saaki.svg" />
            </div>
        </Slider>
    )
}

export default TestimonialsCarousel