
import React from 'react';
import type { Speaker } from '../types';
import { Button } from './Button';
import { InstagramIcon, XIcon, TikTokIcon } from './Icons';

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
    return (
        <div className="flex-shrink-0 w-80 bg-[#1A1A2E] rounded-2xl p-6 text-center border border-[#4A4A6A]">
            <img src={speaker.image} alt={speaker.name} className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#4A4A6A]"/>
            <h3 className="text-2xl font-bold mt-4">{speaker.name}</h3>
            <p className="text-[#A9A9B2] text-sm mt-1">{speaker.title}</p>
            <div className="my-4 border-t border-[#4A4A6A]"></div>
            <div className="flex justify-center items-center gap-6">
                <span className="font-semibold text-sm">{speaker.followers} followers</span>
                <div className="flex gap-3 text-[#A9A9B2]">
                    <a href="#" className="hover:text-white"><InstagramIcon className="w-5 h-5"/></a>
                    <a href="#" className="hover:text-white"><XIcon className="w-5 h-5"/></a>
                    <a href="#" className="hover:text-white"><TikTokIcon className="w-5 h-5"/></a>
                </div>
            </div>
        </div>
    );
};

interface SpeakersProps {
    speakers: Speaker[];
}

export const Speakers: React.FC<SpeakersProps> = ({ speakers }) => {
    return (
        <section className="py-24 bg-[#25253A] text-[#F0F0F5]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">The Best Speakers in the Field</h2>
                <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard key={index} speaker={speaker} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="secondary">More Speakers</Button>
                </div>
            </div>
        </section>
    );
};