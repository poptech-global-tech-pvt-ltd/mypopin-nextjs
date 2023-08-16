import { useState } from 'react'
import { Khand } from 'next/font/google'
import { useMediaQuery } from 'react-responsive'

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
    const [mobileTwo, setMobileTwo] = useState("-500px");
    const [mobileThree, setMobileThree] = useState("-580px");
    const [mobileFour, setMobileFour] = useState("-665px");

    //to toggle between desktop & mobile
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1200px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' })


    const handleOneClick = () => {
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
    const handleFourClick = () => {
        //resets everything
        setFour("-1050px")
        setThree("-1050px")
        settwo("-1050px")
    }

    // == handle mobile ==
    const handleOneMobileClick = () => {

        setMobileFirstActive((prev) => !prev)
        if (isMobileFirstActive === true) {
            // reset everything
            setMobileTwo("-500px")
            setMobileThree("-580px")
            setMobileFour("-665px")
        }
        else if (isMobileFirstActive === false) {
            setMobileTwo("-20px")
        }
    }

    const handleTwoMobileClick = () => {
        setMobileThree("-20px")

    }
    const handleThreeMobileClick = () => {
        setMobileFour("-20px")
    }
    const handleFourMobileClick = () => {
        // reset everything
        setMobileTwo("-500px")
        setMobileThree("-580px")
        setMobileFour("-665px")
    }



    return (
        <>
            {isDesktopOrLaptop && (
                <div>
                    <div className={`${khand.className} text-center text-6xl py-16`}>Introducing the POPshop</div>
                    <div className='transition-all' style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className='transition-all' style={{ display: "flex", overflowX: "clip" }}>
                            <img className='transition-all shadow-md' width="1120" height="auto" onClick={handleOneClick} src="/popshop1.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleTwoClick} style={{ marginLeft: two }} src="/popshop2.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleThreeClick} style={{ marginLeft: three }} src="/popshop3.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleFourClick} style={{ marginLeft: four }} src="/popshop4.png" alt="Slide Image" />
                        </div>
                    </div>
                </div>
            )}

            {isTabletOrMobile && (
                <>
                    <div className={`${khand.className} text-center text-3xl lg:text-6xl py-6 lg:py-16`}>Introducing the POPshop</div>
                    <div className='max-w-[400px] mx-auto'>
                        <div className='flex flex-col'>
                            <img className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleOneMobileClick} src="/popshop/popshop-mobile-1.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileTwo }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleTwoMobileClick} src="/popshop/popshop-mobile-2.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileThree }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleThreeMobileClick} src="/popshop/popshop-mobile-3.png" alt="Slide Image" />
                            <img style={{ marginTop: mobileFour }} className='transition-all shadow-2xl' width="1120" height="auto" onClick={handleFourMobileClick} src="/popshop/popshop-mobile-4.png" alt="Slide Image" />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export { POPShop }

