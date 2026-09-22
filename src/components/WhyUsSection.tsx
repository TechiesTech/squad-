import { motion } from 'motion/react';
import { WHY_US_DATA } from '../data/siteData';
import { Check, ShieldCheck, Users, Cpu, Clock, HeartHandshake } from 'lucide-react';

export default function WhyUsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Users className="w-5 h-5 text-black" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-black" />;
      case 2: return <Cpu className="w-5 h-5 text-black" />;
      case 3: return <Clock className="w-5 h-5 text-black" />;
      case 4: return <HeartHandshake className="w-5 h-5 text-black" />;
      default: return <ShieldCheck className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="why-us" className="relative w-full bg-white text-black py-28 sm:py-36 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-black" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-500 uppercase font-semibold">
            06 / STRATEGIC ADVANTAGE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] uppercase text-black">
            WHY SQUAD?
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-600 max-w-lg font-light leading-relaxed">
            The standard of execution that distinguishes our operations across India's premier commercial towers, campuses, and industrial sites.
          </p>
        </div>

        {/* 5 Premium Blocks */}
        <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {WHY_US_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-neutral-50/80 transition-colors px-4 -mx-4 sm:px-6 sm:-mx-6"
            >
              {/* Number and Icon */}
              <div className="lg:col-span-3 flex items-center gap-6">
                <span className="font-tech text-2xl sm:text-3xl font-light text-neutral-400 group-hover:text-black transition-colors">
                  {item.number}
                </span>
                <div className="w-11 h-11 border border-neutral-300 group-hover:border-black flex items-center justify-center transition-all duration-300">
                  {getIcon(idx)}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight uppercase text-black">
                  {item.title}
                </h3>
              </div>

              {/* Tagline & Description */}
              <div className="lg:col-span-5">
                <span className="font-tech text-xs tracking-[0.18em] uppercase text-neutral-500 font-semibold block mb-2">
                  {item.tagline}
                </span>
                <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Checklist Points */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-neutral-800">
                    <Check className="w-4 h-4 text-black flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
