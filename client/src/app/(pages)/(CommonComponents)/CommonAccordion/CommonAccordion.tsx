"use client";
import Image from "next/image";
import upArrow from "@/assets/home-page-imgs/faqs-imgs/up-arrow.png";
import downArrow from "@/assets/home-page-imgs/faqs-imgs/down-arrow.png";

import { useState } from "react";
interface AccordionItem {
  title: string;
  content: string;
}

interface CommonAccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

const CommonAccordion = ({
  items,
  defaultOpenIndex = 0,
}: CommonAccordionProps) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={index}
            className={`py-8 pl-5 pr-13 m-0
    ${!isOpen ? "border-t border-tw-primary" : ""}
    ${index === items.length - 1 && !isOpen ? "border-b border-tw-primary" : ""}
    ${isOpen ? "bg-[#FAFAFA] text-tw-accordion" : ""}
  `} >
            <div className="flex items-start justify-between gap-y-2 gap-x-4">
              <p className="text-base md:text-base font-body text-tw-accordion pb-2 w-full">
                {item.title}
              </p>
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <Image
                  src={isOpen ? upArrow : downArrow}
                  alt="toggle-arrow"
                  className="transition-transform duration-300 cursor-pointer mt-2"
                />
              </button>
            </div>
            {isOpen && (
              <div className="font-body text-sm md:text-[14px] text-tw-lightgray">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommonAccordion;

