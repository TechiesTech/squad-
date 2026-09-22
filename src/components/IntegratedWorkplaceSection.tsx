import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { INTEGRATED_NODES } from '../data/siteData';
import { Shield, Sparkles, Users, Coffee, Wrench, Briefcase, Car, Bug, CheckCircle2 } from 'lucide-react';

export default function IntegratedWorkplaceSection() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 20, y: y * 20 });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-4 h-4 text-white" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-white" />;
      case 'Users': return <Users className="w-4 h-4 text-white" />;
      case 'Coffee': return <Coffee className="w-4 h-4 text-white" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-white" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-white" />;
      case 'Car': return <Car className="w-4 h-4 text-white" />;
      case 'Bug': return <Bug className="w-4 h-4 text-white" />;
      default: return <Shield className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      id="solutions"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white py-32 sm:py-40 overflow-hidden border-t border-neutral-900 select-none"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 radial-glow-center pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-neutral-600" />
          <span className="font-tech text-xs tracking-[0.3em] text-neutral-400 uppercase font-semibold">
            05 / INTEGRATED WORKPLACE ECOSYSTEM
          </span>
          <div className="w-8 h-px bg-neutral-600" />
        </div>

        {/* Big Heading */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-[-0.03em] uppercase leading-none text-white max-w-4xl mx-auto">
          ONE WORKPLACE. <br />
          <span className="text-neutral-500">EVERY SOLUTION.</span>
        </h2>

        <p className="mt-6 font-sans text-base sm:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
          Eliminate siloed vendors. A single synchronized command infrastructure coordinating all perimeter, interior, engineering, and workforce activities.
        </p>

        {/* Central Stage with Floating Elements */}
        <div className="relative mt-16 sm:mt-24 h-[560px] sm:h-[640px] max-w-5xl mx-auto flex items-center justify-center">
          {/* Orbital Radar Rings */}
          <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-neutral-800/60 pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-full border border-neutral-800/40 border-dashed pointer-events-none animate-[spin_120s_linear_infinite]" />

          {/* Center Office Visual */}
          <motion.div
            style={{
              x: mouseOffset.x * 0.4,
              y: mouseOffset.y * 0.4,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-10 w-64 sm:w-80 aspect-square rounded-full overflow-hidden border-2 border-neutral-700 shadow-2xl shadow-black/90 p-2 bg-neutral-950"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Central Corporate Headquarters"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <span className="font-tech text-[9px] tracking-[0.25em] text-neutral-300 uppercase font-semibold">
                  INTEGRATED COMMAND
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-white mt-1">
                  SQUAD WORKPLACE HUB
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating Service Elements */}
          {INTEGRATED_NODES.map((node, idx) => {
            const parallaxMultiplier = (idx % 2 === 0 ? 1 : -1) * (0.8 + (idx % 3) * 0.4);

            return (
              <motion.div
                key={node.id}
                style={{
                  top: `${node.y}%`,
                  left: `${node.x}%`,
                  x: mouseOffset.x * parallaxMultiplier,
                  y: mouseOffset.y * parallaxMultiplier,
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              >
                <div
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-300 backdrop-blur-md ${
                    activeNode === node.id
                      ? 'bg-white text-black scale-110 shadow-xl shadow-white/10'
                      : 'bg-neutral-900/90 text-white border border-neutral-800 hover:border-neutral-500'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      activeNode === node.id ? 'bg-black text-white' : 'bg-neutral-800'
                    }`}
                  >
                    {getIcon(node.icon)}
                  </div>
                  <div className="text-left pr-1">
                    <span
                      className={`font-display font-bold text-xs tracking-wider uppercase block leading-none ${
                        activeNode === node.id ? 'text-black' : 'text-white'
                      }`}
                    >
                      {node.title}
                    </span>
                    <span
                      className={`font-tech text-[9px] tracking-wider block mt-0.5 ${
                        activeNode === node.id ? 'text-neutral-600' : 'text-neutral-400'
                      }`}
                    >
                      {node.desc}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-10 border-t border-neutral-900 text-neutral-400 font-tech text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Single Consolidated Monthly Invoice</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Integrated Cross-Functional Rostering</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Automated SLA Escalation Matrix</span>
          </div>
        </div>
      </div>
    </section>
  );
}
