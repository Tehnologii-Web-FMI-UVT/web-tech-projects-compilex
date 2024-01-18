'use client'
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
    weight : "600",
    subsets : ["latin"]
});

export const LandingNavbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black/30 bg-opacity-75 backdrop-blur-md mx-auto p-7 flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-40 mr-4">
                    <Image
                    fill
                    alt="Logo"
                    src="/fulllogo.png">
                    </Image>
                </div>
            </Link>
            <div>
                <Link href={"./dashboard"}>
                    <Button variant={"compilex"} className="w-[150px] mr-10">
                        Try For Free
                    </Button>
                </Link>

                <Button variant={"border"} className="w-[150px]">
                        Contact Us
                </Button>
            </div>
        </nav>
    )
}