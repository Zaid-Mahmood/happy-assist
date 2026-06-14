import BannerWrapper from "../(CommonComponents)/BannerWrapper/BannerWrapper";
import AvailabilitySection from "./AvailabilitySection/AvailabilitySection";
import IndustriesText from "./IndustriesCards/IndustriesText";
import WorkingMethodsTitles from "./WorkingMethods/WorkingMethodsTitles";
import OnBoardingSection from "./OnBoardingSection/OnBoardingSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import ClientReviews from "./ClientReviews/ClientReviews";
import PricingSection from "./PricingSection/PricingSection";
import HomePageFaqs from "./HomePageFaqs/HomePageFaqs";
const LandingPage = () => {
  return (
    <div>
      <BannerWrapper
        shortTitle="Meet HappyAssist!"
        title="Your Best AI Assistant to Capture All Leads"
        description="Stop missing out on opportunities with HappyAssist, which helps you answer all calls around the clock."
        showVoiceAgent={true}
        btnPrimaryText="Get Started"
        btnSecondaryText="Book a Demo"
        primaryHref="#"
      />
      <AvailabilitySection />
      <IndustriesText />
      <WorkingMethodsTitles />
      <OnBoardingSection />
      <FeaturesSection />
      <ClientReviews />
      <PricingSection />
      <HomePageFaqs />
    </div>
  );
};

export default LandingPage;
