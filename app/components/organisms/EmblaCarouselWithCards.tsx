"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Card {
  id: number;
  title: string;
  description: string;
  year: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  imageUrl: string;
}

interface EmblaCarouselWithCardsProps {
  cards: Card[];
}

const EmblaCarouselWithCards: React.FC<EmblaCarouselWithCardsProps> = ({ cards }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start", // Ensures proper alignment for multiple slides
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const autoplay = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(1); // Restart from the first slide if no next slide exists
      }
    }, 100000000000000000); // Adjust autoplay interval as needed

    embla.on("select", () => setSelectedIndex(embla.selectedScrollSnap()));

    return () => clearInterval(autoplay);
  }, [embla]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`embla__slide flex-[0_0_30%] p-2 transition-transform duration-300 ${
              index === selectedIndex
                ? "active-slide"
                : index === selectedIndex - 1
                ? "prev-slide" // Class for the previous slide
                : index === selectedIndex + 1
                ? "next-slide" // Class for the next slide
                : ""
            }`}
          >
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden pt-4">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-32 h-auto justify-center mx-auto my-0"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-center">{card.title}</h2>
                <div className="flex flex-wrap flex-row justify-center">
                <p className="text-customBlue font-semibold">{card.description}</p>
                <p className="text-customBlue font-extrabold">{card.year}</p>
                </div>
                <div className="flex flex-wrap flex-row mt-6 justify-center gap-2">
                  <p className="text-gray-600 font-semibold">{card.label1}</p>
                  <p className="text-gray-600 font-semibold">{card.label2}</p>
                  <p className="text-gray-600 font-semibold"> {card.label3} </p>
                  <p className="text-gray-600 font-semibold">{card.label4}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="embla__buttons flex justify-between mt-4">
        <button
          onClick={() => embla && embla.scrollPrev()}
          className="arrow"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={() => embla && embla.scrollNext()}
          className="arrow"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarouselWithCards;
