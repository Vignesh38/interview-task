"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface EmblaCarouselWithCardsProps {
  cards: Card[];
}

const EmblaCarouselWithCards: React.FC<EmblaCarouselWithCardsProps> = ({ cards }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start", // Ensures proper alignment for multiple slides
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const autoplay = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0); // Restart from the first slide if no next slide exists
      }
    }, 1000); // Autoplay interval

    embla.on("select", () => setSelectedIndex(embla.selectedScrollSnap()));

    return () => clearInterval(autoplay);
  }, [embla]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`embla__slide flex-[0_0_20%] p-2 transition-transform duration-300 ${
              index === selectedIndex
                ? "active-slide"
                : index === selectedIndex - 1 || index === selectedIndex + 1
                ? "nearby-slide"
                : ""
            }`}
          >
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="embla__buttons flex justify-between mt-4">
        <button
          onClick={() => embla && embla.scrollPrev()}
          className="arrow bg-blue-500 text-white rounded-full p-2"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={() => embla && embla.scrollNext()}
          className="arrow bg-blue-500 text-white rounded-full p-2"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarouselWithCards;
