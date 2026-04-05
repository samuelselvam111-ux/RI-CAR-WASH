import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Circle, Wind, Sparkles, Eye, Star, CheckCircle2 } from 'lucide-react';

const showcaseItems = [
  {
    title: "Organic Foam Wash",
    tagline: "Showroom Shine Guaranteed",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    glow: "rgba(6,182,212,0.4)",
    icon: Droplets,
    stats: [
      { label: "Foam Layers", value: "5+" },
      { label: "Coverage", value: "Full Body" },
      { label: "Duration", value: "45 min" },
    ],
    features: ["Eco-safe foam formula", "Removes road grime", "UV protection coat"],
    badge: "ECO FRIENDLY",
    badgeColor: "bg-teal-400 text-teal-900",
  },
  {
    title: "Tyre Dressing Spa",
    tagline: "Deep Black Tyre Restoration",
    gradient: "from-purple-600 via-violet-500 to-pink-500",
    glow: "rgba(168,85,247,0.4)",
    icon: Circle,
    stats: [
      { label: "Shine Level", value: "Ultra" },
      { label: "Tyres", value: "All 4" },
      { label: "Duration", value: "20 min" },
    ],
    features: ["Anti-aging formula", "Deep black gloss", "Water repellent"],
    badge: "PREMIUM",
    badgeColor: "bg-purple-400 text-purple-900",
  },
  {
    title: "Interior Vacuum",
    tagline: "Deep Clean Every Corner",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.4)",
    icon: Wind,
    stats: [
      { label: "Suction Power", value: "2000W" },
      { label: "Coverage", value: "Full Interior" },
      { label: "Duration", value: "30 min" },
    ],
    features: ["HEPA filtration", "Seat & carpet deep clean", "Air vent cleaning"],
    badge: "DEEP CLEAN",
    badgeColor: "bg-orange-400 text-orange-900",
  },
  {
    title: "Dashboard Polish",
    tagline: "Like New Interior Finish",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    glow: "rgba(16,185,129,0.4)",
    icon: Sparkles,
    stats: [
      { label: "Gloss Level", value: "Mirror" },
      { label: "UV SPF", value: "50+" },
      { label: "Duration", value: "25 min" },
    ],
    features: ["UV protection", "Anti-dust coating", "Restores original color"],
    badge: "UV SHIELD",
    badgeColor: "bg-emerald-400 text-emerald-900",
  },
  {
    title: "Glass Cleaning",
    tagline: "Crystal Clear Visibility",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.4)",
    icon: Eye,
    stats: [
      { label: "Clarity", value: "100%" },
      { label: "Coverage", value: "All Glass" },
      { label: "Duration", value: "20 min" },
    ],
    features: ["Streak-free formula", "Anti-glare coating", "Water bead repel"],
    badge: "CRYSTAL CLEAR",
    badgeColor: "bg-sky-400 text-sky-900",
  },
  {
    title: "Alloy Wheel Clean",
    tagline: "Brake Dust Blasted Away",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    glow: "rgba(244,63,94,0.4)",
    icon: Star,
    stats: [
      { label: "Shine", value: "Diamond" },
      { label: "Wheels", value: "All 4" },
      { label: "Duration", value: "30 min" },
    ],
    features: ["Brake dust removal", "Chrome polish", "Anti-corrosion seal"],
    badge: "CHROME SHINE",
    badgeColor: "bg-rose-400 text-rose-900",
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 bg-background relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold tracking-widest uppercase text-white/70">Service Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-tight"
          >
            Everything Your Car<br />
            <span className="text-gradient-gold">Deserves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Professional detailing services with premium products and exceptional results
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              className="relative group rounded-3xl overflow-hidden cursor-default"
              style={{
                boxShadow: hovered === index
                  ? `0 0 60px ${item.glow}, 0 20px 60px rgba(0,0,0,0.5)`
                  : '0 4px 30px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.4s ease',
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-zinc-950/80"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Border gradient */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, transparent 60%, ${item.glow} 100%)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '1.5px',
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  border: `1.5px solid`,
                  borderImage: `linear-gradient(135deg, rgba(255,255,255,0.08), ${item.glow}) 1`,
                  borderRadius: '24px',
                }}
              ></div>

              <div className="relative z-10 p-7 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${item.glow}` }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm mb-6">{item.tagline}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {item.stats.map((stat, si) => (
                    <div
                      key={si}
                      className="rounded-xl px-3 py-2 text-center"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mt-auto">
                  {item.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0`} style={{ color: item.glow.replace('0.4', '1') }} />
                      <span className="text-sm text-white/60">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <a
                    href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-xl text-center text-sm font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r ${item.gradient} opacity-80 hover:opacity-100`}
                    style={{ boxShadow: hovered === index ? `0 4px 20px ${item.glow}` : 'none', transition: 'all 0.3s ease' }}
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(6,182,212,0.06) 50%, rgba(168,85,247,0.08) 100%)',
            border: '1px solid rgba(212,175,55,0.15)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]"></div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 relative z-10">
            All Services Available at <span className="text-gradient-gold">Your Doorstep</span>
          </h3>
          <p className="text-white/50 mb-8 relative z-10">No need to leave your home or office. We come to you.</p>
          <a
            href="https://wa.me/918778341878?text=Hi%20I%20want%20to%20book%20a%20car%20wash%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg hover:scale-105 active:scale-95 transition-transform gold-glow"
          >
            Book Any Service Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
