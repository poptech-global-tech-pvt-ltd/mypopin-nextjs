import Image from "next/image"
import { Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
})

export interface POPCardProps {
    title: string,
    description: string,
    imageRelativePath: any
}


function POPCard({ title, description, imageRelativePath }: POPCardProps) {
    return (
        <>
            <div className="bg-[#FAFAFA] border border-[#E9E9E9] rounded-[40px] w-[310px] h-[380px] m-4">
                <div>
                    <Image
                        src={imageRelativePath}
                        width={213}
                        height={213}
                        alt="Popcoin"
                        className="mx-auto pt-5 pb-2 drop-shadow-md"
                    />
                </div>
                <div>
                    <div className={`text-center text-2xl ${manrope.className} font-medium`}>{title}</div>
                    <div className={`text-center text-[16px] pt-3 pb-6 px-4 ${manrope.className}`}>{description}</div>
                </div>
            </div>
        </>
    )
}

export { POPCard }