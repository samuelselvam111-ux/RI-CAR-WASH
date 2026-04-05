import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE } from '@/lib/site';

const highlights = [
  "Doorstep Service",
  "Eco-Friendly Products",
  "100% Satisfaction",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.18),transparent_24%),linear-gradient(135deg,#030303_0%,#0f172a_45%,#090909_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_0%,rgba(255,255,255,0.04)_15%,transparent_30%,transparent_70%,rgba(255,215,0,0.08)_100%)] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/70"></div>
      </div>

      {/* Floating colorful orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[120px]"
          style={{ background: 'rgba(212,175,55,0.12)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full blur-[120px]"
          style={{ background: 'rgba(6,182,212,0.10)' }}
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/3 left-1/3 w-[200px] h-[200px] rounded-full blur-[100px]"
          style={{ background: 'rgba(168,85,247,0.08)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: 'rgba(212,175,55,0.12)',
            border: '1px solid rgba(212,175,55,0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#FFD700' }}>
            Premium Car Wash
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
        >
          The Best<br />
          <span className="text-gradient-gold">Car Wash</span>
          <span className="text-white"> Service</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/75 max-w-xl mb-8 font-light"
        >
          Premium doorstep car wash and detailing service at your convenience.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white/70 font-medium">{h}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-10 py-4 font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #C9A84C 100%)',
              color: '#0a0a0a',
              boxShadow: '0 8px 40px rgba(212,175,55,0.5), 0 0 0 1px rgba(212,175,55,0.3)',
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative">Book Now - Free Visit</span>
          </a>

          <a
            href={`tel:${SITE.phonePlain}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
            }}
          >
            <Phone className="w-5 h-5" style={{ color: '#06b6d4' }} />
            <span>{SITE.phoneDisplay}</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="w-[1.5px] h-14 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <motion.div
            animate={{ y: [0, 56, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ background: 'linear-gradient(to bottom, #FFD700, #06b6d4)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

