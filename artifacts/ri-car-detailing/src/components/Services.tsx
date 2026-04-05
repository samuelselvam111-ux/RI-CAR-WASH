import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Circle, Wind, Sparkles, Eye, Star } from 'lucide-react';

const services = [
  { title: "Organic Foam Car Wash", icon: Droplets, desc: "Deep cleaning with eco-friendly premium foam." },
  { title: "Tyre Dressing Spa", icon: Circle, desc: "Restores deep black shine and protects rubber." },
  { title: "Interior Vacuum Cleaning", icon: Wind, desc: "Thorough removal of dust and debris from all corners." },
  { title: "Dashboard & Door Polish", icon: Sparkles, desc: "UV protection and rich gloss for interior plastics." },
  { title: "Glass Cleaning", icon: Eye, desc: "Streak-free crystal clear vision for all windows." },
  { title: "Alloy Wheel Cleaning", icon: Star, desc: "Removes brake dust and grime for a brilliant shine." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4 inline-block"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Meticulous attention to detail for every part of your vehicle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
