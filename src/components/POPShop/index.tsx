import { useState } from 'react'

function POPShop() {

    const [isFirstActive, setIsFirstActive] = useState(false)
    const [two, settwo] = useState("-1050px")
    const [three, setThree] = useState("-1050px")
    const [four, setFour] = useState("-1050px")


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
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", overflowX: "clip" }}>
                <img width="1120" height="500" onClick={handleOneClick} src="/popshop1.png" alt="Slide Image" />
                <img width="1120" height="500" onClick={handleTwoClick} style={{ marginLeft: two }} src="/popshop2.png" alt="Slide Image" />
                <img width="1120" height="500" onClick={handleThreeClick} style={{ marginLeft: three }} src="/popshop3.png" alt="Slide Image" />
                <img width="1120" height="500" onClick={handleFourClick} style={{ marginLeft: four }} src="/popshop4.png" alt="Slide Image" />
            </div>
        </div>
    )
}

export { POPShop }

