
import React from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#F0F0F5]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#E0D6FF]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#beranda" className="text-xl font-bold text-[#1A1A2E]">FORTUNE SPACE.</a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#tentang-kami" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Tentang Kami</a>
          <a href="#kelas-workshop" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Kelas & Workshop</a>
          <a href="#sewa-ruang" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Sewa Ruang</a>
          <a href="#komunitas" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Komunitas</a>
        </nav>
        <a href="#kontak-faq">
            <Button>Hubungi Kami</Button>
        </a>
      </div>
    </header>
  );
};
