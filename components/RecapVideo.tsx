
import React from 'react';
import { PlayIcon, ArrowRightIcon, ArrowLeftIcon } from './Icons';

export const RecapVideo: React.FC = () => {
    const thumbnails = [
        "https://picsum.photos/seed/thumb1/400/300",
        "https://picsum.photos/seed/thumb2/400/300",
        "https://picsum.photos/seed/thumb3/400/300",
        "https://picsum.photos/seed/thumb4/400/300",
    ];

    return (
        <section className="py-24 bg-[#F0F0F5]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase">2024 Recap Video</h2>
                <div className="relative bg-white border border-[#E0D6FF] rounded-2xl aspect-video w-full max-w-5xl mx-auto flex items-center justify-center overflow-hidden shadow-lg">
                    <img src="https://picsum.photos/seed/recapmain/1280/720" alt="Recap video" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/30"></div>
                     <button className="absolute w-24 h-24 bg-[#00F5A0]/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-[#00F5A0] hover:scale-110 transition-all duration-300">
                        <PlayIcon className="w-12 h-12 text-[#1A1A2E]"/>
                    </button>
                </div>

                <div className="max-w-5xl mx-auto mt-8 relative">
                    <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                        {thumbnails.map((src, index) => (
                            <div key={index} className="flex-shrink-0 w-1/3 bg-white rounded-lg p-3 group relative cursor-pointer border border-[#E0D6FF] shadow-md">
                                <img src={src} className="rounded-md w-full h-full object-cover"/>
                                <div className="absolute inset-3 flex items-center justify-between px-4">
                                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowLeftIcon className="w-5 h-5"/>
                                    </button>
                                     <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRightIcon className="w-5 h-5"/>
                                    </button>
                                </div>
                                <div className="absolute bottom-5 left-5 bg-[#1A1A2E]/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                                    Agenda is now live!
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};