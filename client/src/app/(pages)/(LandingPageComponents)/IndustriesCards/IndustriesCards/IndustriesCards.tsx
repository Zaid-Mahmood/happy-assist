"use client";
import { useFetchData } from "@/app/customhooks/useFetchData";
type IndustryCard = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon?: {
    url: string;
  };
};
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function IndustriesCards() {
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const {
    data: cards,
    loading,
    error,
  } = useFetchData<IndustryCard>(`${baseUrl}/api/industry-cards?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => {
        const iconUrl = card.icon?.url ? `${baseUrl}${card.icon.url}` : "";
        return (
          <div
            key={card.id}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8DC]">
              {iconUrl && (
                <Image
                  src={iconUrl}
                  alt={card.title}
                  width={40}
                  height={40}
                  unoptimized
                />
              )}
            </div>
            <h3 className="text-base font-bold text-[#111827]">{card.title}</h3>

            <p className="mt-2 text-sm leading-[150%] text-[#8A8A8A]">
              {card.description}
            </p>

            <Link
              href={card.href}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
            >
              Learn More
              <FaArrowRight className="text-[11px]" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
