'use client'
import { useState, useEffect } from "react"
import { Blurhash } from 'react-blurhash'


function ImageComponent({ src, hash }: any) {

    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image
        img.onload = () => {
            setImgLoaded(true)
        }
        img.src = src;
    }, [])

    return (
        <>
            <div style={{ display: imgLoaded ? "none" : 'inline' }}>
                <Blurhash
                    width={"100vw"}
                    height={"90vh"}
                    hash={hash}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img
                src={src}
                alt=""
                style={{
                    display: !imgLoaded ? "none" : "inline"
                }}
            />
        </>
    )
}

export { ImageComponent }