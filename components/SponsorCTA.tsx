
import React from 'react';
import { Button } from './Button';

export const SponsorCTA: React.FC = () => {
    return (
        <section className="py-24 bg-[#1A1A2E]">
            <div className="container mx-auto px-4">
                <div className="bg-[#E0D6FF] text-[#1A1A2E] rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase">Sponsor a <br/>Creator Summit<br/> Near You</h2>
                        <Button className="mt-8 bg-[#1A1A2E] text-[#F0F0F5] hover:bg-[#25253A]">Get in Touch</Button>
                    </div>
                    <div className="relative z-10 mt-8 md:mt-0">
                        <img src="https://picsum.photos/seed/sponsor/400/500" alt="Sponsor" className="rounded-lg w-64 md:w-80 object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
