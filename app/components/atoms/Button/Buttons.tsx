// components/Button.tsx

import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  text: string;
  url: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, url, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url); // Redirect to the specified URL
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-white text-customBlue font-semibold rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
