
import React from 'react';
import type { CommunityEvent } from '../types';

export const Community: React.FC<{ events: CommunityEvent[] }> = ({ events }) => {
    return (
        <section id="komunitas" className="py-24 bg-[#F0F0F5]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl text-center mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Koneksi Terjalin, Ide Bertumbuh.</h2>
                    <p className="text-[#4A4A6A] leading-relaxed">
                        Di Fortune Space, kami lebih dari sekadar empat dinding. Kami adalah ekosistem yang hidup dari para pemikir, pembuat, dan pemimpin. Temukan kolaborator, dapatkan inspirasi, atau nikmati energi kreatif yang mengalir di rumah komunitas Anda.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="columns-2 md:columns-3 gap-6">
                        {events.map((event, index) => (
                            <img key={index} src={event.image} alt={event.title} className="w-full h-auto object-cover rounded-2xl mb-6 break-inside-avoid shadow-lg border border-[#E0D6FF]" />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-16">
                    <p className="text-[#4A4A6A] uppercase tracking-widest font-semibold mb-4">Didukung oleh</p>
                    <img src="https://logodownload.org/wp-content/uploads/2017/05/nissan-logo-5.png" alt="Nissan Fortuna" className="h-12 mx-auto" />
                </div>
            </div>
        </section>
    );
};
