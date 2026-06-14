"use client";

import { useState, useEffect } from "react";
import { useFetchData } from "@/app/customhooks/useFetchData";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import blogquote from "@/assets/home-page-imgs/client-reviews-imgs/quotes.png";

type ClientReviewCard = {
  id: number;
  review: string;
  Rating: number;
  img: {
    url: string;
  };
  name: string;
  role: string;
};

const ClientReviews = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const {
    data: cards,
    loading,
    error,
  } = useFetchData<ClientReviewCard>(`${baseUrl}/api/testimonials?populate=*`);

  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);
  const toggleReview = (id: number) => {
    setExpandedReviews((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <section className="px-5 py-8 text-center md:px-16 md:py-13">
      <small className="font-body text-[13px] font-bold text-primary">
        Testimonials
      </small>

      <h2 className="pt-3 font-heading text-xl font-semibold md:text-3xl">
        Hear From Our Clients
      </h2>

      <div className="mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-3"
            >
              {cards
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide,
                )
                .map((item) => {
                  const authorImgUrl = item.img?.url
                    ? `${baseUrl}${item.img.url}`
                    : "";
                  return (
                    <div key={item.id}>
                      <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 text-left">
                        <Image
                          src={blogquote}
                          alt="quote"
                          width={32}
                          height={32}
                        />

                        <div className="mt-11 flex items-center gap-1">
                          {Array.from({ length: item.Rating }).map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-xs text-yellow-400"
                            />
                          ))}
                          <span className="ml-1 text-xs text-[#666]">
                            {item.Rating}.0
                          </span>
                        </div>

                        <p className={`text-sm italic leading-[170%] text-[#666] ${expandedReviews ? 'h-fit' : 'h-5'}`}>
                          {expandedReviews.includes(item.id)
                            ?  item.review
                            : item.review.length > 80
                              ?  `${item.review.slice(0, 80)}...`
                              : item.review}
                        </p>
                        {item.review.length > 80 && (
                          <button
                            onClick={() => toggleReview(item.id)}
                            className="mt-2 text-sm font-medium text-primary hover:underline cursor-pointer"
                          >
                            {expandedReviews.includes(item.id)
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </div>
                      <div className="mt-8 flex items-center gap-3">
                        {authorImgUrl && (
                          <Image
                            src={authorImgUrl}
                            alt={item.name}
                            width={34}
                            height={34}
                            unoptimized
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <h4 className="font-body text-sm text-left font-medium text-[#262626]">
                            {item.name}
                          </h4>
                          <p className="font-body text-xs text-[#A3A3A3]">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {cards.length > 3 && (
        <div className="mt-8 flex justify-center gap-3 hidden md:block">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-[3px] rounded-full transition-all cursor-pointer ${
                activeSlide === index ? "w-8 bg-[#262626]" : "w-6 bg-[#E5E5E5]"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ClientReviews;

