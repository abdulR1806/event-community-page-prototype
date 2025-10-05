
import React from 'react';
import { InstagramIcon, XIcon, FacebookIcon, TikTokIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25253A] text-[#A9A9B2] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <a href="mailto:hello@creatorsummit.com" className="hover:text-white block">hello@creatorsummit.com</a>
            <a href="tel:+97142941600" className="hover:text-white block">+971 429 41600</a>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white"><InstagramIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><XIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><FacebookIcon className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><TikTokIcon className="w-5 h-5"/></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Cities</a></li>
              <li><a href="#" className="hover:text-white">Creators</a></li>
              <li><a href="#" className="hover:text-white">Sponsor</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Cities</h3>
             <ul>
              <li><a href="#" className="hover:text-white">Jakarta</a></li>
              <li><a href="#" className="hover:text-white">London</a></li>
              <li><a href="#" className="hover:text-white">Singapore</a></li>
              <li><a href="#" className="hover:text-white">Los Angeles</a></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-4">Past Cities</h3>
             <ul>
              <li><a href="#" className="hover:text-white">Bangalore</a></li>
              <li><a href="#" className="hover:text-white">Dubai</a></li>
              <li><a href="#" className="hover:text-white">Tel Aviv</a></li>
              <li><a href="#" className="hover:text-white">Mongolia</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#4A4A6A] mt-12 pt-8 text-center">
          <p className="text-8xl font-bold text-white uppercase tracking-tighter">CREATORSUMMIT</p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Creator Summit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
