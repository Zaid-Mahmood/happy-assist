"use client";
import PricingBannerImg from "@/assets/pricing-page-imgs/pricing-banner-img/banner.png";
import PricingTag from "@/assets/pricing-page-imgs/pricing-banner-img/price-tag.png";
import checkImg from "@/assets/home-page-imgs/pricing-section-imgs/check.png";
import { useState } from "react";
import Image from "next/image";
type PricingPlan = {
  id: number;
  name: string;
  price: string;
  description: string;
  subtitle?: string;
  perMonth : string;
  features: string[];
};
const PricingBanner = () => {
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$399",
      perMonth : " /month",
      description:
        "You can start small with our basic plan for basic business needs.",
      features: [
        "AI call handling when you’re offline.",
        "Blocks spam & telemarketers.",
        "Works with personal numbers (conditional forwarding).",
        "Completes intake & sends booking links.",
        "Instant summaries & transcripts.",
        "400 minutes included.",
        "Appointment scheduling.",
        "Lifetime support.",
      ],
    },
    {
      id: 2,
      name: "Professional Plan",
      price: "$499",
      perMonth : "/month",
      description:
        "If your business is scaling, our plan adapts to your business needs.",
      features: [
        "Everything in Basic, plus",
        "Instant calls for Facebook leads.",
        "Smart cancellation management.",
        "CRM & calendar integration.",
        "Advanced automation workflows.",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "Custom Price",
      perMonth : "",
      description:
        "Built for businesses that have high-end operations and complex business demands.",
      subtitle: "Covers everything in the Pro Plan, plus:",
      features: [
        "Everything in the professional plan, plus",
        "Advanced call routing and multi-location support.",
        "Deep CRM, calendar, and system integrations.",
        "Dedicated account manager.",
        "Advanced analytics and performance insights.",
        "Ongoing AI optimization and training.",
        "24/7 priority support.",
      ],
    },
  ];
  return (
    <section className="relative overflow-hidden pb-[52px]">
      <div className="relative h-[680px]">
        <Image
          src={PricingBannerImg}
          alt="pricing-banner"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute left-1/2 top-[12%] z-10 w-full max-w-[900px] -translate-x-1/2 px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl text-primary px-4 py-2 text-base font-medium bg-tw-blue cursor-pointer border border-tw-primary">
            <Image src={PricingTag} alt="pricing-tag" width={20} height={20} />
            Pricing Plan
          </div>
          <h1 className="font-heading mt-6 text-6xl font-bold tracking-tight text-tw-black md:text-5xl text-3xl tracking-[120%]">
            Choose a Plan That <span className="text-secondary"> Scales </span>{" "}
            <br /> with You
          </h1>
          <p className="mx-auto mt-3 max-w-2xl md:text-base leading-7 text-darkgray text-lg">
            No contracts, no minimums, and zero surprises. Choose a solution
            that fits your business needs perfectly.
          </p>
        </div>
      </div>
      <div className="relative mx-auto mt-[-200px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className=" relative h-full bg-white border border-[#BDBDBD] rounded-[20px] p-2 shadow-[0_0_20px_#0000001A] hover:border-[#80FFB5] hover:shadow-[0_0_35px_rgba(128,255,181,0.35)]"
            >
              <div className="rounded-2xl">
                <div className="p-3">
                  <h2 className="font-heading font-medium text-2xl text-tw-black">
                    {plan.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                    <p className=" text-base leading-6 text-darkgray">
                      {plan.description}
                    </p>
                  </div>
                  <hr className="text-tw-primary mt-3 mb-4" />
                  <div>
                    {plan.name !== "Enterprise Plan" ? (
                      <h4 className="font-body text-3xl font-bold leading-none text-tw-accent">
                        {plan.price}
                        <span className="text-darkgray font-normal text-base">{plan.perMonth}</span>
                      </h4>
                    ) : (
                      <h4 className="font-body text-3xl font-bold leading-none text-tw-accent">
                        {plan.price}
                      </h4>
                    )}
                  </div>
                </div>
                  <div className="space-y-3 px-5 py-3 bg-[#FAFAFA] rounded-xl  h-full">
                    <h2 className="text-darkgray text-[13px] font-bold">What’s included:</h2>

                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-base"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-text-blue-secondary flex-shrink-0">
                         <Image src={checkImg} alt = "check-img" />
                        </span>
                        <span className="text-base text-tw-black">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
              
              </div>
              <div className="">
                <button
                  onClick={() =>
                    window.open("#", "_blank", "noopener,noreferrer")
                  }
                  className="mt-4 cursor-pointer  w-full rounded-full px-6 py-3 text-sm font-semibold duration-300 text-white bg-tw-black hover:bg-black/10 hover:text-white/90"
                >
                  Get Started
                </button>
            </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;

