import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function RILogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" fill="url(#logoBg)" stroke="url(#logoGold)" strokeWidth="2" />

      {/* Car silhouette */}
      <g transform="translate(60, 72) scale(0.38)" filter="url(#glow)">
        {/* Body */}
        <path
          d="M-68 8 C-68 8, -52-28,-20-36 L20-36 C52-28, 68 8, 68 8 L68 22 C68 26, 64 30, 60 30 L-60 30 C-64 30,-68 26,-68 22 Z"
          fill="url(#logoGold)"
        />
        {/* Roof */}
        <path
          d="M-28-36 C-20-54, 20-54, 28-36 Z"
          fill="url(#logoGold)"
        />
        {/* Windows */}
        <path d="M-24-33 C-18-46, -2-50, 2-33 Z" fill="#0a0a0a" opacity="0.6" />
        <path d="M4-33 C8-50, 22-46, 26-33 Z" fill="#0a0a0a" opacity="0.6" />
        {/* Wheels */}
        <circle cx="-44" cy="30" r="14" fill="#1a1a1a" stroke="url(#logoGold)" strokeWidth="3" />
        <circle cx="-44" cy="30" r="6" fill="url(#logoGold)" />
        <circle cx="44" cy="30" r="14" fill="#1a1a1a" stroke="url(#logoGold)" strokeWidth="3" />
        <circle cx="44" cy="30" r="6" fill="url(#logoGold)" />
      </g>

      {/* RI text */}
      <text
        x="60"
        y="50"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="28"
        fill="url(#logoGold)"
        filter="url(#glow)"
        letterSpacing="3"
      >
        RI
      </text>

      {/* Bottom accent line */}
      <line x1="28" y1="104" x2="92" y2="104" stroke="url(#logoAccent)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LogoImage({ size = 44 }: { size?: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  if (imgFailed) return <RILogo size={size} />;
  return (
    <img
      src="https://www.instagram.com/p/DRxGfE_iam4/media/?size=l"
      alt="RI Car Detailing Logo"
      width={size}
      height={size}
      onError={() => setImgFailed(true)}
      className="rounded-full object-cover"
      style={{
        width: size,
        height: size,
        border: '2px solid rgba(212,175,55,0.5)',
        boxShadow: '0 0 12px rgba(212,175,55,0.3)',
      }}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'Pricing', 'Gallery', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2'
            : 'bg-transparent py-4'
        }`}
        style={scrolled ? {
          background: 'rgba(5,5,5,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(212,175,55,0.15)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
        } : {}}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <LogoImage size={44} />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black text-gradient-gold tracking-tight">
                RI Car Detailing
              </span>
              <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-medium">
                Premium Car Wash
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-semibold text-white/70 hover:text-white transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            <a
              href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
                color: '#0a0a0a',
                boxShadow: '0 4px 20px rgba(212,175,55,0.35)',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[60px] left-0 right-0 z-40 md:hidden"
          style={{
            background: 'rgba(5,5,5,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(212,175,55,0.15)',
          }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 font-semibold text-lg hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-4 rounded-full font-bold text-center text-black"
              style={{ background: 'linear-gradient(135deg, #FFD700, #D4AF37)' }}
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
