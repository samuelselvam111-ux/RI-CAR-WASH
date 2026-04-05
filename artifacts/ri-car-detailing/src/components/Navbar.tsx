import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=64" 
            alt="Logo" 
            className="w-10 h-10 rounded-full object-cover border border-primary/30"
          />
          <span className="text-xl md:text-2xl font-bold text-gradient-gold tracking-tight">
            RI Car Detailing
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Pricing', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
