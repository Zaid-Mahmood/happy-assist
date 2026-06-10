import PricingPlans from "./PricingPlans";
import lineImg from "@/assets/pricing-section-imgs/line-img.png";
import Image from "next/image";

const PricingSection = () => {
  return (
    <div  className="z-0 px-8 py-5 text-center md:px-16 md:py-13 relative">
      <small className="text-primary font-body text-[13px] font-bold">
        Pricing
      </small>
      <h2 className="pt-3 w-full font-heading font-semibold text-tw-black text-xl md:text-3xl leading-[150%]">
        Transparent Pricing, No Hidden Charges
      </h2>
      <PricingPlans />
      <Image className="absolute top-0 z-20" src={lineImg} alt  = "line-img" />
    </div>
  );
};

export default PricingSection;

