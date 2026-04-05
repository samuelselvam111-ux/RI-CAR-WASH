import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SITE } from '@/lib/site';

const features = [
  "Tyre Polish",
  "Dash & Door Polish",
  "Interior Deep Cleaning",
  "Full Foam Wash"
];

export default function PremiumPackage() {
  return (
    <section id="premium-package" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.04),transparent_42%,rgba(255,215,0,0.08)_100%)]"></div>
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
              Rs.500 <span className="text-xl text-white/50 font-normal">Complete Care</span>
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
              href={SITE.premiumWhatsappUrl}
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

