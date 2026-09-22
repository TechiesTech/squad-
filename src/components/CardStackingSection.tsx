import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { STACKED_CARDS } from '../data/siteData';
import { StackedCardItem } from '../types';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface CardItemProps {
  key?: React.Key;
  card: StackedCardItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackingCardItem({
  card,
  index,
  total,
  progress,
  range,
  targetScale,
}: CardItemProps) {
  // Gentle scale down when scrolled past its active window for realistic stacking
  const scale = useTransform(progress, range, [1, targetScale]);
  // Maintain high opacity so previous cards stay clearly visible and readable
  const opacity = useTransform(progress, range, [1, index === total - 1 ? 1 : 0.88]);

  return (
    <div className="sticky top-20 sm:top-24 flex items-center justify-center mb-16">
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(72px + ${index * 22}px)`,
        }}
        className="w-full max-w-6xl bg-neutral-950 border border-neutral-800 rounded-none shadow-2xl overflow-hidden will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px]">
          {/* Left Text / Specs Column */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 bg-neutral-950">
            <div>
              {/* Card Meta & Number */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 font-semibold uppercase">
                  STACK LAYER {card.number} / 0{total}
                </span>
                <span className="font-tech text-[11px] tracking-widest px-3 py-1 bg-neutral-900 border border-neutral-700 text-neutral-300 uppercase">
                  {card.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-white mt-6 leading-none">
                {card.title}
              </h3>
              <p className="font-tech text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-2.5">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-neutral-200 font-light leading-relaxed mt-6">
                {card.description}
              </p>
            </div>

            {/* Bottom Specs Row */}
            <div className="pt-8 mt-6 border-t border-neutral-800 grid grid-cols-3 gap-4">
              {card.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  <span className="font-tech text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span className="font-tech text-xs sm:text-sm font-semibold text-white mt-1">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative bg-neutral-900 overflow-hidden group">
            <img
              src={card.image}
              alt={card.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white font-tech text-xs tracking-wider">
              <ShieldCheck className="w-4 h-4 text-neutral-400" />
              <span>SQUAD PROTOCOL</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CardStackingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="detail-stack"
      ref={containerRef}
      className="relative w-full bg-black text-white pt-28 pb-40 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-neutral-600" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            08 / OPERATIONAL DEPTH
          </span>
          <div className="w-8 h-[1px] bg-neutral-600" />
        </div>

        {/* Section Heading */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] uppercase text-white">
          EVERY DETAIL MATTERS.
        </h2>

        <p className="mt-4 font-sans text-base sm:text-xl text-neutral-400 font-light max-w-xl mx-auto">
          Four foundational operational pillars engineered with relentless attention to human safety and physical facility performance.
        </p>

        {/* Scroll cue */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-tech text-neutral-400 tracking-widest uppercase">
          <ArrowUpRight className="w-3.5 h-3.5 rotate-45 text-white" />
          <span>SCROLL DOWN TO STACK PILLARS &bull; SCROLL UP TO RETURN</span>
        </div>
      </div>

      {/* Cards Stacking Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {STACKED_CARDS.map((card, i) => {
          const targetScale = 1 - (STACKED_CARDS.length - 1 - i) * 0.025;
          const startRange = i * 0.25;
          const endRange = 1;

          return (
            <StackingCardItem
              key={card.id}
              card={card}
              index={i}
              total={STACKED_CARDS.length}
              progress={scrollYProgress}
              range={[startRange, endRange]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
