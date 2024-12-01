"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import SpeechBubble from "../atoms/SpeechBubble/Speechbubble";
import { FadeInWrapper } from "../atoms/animation/FadeInComponent";

// Custom Arrow Components
type CustomArrowProps = {
  onClick?: () => void;
};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-[-20px] top-1/4 md:top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <MdArrowBackIos className="text-white text-lg" />
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-[-20px] top-1/4 md:top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <MdArrowForwardIos className="text-white text-lg" />
  </div>
);

const CenterMode: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      image: "team/team.png",
      name: "Abhishek Gupta",
      description: ["마케팅 ·", "20+"],
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      speechBubble: {
        text: ["월 100만원", ""],
        colors: ["#00C696", "#40E2E8"],
        toolimg: "icons/money.svg",
      },
    },
    {
      id: 2,
      image: "team/team.png",
      name: "Abhishek Gupta",
      description: ["마케팅 ·", "20+"],
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`transition-all duration-300 ${
              activeIndex === index ? "opacity-100 scale-105" : "opacity-50"
            }`}
          >
            {card.speechBubble && (
              <FadeInWrapper>
                <div className="absolute -top-16 left-1/4">
                  <SpeechBubble
                    text={card.speechBubble.text}
                    colors={card.speechBubble.colors}
                    toolimg={card.speechBubble.toolimg}
                  />
                </div>
              </FadeInWrapper>
            )}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden pt-4">
              <img
                src={card.image}
                alt="logo"
                className="w-32 h-auto justify-center mx-auto my-0"
              />
              <div className="md:p-4 p-2 text-center">
                <h2 className="text-lg font-semibold text-center">{card.name}</h2>
                <div className="flex flex-wrap flex-row justify-center">
                  <p className="text-customBlue font-semibold">{card.description[0]}</p>
                  <p className="text-customBlue font-extrabold">{card.description[1]}</p>
                </div>
                <div className="flex flex-wrap flex-row mt-6 justify-center gap-2">
                  {card.skills.map((skill, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
