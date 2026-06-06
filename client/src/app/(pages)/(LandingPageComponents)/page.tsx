import BannerWrapper from "../(CommonComponents)/BannerWrapper/BannerWrapper";
import bannerImg from "@/assets/banner-imgs/banner-img.svg";
import AvailabilitySection from "./AvailabilitySection/AvailabilitySection";
import IndustriesText from "./IndustriesCards/IndustriesText";
const LandingPage = () => {
  return (
    <div>
      <BannerWrapper 
      shortTitle="Meet HappyAssist!"
     title= "Your Best AI Assistant to Capture All Leads" 
        description="Stop missing out on opportunities with HappyAssist, which helps you answer all calls around the clock. Handle calls, schedule appointments, take notes, and address FAQs automatically and intelligently with your new AI agent that never sleeps."
        image={bannerImg} 
        btnPrimaryText="Get Started"
        btnSecondaryText="Book a Demo"
        primaryHref="#"
      />
      <AvailabilitySection/>
      <IndustriesText/>
    </div>
  )
}

export default LandingPage
