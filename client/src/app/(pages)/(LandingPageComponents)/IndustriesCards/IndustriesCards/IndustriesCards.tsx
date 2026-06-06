import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type StrapiCard = {
    id: number;
    title: string;
    description: string;
    href: string;
    icon?: {
        url: string;
    };
};

async function getIndustryCards() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/industry-cards?populate=*`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch industry cards");
    }

    const data = await res.json();

    return data.data.map((item: StrapiCard) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        href: item.href,
        iconUrl: item.icon?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.icon.url}`
            : "",
    }));
}

export default async function IndustriesCards() {
    const cards = await getIndustryCards();
    // console.log(cards , "cardsSS")
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card: any) => {
                console.log(card , "dummC")
                return(
                <div
                    key={card.id}
                    className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                    <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8DC]">
                        <Image
                            src={card?.iconUrl}
                            alt={card?.name}
                            width={28}
                            height={28}
                        />
                    </div>

                    <h3 className="text-base font-bold text-[#111827]">
                        {card.title}
                    </h3>

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
            )})}
        </div>
    );
}