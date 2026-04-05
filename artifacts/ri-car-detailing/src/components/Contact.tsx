import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MapPin, User, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-card p-8 rounded-3xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Founder</p>
                <p className="text-xl font-bold text-white">Sakthikumar</p>
              </div>
            </div>

            <a href="tel:8778341878" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <Phone className="text-primary w-6 h-6 group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Phone</p>
                <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">+91 8778341878</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Service Areas</p>
                <p className="text-xl font-bold text-white leading-relaxed">Arumuganeri, Thoothukudi,<br/>Tiruchendur</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <a 
              href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-white transition-all duration-300 group"
            >
              <FaWhatsapp className="w-8 h-8 text-[#25D366] group-hover:text-white" />
              <span className="font-bold text-lg">Chat on WhatsApp</span>
            </a>

            <a 
              href="https://www.instagram.com/ri_car_detailing_01?igsh=dDk5eWV1azRsYTV1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F56040]/10 border border-[#FD1D1D]/30 hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F56040] text-white transition-all duration-300 group"
            >
              <FaInstagram className="w-8 h-8 text-[#FD1D1D] group-hover:text-white" />
              <span className="font-bold text-lg">Follow on Instagram</span>
            </a>

            <a 
              href="https://www.google.com/search?kgmid=%2Fm%2F0f0699&hl=en-IN&q=Arumuganeri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-600 text-white transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-blue-500 group-hover:text-white" />
              <span className="font-bold text-lg">View Location</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
