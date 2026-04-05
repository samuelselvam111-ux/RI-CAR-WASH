import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-zinc-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight"
        >
          Book Your Car Wash <br className="hidden md:block"/>
          <span className="text-gradient-gold">Today!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 bg-primary text-primary-foreground font-bold text-xl rounded-full gold-glow hover:scale-105 transition-all duration-300"
          >
            Schedule Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
