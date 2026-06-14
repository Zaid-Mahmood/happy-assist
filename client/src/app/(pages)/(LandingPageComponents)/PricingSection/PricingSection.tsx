import PricingPlans from "./PricingPlans";
import lineImg from "@/assets/home-page-imgs/pricing-section-imgs/line-img.png";
import Image from "next/image";

const PricingSection = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        className="absolute left-0 top-[10%] z-0 w-full"
        src={lineImg}
        alt="line-img"
      />

      <div className="relative z-10 px-5 py-8 text-center md:px-16 md:py-13">
        <small className="text-primary font-body text-[13px] font-bold">
          Pricing
        </small>

        <h2 className="pt-3 w-full font-heading font-semibold text-tw-black text-xl md:text-3xl leading-[150%]">
          Transparent Pricing, No Hidden Charges
        </h2>
        <PricingPlans />
      </div>
    </div>
  );
};
export default PricingSection;

