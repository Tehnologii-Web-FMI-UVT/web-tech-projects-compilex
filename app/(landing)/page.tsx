import LandingHero from "@/components/landing-hero";
import KeyPointsSection from "@/components/landing-keypoints";
import ToolkitContent from "@/components/toolkit-content";
import { LandingNavbar } from "@/components/landing-navbar";
import LandingFooter from "@/components/landing-footer";


const LandingPage = () => {
    return ( 
    <div className="h-screen">
            <LandingNavbar/>
        <div className="mx-auto w-full max-w-screen-xl">
            <LandingHero/>
            <KeyPointsSection/>
            <ToolkitContent/>
        </div>
        <LandingFooter/>
    </div>
     );
}
 
export default LandingPage;