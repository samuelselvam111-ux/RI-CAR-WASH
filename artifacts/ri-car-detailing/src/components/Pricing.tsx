import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  { name: "4 Seater Cars", price: "399", popular: false },
  { name: "5 Seater Cars", price: "449", popular: true },
  { name: "7 Seater Cars", price: "500", popular: false }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Transparent <span className="text-gradient-gold">Pricing</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular 
                  ? 'bg-zinc-900 border-2 border-primary gold-glow transform md:-translate-y-4' 
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl text-white/80 font-medium mb-4">{plan.name}</h3>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl text-primary font-bold mt-2">₹</span>
                  <span className="text-6xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-white hover:text-black' 
                      : 'bg-white/10 text-white hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
