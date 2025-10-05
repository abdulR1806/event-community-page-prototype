
import React from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#F0F0F5]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#E0D6FF]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-[#1A1A2E]">CREATORSUMMIT.</a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Home</a>
          <a href="#" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">2024 Cities</a>
          <a href="#" className="text-[#4A4A6A] hover:text-[#1A1A2E] transition-colors">Speakers</a>
        </nav>
        <Button>Become a Partner</Button>
      </div>
    </header>
  );
};