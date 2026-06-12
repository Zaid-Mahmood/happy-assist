"use client";
import Image from "next/image";
import { useFetchData } from "@/app/customhooks/useFetchData";
interface StrapiImage {
  url: string;
  alternativeText?: string;
}
interface FeaturesCard {
  id: number;
  title: string;
  description: string;
  image?: StrapiImage;
}
const FeaturesSection = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const {
    data: cards,
    loading,
    error,
  } = useFetchData<FeaturesCard>(`${baseUrl}/api/features-cards?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="bg-tw-blue px-5 py-8 md:py-13 md:px-16 text-center">
      <small className="text-primary font-body text-[13px] font-bold">
        Core Features
      </small>
      <h2 className="pt-3 w-full font-heading font-semibold text-tw-black text-xl md:text-3xl leading-[150%]">
        Explore What Your AI Partner Can Do for You
      </h2>

      <div className="pt-11 grid gap-6 grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          const iconUrl = card?.image?.url
            ? `${baseUrl}${card?.image.url}`
            : "";
          return (
            <div
              key={card.id}
              className="rounded-xl bg-white p-2 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-center rounded-lg bg-[#FCFCFC]">
                {iconUrl ? (
                  <Image
                    src={iconUrl}
                    alt={card.title}
                    width={40}
                    height={40}
                    unoptimized
                  />
                ) : (
                  <div className="w-[405px] h-[263px]"></div>
                )}
              </div>
              <div className="px-3 text-left">
                <h3 className="text-base font-bold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-2 pb-3 text-sm leading-[150%] text-[#8A8A8A]">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;

