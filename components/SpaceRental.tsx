
import React from 'react';
import type { Space } from '../types';
import { Button } from './Button';

interface SpaceCardProps {
  space: Space;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="bg-[#25253A] rounded-2xl overflow-hidden group border border-[#4A4A6A] text-center">
        <div className="h-64 overflow-hidden">
            <img src={space.image} alt={space.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white">{space.name}</h3>
            <p className="text-[#A9A9B2] mt-1">{space.capacity}</p>
            <Button variant="secondary" className="mt-4 w-full">Lihat Detail</Button>
        </div>
    </div>
  );
};

interface SpaceRentalProps {
  spaces: Space[];
}

export const SpaceRental: React.FC<SpaceRentalProps> = ({ spaces }) => {
  return (
    <section id="sewa-ruang" className="py-24 bg-[#1A1A2E] text-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Venue Profesional, Atmosfer Inspiratif.</h2>
            <p className="text-[#A9A9B2] leading-relaxed">
                Kami menyediakan ruang ideal bagi komunitas lokal untuk berkumpul, berkreasi, dan bertumbuh. Terletak di lokasi yang strategis, Fortune Space adalah kanvas sempurna untuk acaramu, dilengkapi fasilitas modern dan tim profesional.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {spaces.map((space, index) => (
            <SpaceCard key={index} space={space} />
          ))}
        </div>
      </div>
    </section>
  );
};
