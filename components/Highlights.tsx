
import React from 'react';
import { PlayIcon } from './Icons';

const highlightsData = [
  { title: 'Learn', image: 'https://picsum.photos/seed/learn/500/500' },
  { title: 'Network', image: 'https://picsum.photos/seed/network/500/500' },
  { title: '2024 Recap', image: 'https://picsum.photos/seed/recap/500/500' },
  { title: 'Reviews', image: 'https://picsum.photos/seed/reviews/500/500' },
];

const HighlightCard: React.FC<{ title: string; image: string; }> = ({ title, image }) => {
  return (
    <div className="bg-white border border-[#E0D6FF] rounded-2xl p-6 group relative overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg"/>
      <div className="absolute inset-6 bg-black/30 rounded-lg"></div>
      <h3 className="absolute top-8 left-8 text-3xl font-bold text-white">{title}</h3>
      <button className="absolute bottom-8 right-8 w-16 h-16 bg-[#00F5A0]/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#00F5A0] group-hover:scale-110 transition-all duration-300">
        <PlayIcon className="w-8 h-8 text-[#1A1A2E]"/>
      </button>
    </div>
  );
}

export const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlightsData.map((item, index) => (
            <HighlightCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};