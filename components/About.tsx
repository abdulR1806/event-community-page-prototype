
import React from 'react';
import { YoutubeIcon, SnapchatIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#25253A] text-[#F0F0F5]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Creator Summit?</h2>
        <p className="text-[#A9A9B2] leading-relaxed mb-8">
          Creator Summit is a global gathering of creators and entrepreneurs. It is the ultimate place to find your passion, your next partner, a brand deal, or at least 10 friends. Experts will take the stage and present their knowledge, experiences and strategies only for you to be the next biggest creator in your country.
        </p>
        <p className="text-[#A9A9B2] leading-relaxed">
          The Creator Summit is going to be our last biggest event of the year, and we are bringing the top creators from Singapore, Malaysia, Thailand, Indonesia, Philippines and many other countries for 2 full days. See you there!
        </p>
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#A9A9B2] mb-6 uppercase tracking-widest">Attended Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3 text-[#A9A9B2]">
              <SnapchatIcon className="w-8 h-8"/>
              <span className="text-2xl font-medium">Snapchat</span>
            </div>
             <div className="flex items-center gap-3 text-[#A9A9B2]">
              <YoutubeIcon className="w-8 h-8"/>
              <span className="text-2xl font-medium">YouTube</span>
            </div>
            <div className="flex items-center gap-3 text-[#A9A9B2]">
              <SnapchatIcon className="w-8 h-8"/>
              <span className="text-2xl font-medium">Snapchat</span>
            </div>
             <div className="flex items-center gap-3 text-[#A9A9B2]">
              <YoutubeIcon className="w-8 h-8"/>
              <span className="text-2xl font-medium">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};