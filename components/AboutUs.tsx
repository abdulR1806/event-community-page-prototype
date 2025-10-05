
import React from 'react';
import { LightbulbIcon, UsersIcon, GlobeIcon, BriefcaseIcon } from './Icons';

const values = [
    { title: 'Kreativitas', icon: <LightbulbIcon /> },
    { title: 'Kolaborasi', icon: <UsersIcon /> },
    { title: 'Inklusivitas', icon: <GlobeIcon /> },
    { title: 'Profesionalisme', icon: <BriefcaseIcon /> },
]

export const AboutUs: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-24 bg-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kisah di Balik Ruang.</h2>
            <p className="text-[#4A4A6A] leading-relaxed mb-4 max-w-3xl mx-auto">
              Fortune Space lahir dari sebuah keyakinan sederhana: bahwa ide-ide hebat membutuhkan ruang yang hebat untuk berkembang. Kami melihat adanya kebutuhan akan sebuah tempat di kota ini yang tidak hanya fungsional, tetapi juga memelihara jiwa kreatif.
            </p>
            <p className="text-[#4A4A6A] leading-relaxed max-w-3xl mx-auto">
              Sebuah tempat di mana para seniman, pengusaha, dan pembangun komunitas dapat berkumpul, belajar, dan menciptakan sesuatu yang bermakna bersama. Perjalanan kami adalah membangun rumah itu untuk Anda.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {values.map((item) => (
                    <div key={item.title} className="bg-white p-8 rounded-2xl border border-[#E0D6FF] shadow-md">
                        <div className="w-10 h-10 text-[#00F5A0] mx-auto mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
