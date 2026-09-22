import { CLIENT_LOGOS } from '../data/siteData';
import { Building2 } from 'lucide-react';

export default function ClientsSection() {
  // Multiply for seamless infinite marquee loop
  const row1 = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const row2 = [...CLIENT_LOGOS.slice().reverse(), ...CLIENT_LOGOS.slice().reverse(), ...CLIENT_LOGOS.slice().reverse()];

  return (
    <section id="clients" className="relative w-full bg-black text-white py-16 sm:py-24 lg:py-32 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
          <div className="w-8 h-px bg-neutral-600" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            07 / CLIENT ROSTER
          </span>
          <div className="w-8 h-px bg-neutral-600" />
        </div>

        {/* Heading */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] uppercase text-white max-w-3xl mx-auto leading-tight">
          TRUSTED BY ORGANIZATIONS THAT EXPECT MORE.
        </h2>

        <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
          Delivering critical security and integrated facility governance across leading multinational corporations, business parks, and financial institutions.
        </p>

        {/* Placeholder footnote explicitly acknowledging strict user instruction */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full font-tech text-[10px] text-neutral-400 tracking-wider">
          <span>CORPORATE CLIENT REGISTRY &bull; PLACEHOLDER LOGOS</span>
        </div>
      </div>

      {/* Two-Row Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Gradient Edge Vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Marquee */}
        <div className="pause-marquee overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-6">
            {row1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-56 sm:w-64 h-24 sm:h-28 bg-neutral-950 border border-neutral-800/80 hover:border-neutral-500 hover:bg-neutral-900 flex flex-col items-center justify-center p-4 transition-all duration-300 group select-none flex-shrink-0"
              >
                <div className="flex items-center gap-2.5 mb-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Building2 className="w-4 h-4 text-neutral-300" />
                  <span className="font-tech text-xs tracking-[0.2em] font-semibold text-neutral-200 uppercase">
                    {item.name}
                  </span>
                </div>
                <div className="font-tech text-[10px] tracking-wider text-neutral-400 uppercase">
                  {item.sector}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="pause-marquee overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-6">
            {row2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-56 sm:w-64 h-24 sm:h-28 bg-neutral-950 border border-neutral-800/80 hover:border-neutral-500 hover:bg-neutral-900 flex flex-col items-center justify-center p-4 transition-all duration-300 group select-none flex-shrink-0"
              >
                <div className="flex items-center gap-2.5 mb-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Building2 className="w-4 h-4 text-neutral-300" />
                  <span className="font-tech text-xs tracking-[0.2em] font-semibold text-neutral-200 uppercase">
                    {item.name}
                  </span>
                </div>
                <div className="font-tech text-[10px] tracking-wider text-neutral-400 uppercase">
                  {item.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
