"use client"
import { useState } from "react";
import Image from "next/image"
import { Squash as Hamburger } from 'hamburger-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'



function MobileHeader() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <main>
                <nav>
                    {/* // closed/header */}
                    <div className="h-16 flex items-center">
                        <div className="flex px-4 justify-between w-full">
                            <Image src="/poplogo.svg" alt="logo" width={69} height={44} />
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                    <Separator />
                    {/* // dropdown menu */}
                    <div className={`${!isOpen ? `hidden` : `block`}`}>
                        <div className="p-4">
                            {/* // POP Partners */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="bg-[#F5F5F5] p-3">POP Partners</AccordionTrigger>
                                    <AccordionContent className="p-[0px] pb-0">
                                        <div className="bg-[#fff4f3] p-3 rounded-b-lg">
                                            --- brand names here ---
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <div className="py-1" />
                            {/* //Our POP World */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="bg-[#F5F5F5] p-3">Our POPWorld</AccordionTrigger>
                                    <AccordionContent className="p-[0px] pb-0">
                                        <div className="bg-[#fff4f3] p-3 rounded-b-lg">
                                            POP Shop
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <div className="py-1" />
                            {/* // Blogs */}
                            <Link href="/blogs">
                            <div className="bg-[#F5F5F5] p-3">
                                <div className="text-black font-medium">Blogs</div>
                            </div>
                            </Link>
                            <div className="py-1" />
                            {/* // Help & Support */}
                            <Link href="#">
                            <div className="bg-[#F5F5F5] p-3">
                                <div className="text-black font-medium">Help & Support</div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </main>
        </>
    )
}

export { MobileHeader }