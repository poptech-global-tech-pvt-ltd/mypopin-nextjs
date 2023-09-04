'use client'
import { useState } from 'react'
import { Khand } from 'next/font/google'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})
function POPShop() {

    // == desktop & large devices ==
    const [isFirstActive, setIsFirstActive] = useState(false)
    const [two, settwo] = useState("-1050px")
    const [three, setThree] = useState("-1050px")
    const [four, setFour] = useState("-1050px")

    // == mobile & small devices ==
    const [isMobileFirstActive, setMobileFirstActive] = useState(false)
    const [isMobileSecondActive, setMobileSecondActive] = useState(false)
    const [isMobileThirdActive, setMobileThirdActive] = useState(false)
    const [isMobileFourthActive, setMobileFourthActive] = useState(false)

    const [mobileTwo, setMobileTwo] = useState("-750px");
    const [mobileThree, setMobileThree] = useState("-670px");
    const [mobileFour, setMobileFour] = useState("-600px");

    const handleOneClick = (event: any) => {
        const image = event.target;
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (x < 80) {
            setIsFirstActive((prev) => !prev)
            if (isFirstActive === false) {
                settwo("-100px")
                //reset
                setThree("-1050px")
                setFour("-1050px")
            }
            else if (isFirstActive === true) {
                //reset everything
                settwo("-1050px")
                setThree("-1050px")
                setFour("-1050px")
            }
        }
        else {
            window.open("https://8mvyk.app.link/dh8SuwQK3wb", "_blank");
        }
    }
    
    const handleTwoClick = () => {
        setThree("-100px")
        //reset
        settwo("-1050px")
        setFour("-1050px")

    }
    
    const handleThreeClick = () => {
        setFour("-100px")
        //reset
        setThree("-1050px")
        settwo("-1050px")
    }

    const handleFourClick = (event: any) => {
        //resets everything
        const image = event.target;
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (x < 90) {
            setFour("-1050px")
            setThree("-1050px")
            settwo("-1050px")
        }
        else {
            window.open("https://8mvyk.app.link/dh8SuwQK3wb", "_blank");
        }
    }

    // == handle mobile ==
    const handleOneMobileClick = (event: any) => {
        const image = event.target;
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (y < 65) {
            setMobileFirstActive((prev) => !prev)
            if (isMobileFirstActive === true) {
                // reset everything
                setMobileTwo("-750px")
                setMobileThree("-670px")
                setMobileFour("-600px")
            }
            else if (isMobileFirstActive === false) {
                setMobileTwo("-20px")
            }
        }
        else {
            window.open("https://8mvyk.app.link/dh8SuwQK3wb", "_blank");
        }
    }

    const handleTwoMobileClick = () => {
        // setMobileThree("-20px")
        setMobileSecondActive((prev) => !prev)
        if (isMobileSecondActive === true) {
            setMobileFour("-600px")
            setMobileThree("-20px")
            setMobileTwo("-750px")
        }
        else {
            setMobileTwo("-750px")
            setMobileThree("-670px")
            setMobileFour("-600px")
        }
    }
    const handleThreeMobileClick = () => {
        // setMobileFour("-20px")
        setMobileThirdActive((prev) => !prev)
        if (isMobileThirdActive === true) {
            setMobileTwo("-750px")
            setMobileThree("-670px")
            setMobileFour("-20px")
        }
        else {
            setMobileTwo("-750px")
            setMobileThree("-670px")
            setMobileFour("-600px")
        }
    }

    const handleFourMobileClick = (event: any) => {
        // reset everything
        const image = event.target;
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (y < 65) {
            setMobileTwo("-750px")
            setMobileThree("-670px")
            setMobileFour("-600px")
        }
        else {
            window.open("https://8mvyk.app.link/dh8SuwQK3wb", "_blank");
        }

    }

    return (
        <>
            <section id="popshop">
                {/* // desktop */}
                <div className='hidden lg:block'>
                    <div className={`${khand.className} text-center text-6xl py-16`}>Introducing the POPshop</div>
                    <div className='transition-all' style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className='transition-all' style={{ display: "flex", overflowX: "clip" }}>
                            <img className='transition-all cursor-pointer' width="1120" height="auto" onClick={handleOneClick} src="/popshop1.png" alt="Slide Image" />
                            <img className='transition-all cursor-pointer' width="1120" height="auto" onClick={handleTwoClick} style={{ marginLeft: two }} src="/popshop2.png" alt="Slide Image" />
                            <img className='transition-all cursor-pointer' width="1120" height="auto" onClick={handleThreeClick} style={{ marginLeft: three }} src="/popshop3.png" alt="Slide Image" />
                            <img className='transition-all cursor-pointer' width="1120" height="1000" onClick={handleFourClick} style={{ marginLeft: four }} src="/popshop4.png" alt="Slide Image" />
                        </div>
                    </div>
                </div>

                {/* // mobile */}
                <div className='block lg:hidden'>
                    <div className={`${khand.className} text-center text-3xl lg:text-6xl py-6 lg:py-16`}>Introducing the POPshop</div>
                    <div className='max-w-[400px] mx-auto'>
                        <div className='flex flex-col'>
                            <img className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleOneMobileClick} src="/popshop/popshop-mobile-4.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileTwo }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleTwoMobileClick} src="/popshop/popshop-mobile-3.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileThree }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleThreeMobileClick} src="/popshop/popshop-mobile-2.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileFour }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleFourMobileClick} src="/popshop/popshop-mobile-1.png" alt="Slide Image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { POPShop }

