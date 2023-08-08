import { useState } from 'react'
import { Khand } from 'next/font/google'
import { useMediaQuery } from 'react-responsive'

const khand = Khand({
    weight: '700',
    subsets: ['latin'],
})
function POPShop() {

    const [isFirstActive, setIsFirstActive] = useState(false)
    const [two, settwo] = useState("-1050px")
    const [three, setThree] = useState("-1050px")
    const [four, setFour] = useState("-1050px")

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
    return (
        <>
            {isDesktopOrLaptop && (
                <div>
                    <div className={`${khand.className} text-center text-6xl py-16`}>Introducing the POPshop</div>
                    <div className='transition-all' style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className='transition-all' style={{ display: "flex", overflowX: "clip" }}>
                            <img className='transition-all' width="1120" height="auto" onClick={handleOneClick} src="/popshop1.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleTwoClick} style={{ marginLeft: two }} src="/popshop2.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleThreeClick} style={{ marginLeft: three }} src="/popshop3.png" alt="Slide Image" />
                            <img className='transition-all' width="1120" height="auto" onClick={handleFourClick} style={{ marginLeft: four }} src="/popshop4.png" alt="Slide Image" />
                        </div>
                    </div>
                </div>
            )}

            {isTabletOrMobile && (
                <div>
                    tablet or mobile
                </div>
            )}

        </>
    )
}

export { POPShop }

