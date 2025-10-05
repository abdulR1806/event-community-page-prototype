
import React from 'react';

export const CommunityCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#E0D6FF] text-[#1A1A2E]">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
          Come learn how to build a business from the world's
          <span className="text-[#25253A] italic"> most successful </span>
          online entrepreneurs and the secrets of going
          <span className="text-[#25253A] italic"> viral on social media </span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
            <a href="#" className="bg-[#00F5A0] text-[#1A1A2E] font-bold text-lg rounded-full w-48 h-48 flex items-center justify-center text-center p-6 transition-transform hover:scale-110 duration-300">
                JOIN THE COMMUNITY
            </a>
        </div>
      </div>
    </section>
  );
};
