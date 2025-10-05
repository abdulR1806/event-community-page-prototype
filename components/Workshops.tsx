import React from 'react';
import type { Workshop } from '../types';
import { ArrowRightIcon } from './Icons';

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl overflow-hidden group border border-[#E0D6FF]">
      <div className="h-64 overflow-hidden">
        <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <p className="text-xs text-[#4A4A6A]">{workshop.date}</p>
        <h3 className="text-2xl font-bold text-[#1A1A2E] mt-2 h-16">{workshop.title}</h3>
        <p className="text-sm font-semibold text-[#00F5A0] mt-1">{workshop.category}</p>
      </div>
      <a href="#" className="flex items-center justify-between p-6 bg-[#E0D6FF] group-hover:bg-[#00F5A0] transition-colors duration-300">
        <span className="font-semibold text-[#1A1A2E]">DAFTAR SEKARANG</span>
        <ArrowRightIcon className="w-5 h-5 text-[#1A1A2E]" />
      </a>
    </div>
  );
};

interface WorkshopsProps {
  workshops: Workshop[];
}

export const Workshops: React.FC<WorkshopsProps> = ({ workshops }) => {
  return (
    <section id="kelas-workshop" className="py-24 bg-[#E0D6FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Nyalakan Percikan Kreatifmu.</h2>
            <p className="text-[#25253A] leading-relaxed">
                Kami percaya setiap orang punya potensi kreatif yang menunggu untuk dieksplorasi. Kelas dan workshop kami dirancang untuk semua level, dari pemula hingga mahir. Ini bukan soal kesempurnaan; ini soal proses, penemuan, dan kegembiraan berkarya bersama.
            </p>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar -mx-4 px-4">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={index} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
};