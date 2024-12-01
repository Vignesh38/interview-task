// components/EmblaCarousel.tsx
"use client";

import React, { useEffect } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import SlideItem from '../molecules/Sliedeitem';


const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = EmblaCarouselReact({
    slidesToScroll: 1,
    align: 'start',
    loop: true, // Enable looping if desired
  });

  const slides = [
    { icon: <img src='icons/icon-1.svg' />, text: '해외 마케팅' },
    { icon: <img src='icons/icon-2.svg' />, text: '퍼블리셔' },
    { icon: <img src='icons/icon-3.svg' />, text: '캐드원(제도사)' },
    { icon: <img src='icons/icon-4.svg' />, text: '해외 세일즈' },
    { icon: <img src='icons/icon-5.svg' />, text: '해외 CS' },
    { icon: <img src='icons/icon-2.svg' />, text: '해외 마케팅' },
    { icon: <img src='icons/icon-1.svg' />, text: '캐드원(제도사)' },
    // Add more slides if needed
  ];

  // Autoplay functionality
  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext(); // Scroll to the next slide
      }, 5000); // Change the interval time (in ms) as needed

      // Clear autoplay interval on component unmount
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="embla usp w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container usp flex">
        {slides.map((slide, index) => (
          <div key={index} className="embla__slide usp flex-shrink-0 w-full ">
            <SlideItem icon={slide.icon} text={slide.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
