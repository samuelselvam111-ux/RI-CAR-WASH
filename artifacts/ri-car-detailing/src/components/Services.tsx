import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Circle, Wind, Sparkles, Eye, Star } from 'lucide-react';

const services = [
  {
    title: "Organic Foam Car Wash",
    desc: "Deep cleaning with eco-friendly premium foam that lifts every particle of dirt.",
    icon: Droplets,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.35)",
    iconBg: "rgba(6,182,212,0.15)",
    iconColor: "#06b6d4",
  },
  {
    title: "Tyre Dressing Spa",
    desc: "Restores deep black shine and protects rubber from cracking and UV damage.",
    icon: Circle,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(139,92,246,0.35)",
    iconBg: "rgba(139,92,246,0.15)",
    iconColor: "#8b5cf6",
  },
  {
    title: "Interior Vacuum Cleaning",
    desc: "Thorough removal of dust, pet hair, and debris from every corner.",
    icon: Wind,
    gradient: "from-amber-400 to-orange-600",
    glow: "rgba(251,146,60,0.35)",
    iconBg: "rgba(251,146,60,0.15)",
    iconColor: "#fb923c",
  },
  {
    title: "Dashboard & Door Polish",
    desc: "UV protection and rich gloss that restores the original interior plastic finish.",
    icon: Sparkles,
    gradient: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.35)",
    iconBg: "rgba(52,211,153,0.15)",
    iconColor: "#34d399",
  },
  {
    title: "Glass Cleaning",
    desc: "Streak-free, crystal clear vision for all windows and windshields.",
    icon: Eye,
    gradient: "from-sky-400 to-indigo-600",
    glow: "rgba(56,189,248,0.35)",
    iconBg: "rgba(56,189,248,0.15)",
    iconColor: "#38bdf8",
  },
  {
    title: "Alloy Wheel Cleaning",
    desc: "Removes brake dust and grime for a brilliant mirror-like alloy shine.",
    icon: Star,
    gradient: "from-rose-500 to-pink-700",
    glow: "rgba(244,63,94,0.35)",
    iconBg: "rgba(244,63,94,0.15)",
    iconColor: "#f43f5e",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/60">What We Offer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Meticulous attention to detail for every part of your vehicle, delivered at your doorstep.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl p-7 group cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${service.glow}, 0 0 0 1px ${service.glow}`;
                (e.currentTarget as HTMLElement).style.borderColor = service.glow.replace('0.35', '0.4');
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Subtle corner gradient */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`}
              ></div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: service.iconBg }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.iconColor }} />
              </div>

              {/* Gradient accent line */}
              <div className={`h-0.5 w-10 bg-gradient-to-r ${service.gradient} rounded-full mb-5 group-hover:w-20 transition-all duration-500`}></div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{service.desc}</p>

              {/* Bottom arrow hint */}
              <div
                className="mt-6 text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                style={{ color: service.iconColor }}
              >
                <span>Included in package</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
