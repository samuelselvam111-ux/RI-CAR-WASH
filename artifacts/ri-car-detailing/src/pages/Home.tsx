import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import PremiumPackage from '@/components/PremiumPackage';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <PremiumPackage />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
