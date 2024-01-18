'use client'

import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import "./shapes.css";

export const LandingHero = () => {
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-center animate-fadeIn">
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="p-5 md:py-36 md:px-10 flex-1">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-bold text-center">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#43d75d] to-[#7dbe88]" >
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "Code Smarter",
                                    "Review Faster",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </div>
                    <h1 className="text-white">with CompileX</h1>
                </div>

                <div className="text-center text-grey mt-10 text-[#949494] text-xs sm:text-sm md:text-base lg:text-lg">
                    Revolutionizing software development with advanced Code Generation<br/>and meticulous Code Review services, ensuring top-tier quality and efficiency.
                </div>
                
                <div className="mt-10 flex items-center justify-center">
                    <Link href={"./dashboard"}>
                        <Button variant={"compilex"} className="w-[200px] md:w-[250px] lg:w-[300px]">
                            Create an account
                        </Button>
                    </Link>
                    
                </div>
                <p className="mt-3 text-[12px] text-white text-center">No credit card needed.</p>
            </div>

        </div>
    );
}
 
export default LandingHero;