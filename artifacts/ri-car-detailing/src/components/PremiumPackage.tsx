import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Tyre Polish",
  "Dash & Door Polish",
  "Interior Deep Cleaning",
  "Full Foam Wash"
];

export default function PremiumPackage() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium Detailing Package
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-10">
              ₹500 <span className="text-xl text-white/50 font-normal">Complete Care</span>
            </div>

            <ul className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-4 text-xl text-white/90"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <a 
              href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20the%20Premium%20Detailing%20Package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-full gold-glow hover:scale-105 transition-transform"
            >
              Get Premium Treatment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
