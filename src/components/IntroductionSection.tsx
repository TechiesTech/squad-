import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface IntroductionSectionProps {
  onLearnMoreClick: () => void;
}

export default function IntroductionSection({ onLearnMoreClick }: IntroductionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const words = [
    { text: 'WE', highlight: false },
    { text: 'PROTECT.', highlight: true },
    { text: 'WE', highlight: false },
    { text: 'MANAGE.', highlight: true },
    { text: 'WE', highlight: false },
    { text: 'ENABLE.', highlight: true },
  ];

  return (
    <section
      id="introduction"
      ref={containerRef}
      className="relative w-full bg-white text-black py-16 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 h-[1px] bg-black" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-600 uppercase font-semibold">
            02 / PHILOSOPHY & CAPABILITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Animated Words + Corporate Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Word by word animation - Medium sizing */}
            <div className="flex flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-1 sm:gap-y-1.5 mb-5 sm:mb-7 max-w-xl">
              {words.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight uppercase ${
                    item.highlight ? 'text-black font-extrabold' : 'text-neutral-400'
                  }`}
                >
                  {item.text}
                </motion.span>
              ))}
            </div>

            {/* Corporate Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-neutral-800 font-normal leading-relaxed max-w-xl"
            >
              <strong className="font-semibold text-black">
                2. Squad Services Private Limited
              </strong>{' '}
              delivers integrated security, facility management and workforce solutions that help
              organizations create safer, smarter and more efficient workplaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={onLearnMoreClick}
                data-cursor-text="EXPLORE"
                className="group inline-flex items-center gap-3 font-tech text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-black hover:text-neutral-600 transition-colors"
              >
                <span>EXPLORE ALL 16 CAPABILITIES</span>
                <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <div className="flex items-center gap-2 pl-4 border-l border-neutral-300">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
                <span className="font-tech text-xs text-neutral-600 tracking-wider">
                  ISO 9001 &bull; PSARA COMPLIANT
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image with Reveal */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden aspect-[4/5] bg-neutral-900 group shadow-2xl"
              data-cursor="image"
            >
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Security & Workplace Services"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-tech text-[10px] tracking-[0.25em] uppercase text-neutral-300 block mb-1">
                  ENTERPRISE RIGOR
                </span>
                <p className="font-display font-bold text-base sm:text-lg leading-tight uppercase">
                  UNCOMPROMISING OPERATIONAL INTEGRITY
                </p>
              </div>
            </motion.div>

            {/* Architectural accent border card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-neutral-950 text-white p-4 sm:p-5 border border-neutral-800 shadow-xl w-full sm:max-w-[220px]">
              <div className="font-tech text-[10px] text-neutral-400 tracking-[0.2em] uppercase mb-1">
                DISPATCH TIME
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-white">
                &lt; 15 MINS
              </div>
              <div className="font-sans text-xs text-neutral-400 mt-1">
                Rapid response field patrol readiness.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
