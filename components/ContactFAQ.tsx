
import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { Button } from './Button';
import { ArrowDownIcon } from './Icons';

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#4A4A6A]">
      <button onClick={onClick} className="w-full flex justify-between items-center py-5 text-left">
        <span className="font-semibold text-lg">{item.question}</span>
        <ArrowDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-5 text-[#A9A9B2]">{item.answer}</p>
      </div>
    </div>
  );
};


export const ContactFAQ: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="kontak-faq" className="py-24 bg-[#25253A] text-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl text-center mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami & Pertanyaan Umum</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
                 <p className="text-[#A9A9B2] mb-6">
                    Punya pertanyaan atau ingin memesan tur? Kirimkan pesan kepada kami dan tim kami akan segera menghubungi Anda.
                </p>
                <form className="space-y-4">
                    <input type="text" placeholder="Nama" className="w-full bg-[#1A1A2E] p-4 rounded-lg border border-[#4A4A6A] focus:outline-none focus:ring-2 focus:ring-[#00F5A0]"/>
                    <input type="email" placeholder="Email" className="w-full bg-[#1A1A2E] p-4 rounded-lg border border-[#4A4A6A] focus:outline-none focus:ring-2 focus:ring-[#00F5A0]"/>
                    <textarea placeholder="Pesan" rows={5} className="w-full bg-[#1A1A2E] p-4 rounded-lg border border-[#4A4A6A] focus:outline-none focus:ring-2 focus:ring-[#00F5A0]"></textarea>
                    <Button type="submit" className="w-full">Kirim Pesan</Button>
                </form>
            </div>
            <div>
                {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        item={faq} 
                        isOpen={openIndex === index} 
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
