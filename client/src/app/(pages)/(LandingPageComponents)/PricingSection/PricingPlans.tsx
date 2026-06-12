"use client";

import { useFetchData } from "@/app/customhooks/useFetchData";
import rightArrow from "@/assets/pricing-section-imgs/arrow.png";
import checkArrow from "@/assets/pricing-section-imgs/check.png";
import Image from "next/image";
import Link from "next/link";
type StrapiTextChild = {
  text?: string;
};

type StrapiListItem = {
  children?: StrapiTextChild[];
};

type StrapiBlock = {
  children?: StrapiListItem[];
};
type PricingCard = {
  id: number;
  planType: string;
  planDescription: string;
  Rate: string;
  pricingDetail: string;
  details: StrapiBlock[];
  href: string;
};

const PricingPlans = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const {
    data: cards,
    loading,
    error,
  } = useFetchData<PricingCard>(`${baseUrl}/api/pricings?sort=order:asc`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pt-11">
      <div className="space-y-6">
        {cards.map((item) => {
          const detailsList =
            item.details
              ?.flatMap((block) => block.children || [])
              ?.map((child) => child.children?.[0]?.text?.trim())
              ?.filter(Boolean) || [];

          return (
            <div
              key={item.id}
              className="rounded-4xl border border-tw-primary bg-white p-3 text-left shadow-[0px_0px_35px_rgba(0,0,0,0.06)]"
            >
              <h2 className="font-heading text-2xl font-medium text-[#262626] p-3">
                {item.planType}
              </h2>

              <p className="mt-2 font-body text-base text-[#BDBDBD] px-3">
                {item.planDescription}
              </p>
              <hr className="text-tw-primary mx-3 my-3" />
              <div className="mt-6 flex items-center justify-between gap-4 font-heading px-3">
                <p className="font-heading text-3xl md:text-5xl font-semibold text-tw-accent">
                  <span className="text-xl">$ </span>
                  {item.Rate} <span className="text-xl">/ month</span>
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-x-2 rounded-full bg-secondary p-4 md:px-[33px] md:py-4 text-white  text-xs md:text-base w-52 md:w-auto"
                >
                 <span > {item.pricingDetail} </span>
                  <Image src={rightArrow} alt="right-arrow" />
                </Link>
              </div>
              <div className="mt-5 rounded-xl bg-[#FAFAFA] p-4 font-body">
                <p className="mb-3 text-xs font-bold text-darkgray">
                  What&apos;s included:
                </p>

                <ul className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                  {detailsList.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-[#262626]"
                    >
                      <Image
                        src={checkArrow}
                        alt="check-arrow"
                        width={20}
                        height={20}
                        className="mt-[2px] md:w-5 h-5 w-4 h-4 object-contain"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;

