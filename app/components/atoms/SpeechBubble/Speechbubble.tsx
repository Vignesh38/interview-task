import React from "react";

interface SpeechBubbleProps {
  text: string[]; // Array of text segments
  colors: string[]; // Array of colors corresponding to each text segment
  toolimg?: string; // Optional image source
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, colors, toolimg }) => {
  return (
    <div className="relative inline-flex items-center bg-white text-white text-sm font-medium px-2 py-2 rounded-md">
      {/* Conditionally render the image if toolimg is provided */}
      {toolimg && (
        <div className="circle w-8 h-8 mr-2 bg-customLightGreen rounded-full flex justify-center align-middle items-center">
          <img
            src={toolimg}
            alt="Tool Icon"
            className="w-6 h-6 inline-block"
          />
        </div>
      )}

      {/* Render the text segments with different colors */}
      <div className="flex flex-wrap">
        {text.map((segment, index) => (
          <span
            key={index}
            className={`font-bold text-xl`}
            style={{ color: colors[index] }} // Dynamically apply color
          >
            {segment}
          </span>
        ))}
      </div>

      {/* Speech bubble tail */}
      <div className="absolute bottom-0 left-2/4 w-4 h-4 bg-white rotate-45 transform translate-y-1/2 -translate-x-3 -z-0"></div>
    </div>
  );
};

export default SpeechBubble;
