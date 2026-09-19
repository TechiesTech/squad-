import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckSquare } from 'lucide-react';

interface ServiceExplanationSectionProps {
  onLearnMore: () => void;
}

const PILLARS = [
  {
    id: 'security',
    title: 'SECURITY SERVICES',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80',
    categories: [
      'CORPORATE SECURITY',
      'EVENT SECURITY',
      'ACCESS CONTROL',
      'PATROLLING',
      'SURVEILLANCE',
      'ASSET PROTECTION',
    ],
    description:
      'Engineered for corporate headquarters, financial banking institutions, and critical commercial facilities. Our security architecture merges battle-tested physical vigilance with real-time biometric access control and continuous perimeter oversight.',
    standards: ['PSARA Certified Command', 'Armed & Unarmed Guarding', 'Mobile QR Checkpoint Patrols'],
  },
  {
    id: 'facility',
    title: 'FACILITY MANAGEMENT',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    categories: [
      'PREDICTIVE MEP CARE',
      'MECHANIZED HYGIENE',
      'CHILLER AUTOMATION',
      'ENERGY AUDITS',
      'VENDOR COHESION',
      'ZERO DOWNTIME',
    ],
    description:
      'High-performance workplace ecosystem administration. We maintain HVAC, high-voltage electrical arrays, automated sanitation units, and building utilities to ensure immaculate physical presentation and seamless daily productivity.',
    standards: ['Medical-Grade Sanitation', 'Chiller & AHU Diagnostics', 'ISO 14001 Compliant'],
  },
  {
    id: 'workforce',
    title: 'WORKPLACE SERVICES',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
    categories: [
      'EXECUTIVE CONCIERGE',
      'VISITOR SCREENING',
      'PANTRY STEWARDS',
      'DESK RUNNERS',
      'EVENT LOGISTICS',
      'SLA GOVERNANCE',
    ],
    description:
      'Groomed, courteous, and thoroughly verified ground personnel who represent your brand with distinction. From boardrooms to visitor reception halls, our people ensure effortless corporate momentum.',
    standards: ['Executive Etiquette Academy', 'Biometric Background Audit', 'Dedicated Shift Marshals'],
  },
];

export default function ServiceExplanationSection({ onLearnMore }: ServiceExplanationSectionProps) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const activePillar = PILLARS[activePillarIndex];

  // Rotate categories every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % activePillar.categories.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [activePillar.categories.length]);

  return (
    <section className="relative w-full bg-neutral-950 text-white py-16 sm:py-24 lg:py-32 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-neutral-500" />
            <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
              DYNAMIC PILLAR DEEP DIVE
            </span>
          </div>

          {/* Pillar Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {PILLARS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePillarIndex(idx);
                  setRotatingIndex(0);
                }}
                className={`px-3 py-1.5 font-tech text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activePillarIndex === idx
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-500'
                }`}
              >
                {p.id}
              </button>
            ))}
          </div>
        </div>

        {/* Large Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT: Large Service Image */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl"
              data-cursor="image"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePillar.image}
                  src={activePillar.image}
                  alt={activePillar.title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-2 font-tech text-xs tracking-widest uppercase">
                  <ShieldCheck className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                  <span className="truncate">2. SQUAD VERIFIED</span>
                </div>
                <span className="font-tech text-xs tracking-widest text-neutral-400 uppercase flex-shrink-0">
                  ACTIVE DEPLOYMENT
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Animated Text with Rotating Flip Category */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
              CORE PILLAR
            </span>

            {/* Static Pillar Title */}
            <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] uppercase mt-2 mb-4 sm:mb-6 text-white leading-tight">
              {activePillar.title}
            </h3>

            {/* FLIP Animation Rotating Category Box */}
            <div className="p-4 sm:p-6 bg-neutral-900 border border-neutral-800 mb-5 sm:mb-6 overflow-hidden">
              <span className="font-tech text-[10px] tracking-[0.3em] uppercase text-neutral-400 block mb-2 font-semibold">
                SPECIALIZATION FOCUS
              </span>

              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activePillarIndex}-${rotatingIndex}`}
                    initial={{ rotateX: 90, opacity: 0, y: 20 }}
                    animate={{ rotateX: 0, opacity: 1, y: 0 }}
                    exit={{ rotateX: -90, opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="perspective-1000"
                  >
                    <span className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-white uppercase truncate block">
                      {activePillar.categories[rotatingIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pillar Narrative */}
            <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-5 sm:mb-6">
              {activePillar.description}
            </p>

            {/* Standards checklist */}
            <div className="flex flex-col gap-2.5 mb-6 sm:mb-8">
              {activePillar.standards.map((st, i) => (
                <div key={i} className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-neutral-300">
                  <CheckSquare className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <span>{st}</span>
                </div>
              ))}
            </div>

            {/* Action CTA: Learn More -> */}
            <div>
              <button
                onClick={onLearnMore}
                data-cursor-text="EXPAND"
                className="group inline-flex items-center gap-3 font-tech text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-neutral-300 transition-colors"
              >
                <span>Learn More</span>
                <span className="w-8 h-8 rounded-full border border-white/40 group-hover:border-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
