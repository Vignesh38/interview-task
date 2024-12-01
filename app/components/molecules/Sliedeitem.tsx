// components/SlideItem.tsx
import React from 'react';

interface SlideItemProps {
  icon: JSX.Element;
  text: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row bg-white bg-opacity-10 items-center justify-start p-2 rounded-lg shadow-lg">
      <div className="mr-4 ml-1 w-12 h-auto">{icon}</div>
      <p className="text-center text-white text-sm font-medium">{text}</p>
    </div>
  );
};

export default SlideItem;
