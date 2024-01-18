import Image from "next/image";
import Welcome from "@/components/welcome";
import { DashboardNavbar } from "@/components/dashboard-navbar";
import Link from "next/link";


const HomePage = () => {
  return (

    

<div>

    <DashboardNavbar/>

    <Welcome/>
    
    <div className="flex flex-col items-center justify-center px-2 text-white">
    
        
        <div className="flex space-x-2 text-center">
         <div className="max-w-[600px] hover:max-w-[750px] duration-150 bg-white/5 p-10 rounded-xl cursor-pointer">
                 <div className="text-3xl font-bold">
                 <Link href="/chat"> <h1 className="mb-6">Code Generation & Review</h1></Link>
        </div>
       
        
            <div>
            <p className="infoText word-wrap: break-word"> Streamline your development. Our advanced code generation service delivers efficient, 
            quality code quickly. Perfect for any project, Compilex is your solution for faster, smarter coding.</p>
            </div>
    </div>
    
    <div className="max-w-[600px] hover:max-w-[750px] duration-150 bg-white/5 p-10 rounded-xl cursor-pointer">
        <div className="text-3xl font-bold">
            <h1 className="mb-6">Review Your Code</h1>
        </div>
            <div>
            <p className="infoText word-wrap: break-word"> Elevate your code. Our expert reviews offer concise, actionable
            insights to improve efficiency and maintainability.
            Perfect for any project, CompileX is your key to coding excellence.</p>
            </div>
    </div>
    
        </div>
    </div>
</div>
  )
}

export default HomePage;