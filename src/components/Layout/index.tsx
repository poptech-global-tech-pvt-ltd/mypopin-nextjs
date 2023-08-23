'use client'
import { ReactNode } from "react"

export interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    console.log({children})
    return (
        <main className="pt-2 lg:pt-24 max-w-[1350px] mx-auto">
            {children}
        </main>
    )
}

export { Layout }