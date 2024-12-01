"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible
    initialSlide: 0,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const profiles = [
    {
      name: "Abhishek Guptaaa",
      role: "마케팅",
      image: "/team/team.png", // Replace with your image path
      details: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
      year: "2+",
    },
    {
      name: "Abhishek Guptabbb",
      role: "마케팅",
      image: "/team/team.png", // Replace with your image path
      details: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
      year: "2+",
    },
    {
        name: "Abhishek Guptaccc",
        role: "마케팅",
        image: "/team/team.png", // Replace with your image path
        details: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
        year: "2+",
      },
    // Add more profiles if needed
  ];

  return (
    <div className="relative w-full px-4">
      <Slider {...settings}>
        {profiles.map((profile, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg text-center px-6 py-4 max-w-xs mx-auto my-0">
              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Profile Name */}
              <h3 className="text-lg font-semibold text-center">{profile.name}</h3>

              {/* Role and Year */}
              <p className="text-customBlue font-semibold">
                {profile.role} . {profile.year}
              </p>

              {/* Details */}
              <ul className="text-gray-600 font-semibold flex flex-wrap gap-2 text-sm mt-2">
                {profile.details.map((detail, idx) => (
                  <li key={idx} className="flex-none">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfileCarousel;
