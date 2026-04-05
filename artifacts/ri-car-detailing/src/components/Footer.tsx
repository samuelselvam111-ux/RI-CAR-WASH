import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=64" 
            alt="Logo" 
            className="w-8 h-8 rounded-full object-cover border border-primary/30"
          />
          <span className="font-bold text-white tracking-wide">RI Car Detailing © 2025</span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/ri_car_detailing_01?igsh=dDk5eWV1azRsYTV1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/918778341878" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
