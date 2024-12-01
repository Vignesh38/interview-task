"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import SpeechBubble from "../atoms/SpeechBubble/Speechbubble";
import {FadeInWrapper} from "../atoms/animation/FadeInComponent"

// Custom Arrow Components
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/4 md:top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
     <MdArrowBackIos className="text-white text-lg" />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/4 md:top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      
      <MdArrowForwardIos className="text-white text-lg" />
    </div>
  );
};

function CenterMode() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    prevArrow: <CustomPrevArrow />, // Use custom Previous Arrow
    nextArrow: <CustomNextArrow />, // Use custom Next Arrow
    responsive: [
    {
      breakpoint: 640, // For screens <= 640px
      settings: {
        slidesToShow: 1, // Show only one slide
        centerPadding: "20px", // Adjust padding for smaller screens
      },
    },
  ],
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {/* Card 1 */}
        <div
          className={`transition-all duration-300 ${
            activeIndex === 0 ? "opacity-100 scale-105" : "opacity-50"
          }`}
        >
            <FadeInWrapper><div className="absolute -top-16 left-1/4">
            <SpeechBubble
  text={['월 100만원', '']}
  colors={['#00C696', '#40E2E8']}
  toolimg="icons/money.svg"
/>
</div>
            
            </FadeInWrapper>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden pt-4">
            <img
              src="team/team.png"
              alt="logo"
              className="w-32 h-auto justify-center mx-auto my-0"
            />
            <div className="md:p-4 p-2 text-center">
              <h2 className="text-lg font-semibold text-center">Abhishek Gupta</h2>
              <div className="flex flex-wrap flex-row justify-center">
                <p className="text-customBlue font-semibold">마케팅 ·</p>
                <p className="text-customBlue font-extrabold">20+</p>
              </div>
              <div className="flex flex-wrap flex-row mt-6 justify-center gap-2 ">
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">마케팅 콘텐츠 제작</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">인스타그램 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">트위터 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">블로그 글 작성</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`transition-all duration-300 ${
            activeIndex === 1 ? "opacity-100 scale-105" : "opacity-50"
          }`}
        >
            
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden pt-4">
            <img
              src="team/team.png"
              alt="logo"
              className="w-32 h-auto justify-center mx-auto my-0"
            />
            <div className="md:p-4 p-2 text-center">
              <h2 className="text-lg font-semibold text-center">Abhishek Gupta</h2>
              <div className="flex flex-wrap flex-row justify-center">
                <p className="text-customBlue font-semibold">마케팅 ·</p>
                <p className="text-customBlue font-extrabold">20+</p>
              </div>
              <div className="flex flex-wrap flex-row mt-6 justify-center gap-2">
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">마케팅 콘텐츠 제작</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">인스타그램 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">트위터 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">블로그 글 작성</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`transition-all duration-300 ${
            activeIndex === 2 ? "opacity-100 scale-105" : "opacity-50"
          }`}
        >
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden pt-4">
            <img
              src="team/team.png"
              alt="logo"
              className="w-32 h-auto justify-center mx-auto my-0"
            />
            <div className="md:p-4 p-2 text-center">
              <h2 className="text-lg font-semibold text-center">Abhishek Gupta</h2>
              <div className="flex flex-wrap flex-row justify-center">
                <p className="text-customBlue font-semibold">마케팅 ·</p>
                <p className="text-customBlue font-extrabold">20+</p>
              </div>
              <div className="flex flex-wrap flex-row mt-6 justify-center gap-2">
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">마케팅 콘텐츠 제작</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">인스타그램 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">트위터 관리</p>
                <p className="text-gray-600 font-semibold rounded-md p-2 border border-footerCta">블로그 글 작성</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
