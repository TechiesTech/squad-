import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/siteData';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

function CounterNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const increment = Math.max(1, Math.floor(value / 35));
    const stepTime = duration / (value / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
      {count}
      <span className="text-neutral-400 font-normal">{suffix}</span>
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-neutral-950 text-white py-16 sm:py-24 lg:py-32 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '90px 90px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-8 h-[1px] bg-neutral-600" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            03 / ABOUT THE ENTERPRISE
          </span>
        </div>

        {/* Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.05] text-white uppercase"
            >
              BUILT <br />
              AROUND <br />
              <span className="text-neutral-400">TRUST.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-800 flex flex-col gap-4"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-neutral-300 mt-1 flex-shrink-0" />
                <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                  Founded with a vision of redefining corporate security and facility management into a synchronized, technology-driven enterprise service discipline.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-neutral-300 mt-1 flex-shrink-0" />
                <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                  Strict adherence to statutory compliances, PF, ESI, Minimum Wages Act, and verified background integrity across all ground echelons.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Corporate Description & Animated Statistics Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-xl text-neutral-300 font-light leading-relaxed mb-10 sm:mb-14"
            >
              <p>
                At <strong className="font-semibold text-white">2. SQUAD SERVICES PRIVATE LIMITED</strong>,
                we believe modern organizations require more than ad-hoc vendor arrangements. They need an integrated, accountable operational partner who can take ownership of physical security, facility cleanliness, building MEP systems, and floor-level workplace support with zero friction.
              </p>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base">
                Our command framework couples trained frontline talent with automated supervision systems, ensuring every shift handover, patrol checkpoint, and maintenance service level agreement is executed with meticulous consistency.
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10 border-t border-neutral-800 pt-8 sm:pt-10">
              {STATS_DATA.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col group"
                >
                  <CounterNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isInView}
                  />
                  <span className="font-tech text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold text-white mt-2 group-hover:text-neutral-300 transition-colors">
                    {stat.label}
                  </span>
                  <p className="font-sans text-xs text-neutral-400 mt-1 sm:mt-1.5 leading-normal">
                    {stat.sublabel}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Corporate Note */}
            <div className="mt-8 sm:mt-10 p-4 border border-neutral-800/80 bg-neutral-900/40 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-tech tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                <span>VERIFIED ENTERPRISE METRICS &bull; AUDITED OPERATIONAL BENCHMARKS</span>
              </div>
              <span className="font-tech text-[10px] text-neutral-400 uppercase tracking-widest hidden sm:inline">
                PAN-REGIONAL DEPLOYMENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
