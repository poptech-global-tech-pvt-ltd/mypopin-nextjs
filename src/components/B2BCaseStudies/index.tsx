import Slider from "react-slick";
import Image from 'next/image'
import { Khand } from 'next/font/google'
import { Manrope } from 'next/font/google'


const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})

const manrope = Manrope({
    subsets: ['latin'],
})

function B2BCaseStudies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="case-studies-container">
            <Slider {...settings}>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-3xl lg:text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <Image width="170" height="170" src="/casestudies/saaki-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <Image width="371" height="336" src="/casestudies/saaki.svg" alt="anveshan logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <Image width="170" height="170" src="/casestudies/anveshan-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <Image width="371" height="336" src="/casestudies/anveshan.svg" alt="anveshan logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="react-slick-one">
                    <div className="max-w-6xl mx-auto">
                        <div className="react-slick-header">
                            <div className={`text-[#621E45] text-6xl font-bold ${khand.className}`}>Case Studies</div>
                            <div className="react-slick-logo">
                                <Image width="170" height="170" src="/casestudies/gramiyaa-logo.svg" alt="anveshan logo" />
                            </div>
                        </div>
                        <div className="react-slick-footer">
                            <div>
                                <Image width="371" height="336" src="/casestudies/gramiyaa.svg" alt="gramiyaa logo" />
                            </div>
                            <div className="react-slick-texts-container">
                                <ul>
                                    <li><span>16X more customers Signing</span> Up and transacting on the same day, in comparison to incumbents.</li>
                                    <li><span>70X transacting customers per day</span> using POPcoins compared to other loyalty currencies.</li>
                                    <li>The brand is witnessing<span> 12X incremental revenue per day.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export { B2BCaseStudies }
