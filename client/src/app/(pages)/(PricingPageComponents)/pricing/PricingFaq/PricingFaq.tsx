"use client";
import CommonAccordion from "../../../(CommonComponents)/CommonAccordion/CommonAccordion";
import { useFetchData } from "@/app/customhooks/useFetchData";
import StillQuestions from "@/app/(pages)/(LandingPageComponents)/HomePageFaqs/StillQuestions";
type PricingFaq = {
  id: number;
  faqHeading: string;
  faqDesc: string;
};
const PricingFaq = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const {
    data: faqs,
    loading,
    error,
  } = useFetchData<PricingFaq>(
    `${baseUrl}/api/home-faqs?filters[page][$eq]=pricing`,
  );

  if (loading) return <p>Loading Pricing FAQs...</p>;
  if (error) return <p>{error}</p>;
  const faqItems = faqs.map((item) => ({
    title: item.faqHeading,
    content: item.faqDesc,
  }));
  return (
    <section className="px-5 py-8 md:px-16 md:py-13">
      <div className="text-center pb-11">
        <small className="text-primary font-body text-[13px] font-bold">
          FAQs
        </small>
        <h2 className="pt-3 w-full font-heading font-semibold text-tw-black text-xl md:text-3xl leading-[150%]">
          Got any questions? We’ve got you covered.
        </h2>
      </div>
      <div className="grid md:grid-cols-[3fr_2fr] grid-cols-1 place-items-center md:gap-x-11">
        <div className="w-full">
          <CommonAccordion items={faqItems} />
        </div>
        <div><StillQuestions  /></div>
      </div>
    </section>
  );
};

export default PricingFaq;

