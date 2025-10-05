import React, { useState } from 'react';
import type { Workshop } from '../types';
import { ArrowRightIcon, ArrowLeftIcon } from './Icons';

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden group border border-[#E0D6FF]">
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
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(workshops.length / cardsPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };
  
  const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
    
  const chunkedWorkshops = chunk(workshops, cardsPerPage);

  return (
    <section id="kelas-workshop" className="py-24 bg-[#E0D6FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Nyalakan Percikan Kreatifmu.</h2>
            <p className="text-[#25253A] leading-relaxed">
                Kami percaya setiap orang punya potensi kreatif yang menunggu untuk dieksplorasi. Kelas dan workshop kami dirancang untuk semua level, dari pemula hingga mahir. Ini bukan soal kesempurnaan; ini soal proses, penemuan, dan kegembiraan berkarya bersama.
            </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {chunkedWorkshops.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {page.map((workshop, workshopIndex) => (
                    <WorkshopCard key={workshopIndex} workshop={workshop} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevPage}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition z-10"
            aria-label="Previous workshop"
          >
            <ArrowLeftIcon className="w-6 h-6 text-[#1A1A2E]" />
          </button>
          <button 
            onClick={nextPage}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition z-10"
            aria-label="Next workshop"
          >
            <ArrowRightIcon className="w-6 h-6 text-[#1A1A2E]" />
          </button>

        </div>
        
        <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                        currentPage === index ? 'bg-[#1A1A2E]' : 'bg-[#1A1A2E]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};