/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroductionSection from './components/IntroductionSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServiceExplanationSection from './components/ServiceExplanationSection';
import IntegratedWorkplaceSection from './components/IntegratedWorkplaceSection';
import WhyUsSection from './components/WhyUsSection';
import ClientsSection from './components/ClientsSection';
import CardStackingSection from './components/CardStackingSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('01 SECURITY SERVICES');
  const contactRef = useRef<HTMLElement>(null);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setPreselectedService(`${service.number} ${service.title}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neutral-200 selection:text-black">
      {/* Desktop-only subtle interactive cursor */}
      <CustomCursor />

      {/* Corporate Glass/Transparent Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="relative w-full">
        {/* 01: Fullscreen Cinematic Hero with sequenced animation & 4 slides */}
        <Hero onContactClick={handleContactClick} />

        {/* 02: Introduction (Black to White Transition, Typography Reveal) */}
        <IntroductionSection onLearnMoreClick={handleLearnMore} />

        {/* 03: About Us (Built Around Trust, Animated Counters) */}
        <AboutSection />

        {/* 04: Services (16 Interactive Cards & Modal) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 04B: Service Deep-Dive Split Section (Rotating Flip Text) */}
        <ServiceExplanationSection onLearnMore={handleLearnMore} />

        {/* 05: Integrated Workplace (Floating Cursor-Reactive Nodes) */}
        <IntegratedWorkplaceSection />

        {/* 06: Why Squad (5 Strategic Blocks) */}
        <WhyUsSection />

        {/* 07: Clients (Dual Infinite Marquee with Placeholder Logos) */}
        <ClientsSection />

        {/* 08: Large Image Cards with Scroll-Progress Stacking */}
        <CardStackingSection />

        {/* 09: Careers (Human Talent & Openings Modal) */}
        <CareersSection />

        {/* 10: Contact (Corporate RFPs & Inquiries Form) */}
        <ContactSection ref={contactRef} preselectedService={preselectedService} />
      </main>

      {/* Minimal Corporate Black Footer */}
      <Footer />
    </div>
  );
}
