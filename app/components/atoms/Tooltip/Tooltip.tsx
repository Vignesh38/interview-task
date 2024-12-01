"use client";
import React, { useState } from "react";

interface TooltipProps {
  content: string;
  position?: "top" | "right" | "bottom" | "left"; // Tooltip position
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, position = "top", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Define the tooltip position classes based on the selected position
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    right: "top-1/2 left-full transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "top-1/2 right-full transform -translate-y-1/2 mr-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute z-10 px-3 py-2 text-white bg-black rounded-md text-sm ${positionClasses[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
