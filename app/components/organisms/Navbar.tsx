"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../../components/atoms/Button/Buttons";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="grid grid-cols-1 sm:grid-cols-[15%_70%_15%] gap-4 mx-auto px-4 py-4 justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="logo/logo.svg" className="logo"></img>
        </div>

        {/* Links for larger screens */}
        <div className="hidden text-white md:flex items-center justify-center space-x-6">
          <Link href="/">
          
          </Link>
          

          {/* Dropdown */}
          <div className="relative text-gray-800">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 hover:text-blue-500 flex items-center space-x-1"
            >
              <span className="text-white">채용</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 p-4 bg-white border rounded shadow-md">
                <Link className="text-gray p-2" href="/services/web-development">
                  Test
                </Link>
                
              </div>
            )}
          </div>

          <Link href="/">
          해외 개발자 활용 서비스
          </Link>
        </div>



        <div className="cta flex justify-end">
        <Button
        text="문의하기"
        url="https://google.com"
        className="mt-4"
      />
        </div>




        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link href="/">
            Home
          </Link>
         

          {/* Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="pl-4">
                <Link href="/services/web-development">
                  web
                </Link>
                
              </div>
            )}
          </div>

          <Link href="/contact">
            Contact
          </Link>
        </div>
      )}
      
    </nav>
  );
}
