import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative h-[75vh] min-h-[600px] flex items-center text-[#1A1A2E] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/seed/fortunespace/1920/1080" alt="Creative activities in a vibrant space" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F5] via-[#F0F0F5]/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Temukan Ruangmu untuk Tumbuh dan Berkarya.
          </h1>
          <p className="text-lg text-[#4A4A6A] mt-6 max-w-2xl mx-auto">
            Fortune Space adalah rumah bagi para kreator, pembelajar, dan komunitas. Ikuti kelas inspiratif atau wujudkan acaramu di venue kreatif kami.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#kelas-workshop"><Button>Lihat Jadwal Kelas</Button></a>
            <a href="#sewa-ruang"><Button variant="secondary" className="bg-white/50 backdrop-blur-sm border-gray-300 hover:bg-white text-[#1A1A2E]">Jelajahi Ruang Kami</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};