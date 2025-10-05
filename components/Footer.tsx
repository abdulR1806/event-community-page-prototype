
import React from 'react';
import { InstagramIcon, XIcon, FacebookIcon, TikTokIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A2E] text-[#A9A9B2] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Fortune Space</h3>
            <p>Ruang Tumbuh Kreatif</p>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul>
              <li><a href="#tentang-kami" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#kelas-workshop" className="hover:text-white">Kelas</a></li>
              <li><a href="#sewa-ruang" className="hover:text-white">Sewa Ruang</a></li>
              <li><a href="#komunitas" className="hover:text-white">Komunitas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <a href="mailto:halo@fortunespace.id" className="hover:text-white block">halo@fortunespace.id</a>
            <a href="tel:+62212345678" className="hover:text-white block">+62 21 234 5678</a>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white"><InstagramIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><XIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><FacebookIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><TikTokIcon className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4A4A6A] pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fortune Space. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
