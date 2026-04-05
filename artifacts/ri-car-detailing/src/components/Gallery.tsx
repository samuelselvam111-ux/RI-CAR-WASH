import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const images = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
  "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1611001958682-52af5c2b6f63?w=800&q=80"
];

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-gradient-gold">Work</span>
          </motion.h2>
          <p className="text-white/60">Immaculate results, every time.</p>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4 pl-4 md:-ml-8 md:pl-8">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4 md:pl-8"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                <img 
                  src={src} 
                  alt={`Car Detailing Work ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
