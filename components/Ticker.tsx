
import React from 'react';

interface TickerProps {
  items: string[];
}

export const Ticker: React.FC<TickerProps> = ({ items }) => {
  const repeatedItems = [...items, ...items, ...items, ...items]; // Repeat for seamless loop
  return (
    <div className="bg-[#E0D6FF] py-4 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xl font-bold text-[#1A1A2E] mx-4 uppercase">{item}</span>
            <div className="w-3 h-3 bg-[#00F5A0] rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
