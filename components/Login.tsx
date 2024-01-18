'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import { Button } from "./ui/button"
import "./shapes.css";

function Login() {
  return (
    <div className="bg-[#111827] w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="shape shape1"></div>
            <div className="shape shape2"></div>
      
      <Image
      alt="Logo"
      src="/fulllogo.png"
      width={261}
      height={53}
      />

      <Button onClick={() => signIn("google")}
      className="mt-10 w-[261px]" variant={"compilex"}>
        Sign In
      </Button>
    </div>
  )
}

export default Login