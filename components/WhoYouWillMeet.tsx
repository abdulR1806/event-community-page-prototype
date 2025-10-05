
import React from 'react';
import { ThumbsUpIcon, BuildingIcon, CelebrateIcon, ContentIcon, PlatformIcon } from './Icons';

const meetData = [
    { title: 'Like minded attendees', icon: <ThumbsUpIcon /> },
    { title: 'Top brands and companies', icon: <BuildingIcon /> },
    { title: 'Celebrate and influential people', icon: <CelebrateIcon /> },
    { title: 'Region\'s biggest content creators', icon: <ContentIcon /> },
    { title: 'Social media platforms', icon: <PlatformIcon /> },
];

export const WhoYouWillMeet: React.FC = () => {
    return (
        <section className="py-24 bg-[#25253A] text-[#F0F0F5]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Will You Meet at the Summit</h2>
                        <p className="text-[#A9A9B2] leading-relaxed">Creator Summit is a global gathering of creators and entrepreneurs. It is the ultimate place to find your next opportunity.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {meetData.map((item, index) => (
                            <div key={index} className={`bg-[#1A1A2E] border border-[#4A4A6A] p-6 rounded-2xl ${index === 2 ? 'md:col-span-2' : ''}`}>
                                <div className="text-[#00F5A0] mb-4 w-8 h-8">{item.icon}</div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};