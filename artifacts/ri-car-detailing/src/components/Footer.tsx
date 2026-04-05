import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={SITE.logoPath}
            alt={`${SITE.brandName} logo`}
            className="w-8 h-8 rounded-full border border-primary/30 object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="font-bold text-white tracking-wide">{SITE.brandName} Copyright 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={SITE.instagramUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Visit Instagram profile"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href={SITE.whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

