'use client';

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"


const font = Montserrat({
    weight : "600",
    subsets : ["latin"]
});

export const DashboardNavbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center">

                <div className="relative h-8 w-40 mr-4">
                    <Image
                    fill
                    alt="Logo"
                    src="/fulllogo.png">
                    </Image>
                </div>
             
            </Link>

            <div>{session && (<img onClick={()=>signOut()} src={session?.user?.image!} alt="Profile Picture"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-60"></img>)}
            
            </div>
        </nav>
    )
}