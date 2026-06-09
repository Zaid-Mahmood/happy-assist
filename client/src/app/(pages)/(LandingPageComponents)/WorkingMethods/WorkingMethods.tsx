"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface StrapiImage {
  url: string;
  alternativeText?: string;
}

interface StepCard {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  image: StrapiImage;
}

const WorkingMethods = () => {
  const [cards, setCards] = useState<StepCard[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/step-cards?populate=*`
      );

      setCards(data.data);
    };

    getCards();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("working-methods");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const progress = Math.min(
        Math.max((window.innerHeight / 2 - sectionTop) / sectionHeight, 0),
        1
      );

      if (progress < 0.33) {
        setActiveStep(0);
      } else if (progress < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!cards.length) return null;

  const activeCard = cards[activeStep];

  const imageUrl = activeCard?.image?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${activeCard.image.url}`
    : "";

  return (
    <section id="working-methods" className="px-5 md:px-0">
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
        <div>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={activeCard.image?.alternativeText || activeCard.title}
              width={520}
              height={400}
              className="h-auto w-full rounded-xl object-cover"
            />
          )}
        </div>

        <div className="grid grid-cols-[56px_1fr] items-start gap-5 md:flex md:items-center md:gap-x-20">
          <div className="flex flex-col items-center">
            {cards.map((card, index) => {
              const isCompleted = index < activeStep;
              const isCurrent = index === activeStep;

              return (
                <div key={card.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 md:h-12 md:w-12 ${
                      isCurrent
                        ? "border-2 border-[#009CA6]"
                        : "border-2 border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 md:h-9 md:w-9 ${
                        isCurrent || isCompleted
                          ? "bg-[#009CA6] text-white"
                          : "bg-[#D9D9D9] text-white"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </button>

                  {index !== cards.length - 1 && (
                    <div className="relative h-16 w-[2px] overflow-hidden bg-[#D9D9D9] md:h-20">
                      <div
                        className={`absolute left-0 top-0 w-full bg-[#009CA6] transition-all duration-500 ${
                          index < activeStep ? "h-full" : "h-0"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="max-w-md pt-1 md:pt-0">
            <h3 className="font-heading text-lg font-bold leading-[130%] text-[#262626] md:text-xl">
              {activeCard.title}
            </h3>

            <p className="mt-3 font-body text-sm leading-[150%] text-[#656565] md:text-base">
              {activeCard.description}
            </p>

            <Link
              href={activeCard.ctaLink || "#"}
              className="mt-5 inline-flex rounded-full border border-[#262626] px-6 py-2.5 text-sm font-medium text-[#262626] md:px-8 md:py-3 hover:bg-black hover:bg-black/5"
            >
              {activeCard.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingMethods;
