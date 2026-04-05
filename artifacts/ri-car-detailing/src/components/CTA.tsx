import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Rich colorful background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.10) 0%, transparent 50%)',
          }}
        ></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${15 + i * 14}%`,
              bottom: '30%',
              background: ['#FFD700', '#06b6d4', '#8b5cf6', '#f43f5e', '#34d399', '#fb923c'][i],
              boxShadow: `0 0 8px ${['#FFD700', '#06b6d4', '#8b5cf6', '#f43f5e', '#34d399', '#fb923c'][i]}`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: 'rgba(212,175,55,0.10)',
            border: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-bold tracking-widest uppercase text-amber-400">Book in 30 Seconds</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
        >
          Book Your Car Wash<br className="hidden md:block" />
          <span className="text-gradient-gold"> Today!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/50 text-xl mb-12 max-w-lg mx-auto"
        >
          Tap the button, send a WhatsApp message, and we arrive at your doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-3 px-12 py-5 rounded-full font-black text-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #C9A84C 100%)',
              color: '#0a0a0a',
              boxShadow: '0 12px 50px rgba(212,175,55,0.5)',
            }}
          >
            <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Sparkles className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Schedule Service Now</span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { label: '500+', sub: 'Cars Cleaned', color: '#FFD700' },
            { label: '100%', sub: 'Satisfaction Rate', color: '#06b6d4' },
            { label: '4.9/5', sub: 'Customer Rating', color: '#8b5cf6' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.label}</div>
              <div className="text-sm text-white/40 mt-1 font-medium">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

