
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center text-[#1A1A2E] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/seed/hero/1920/1080" alt="Crowd at a summit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F5] via-[#F0F0F5]/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <p className="text-lg text-[#4A4A6A] mb-2">Creator summit is for innovators who build something from nothing.</p>
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tighter">
            The <br />
            <span className="text-[#00F5A0]">Creator</span> <br />
            Gathering
          </h1>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <a href="#" className="relative w-40 h-40 flex items-center justify-center text-center text-[#1A1A2E] font-bold p-4 bg-[#00F5A0] rounded-full transition-transform hover:scale-110">
          BECOME A PARTNER
        </a>
      </div>
    </section>
  );
};