"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
type BannerProps = {
  shortTitle: string;
  title: React.ReactNode;
  description: string;
  image: StaticImageData;
  btnPrimaryText?: string;
  btnSecondaryText?: string;
  primaryHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

const BannerWrapper = ({
  shortTitle,
  title,
  description,
  image,
  btnPrimaryText,
  btnSecondaryText,
  primaryHref,
  onPrimaryClick,
  onSecondaryClick,
}: BannerProps) => {
  const router = useRouter();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else if (primaryHref) {
      window.open(primaryHref, "_blank", "noopener,noreferrer");
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      router.push("/aboutus");
    }
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full flex-col items-center gap-8 px-4 pt-10 sm:px-6 md:px-10 lg:flex-row lg:py-13 xl:px-0">
        <div className="w-full text-center md:text-left">
          <small className="font-body text-darkgray font-bold text-[13px] pb-3">
            {shortTitle}
          </small>
          <h1 className="h-auto text-[28px] font-semibold leading-[150%] text-tw-black sm:text-[36px] lg:h-[144px] lg:text-[48px] font-heading">
            {title}
          </h1>

          <p className="mt-3 h-auto w-full whitespace-pre-line text-darkgray sm:text-[18px] pb-4 lg:w-full lg:pb-11 lg:text-base font-body">
            {description}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:items-center">
            {btnPrimaryText && (
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group flex h-[42px] w-full items-center justify-center gap-2 rounded-full border border-secondary px-5 text-base font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-white sm:w-fit cursor-pointer"
              >
                {btnPrimaryText}

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary bg-white transition-colors duration-300">
                  <FaArrowRight className="text-[10px] text-secondary transition-transform duration-300 group-hover:translate-x-[1px]" />
                </span>
              </button>
            )}

            {btnSecondaryText && (
              <button
                type="button"
                onClick={handleSecondaryClick}
                className="group flex h-[42px] w-full items-center justify-center gap-2 rounded-full border border-secondary px-5 text-base font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-white sm:w-fit cursor-pointer"
              >
                {btnSecondaryText}

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary bg-white transition-colors duration-300">
                  <FaArrowRight className="text-[10px] text-secondary transition-transform duration-300 group-hover:translate-x-[1px]" />
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <Image
            src={image}
            alt="banner"
            className="h-[516px]  max-w-[500px] sm:max-w-[500px] lg:max-w-[661px]"
            priority
          />
        </div>
      </div>

      {/* <DividerLine /> */}
    </section>
  );
};

export default BannerWrapper;
