import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/siteData';
import { ChevronRight, ChevronLeft, ArrowDown, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  // Sequence phase:
  // 0 = Initial company name reveal ("2. SQUAD SERVICES")
  // 1 = Private limited badge reveal
  // 2 = Rotating flip phrases ("SECURITY", "FACILITY MANAGEMENT", "WORKPLACE SERVICES", "PEOPLE. SECURITY. EXCELLENCE.")
  // 3 = Full interactive hero slides view
  const [sequencePhase, setSequencePhase] = useState<number>(0);
  const [rotatingIndex, setRotatingIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const rotatingPhrases = [
    'SECURITY',
    'FACILITY MANAGEMENT',
    'WORKPLACE SERVICES',
    'PEOPLE. SECURITY. EXCELLENCE.',
  ];

  // Run sequence timing
  useEffect(() => {
    // Step 0 -> Step 1 after 1.8s
    const timer1 = setTimeout(() => {
      setSequencePhase(1);
    }, 1800);

    // Step 1 -> Step 2 after 3.2s
    const timer2 = setTimeout(() => {
      setSequencePhase(2);
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Cycle through rotating phrases in phase 2, then unlock phase 3 (slide view)
  useEffect(() => {
    if (sequencePhase === 2) {
      const interval = setInterval(() => {
        setRotatingIndex((prev) => {
          if (prev >= rotatingPhrases.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setSequencePhase(3);
            }, 1200);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [sequencePhase, rotatingPhrases.length]);

  // Slide autoplay when in phase 3
  useEffect(() => {
    if (sequencePhase < 3 || isPaused) return;

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);

    return () => clearInterval(slideTimer);
  }, [sequencePhase, isPaused]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const scrollToExplore = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] sm:min-h-[640px] lg:min-h-[720px] bg-black text-white overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Layer with Parallax / Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlideData.id}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.6 }}
            exit={{ scale: 1.0, opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlideData.image}
              alt={activeSlideData.heading}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />

        {/* Subtle Corporate Grid Line Matrix */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between flex-1 pt-24 sm:pt-28 pb-8 sm:pb-12">
        {/* Top Status Indicator */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            <span className="inline-block w-2 h-2 rounded-full bg-neutral-400 animate-pulse flex-shrink-0" />
            <span className="font-tech text-[9px] sm:text-xs text-neutral-400 tracking-[0.18em] sm:tracking-[0.25em] uppercase font-semibold truncate">
              ENTERPRISE INTEGRATED OPERATIONS &bull; 24/7 SOC ACTIVE
            </span>
          </div>

          {sequencePhase < 3 && (
            <button
              onClick={() => setSequencePhase(3)}
              className="font-tech text-[10px] tracking-widest text-neutral-400 hover:text-white transition-colors underline decoration-neutral-600 underline-offset-4 flex-shrink-0"
            >
              SKIP INTRO
            </button>
          )}
        </div>

        {/* Center Stage: Sequence Animation or Slide Presentation */}
        <div className="my-auto flex flex-col items-center text-center justify-center py-6 sm:py-10">
          <AnimatePresence mode="wait">
            {sequencePhase < 3 ? (
              /* ============================================================ */
              /* INITIAL SEQUENCE: 2. SQUAD SERVICES -> PVT LTD -> FLIP PHRASES */
              /* ============================================================ */
              <motion.div
                key="intro-sequence"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center max-w-3xl mx-auto px-2"
              >
                {/* 1. Show Company Name in medium size */}
                <motion.div
                  initial={{ opacity: 0, filter: 'blur(24px)', scale: 0.88 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                    2. SQUAD SERVICES
                  </h1>
                </motion.div>

                {/* 2. Then reveal: "PRIVATE LIMITED" */}
                <div className="h-10 mt-2 sm:mt-3 flex items-center justify-center">
                  <AnimatePresence>
                    {sequencePhase >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-2 sm:gap-3 px-3.5 py-1 sm:px-4 sm:py-1.5 border border-neutral-700/60 bg-neutral-900/60 backdrop-blur-md rounded-full"
                      >
                        <Shield className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-neutral-300 flex-shrink-0" />
                        <span className="font-tech text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-300 uppercase">
                          PRIVATE LIMITED
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Sophisticated FLIP / ROTATING TEXT Animation */}
                <div className="h-16 sm:h-20 mt-4 sm:mt-6 flex items-center justify-center overflow-hidden">
                  <AnimatePresence>
                    {sequencePhase >= 2 && (
                      <motion.div
                        key={rotatingIndex}
                        initial={{ rotateX: 90, opacity: 0, y: 30 }}
                        animate={{ rotateX: 0, opacity: 1, y: 0 }}
                        exit={{ rotateX: -90, opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="perspective-1000"
                      >
                        <span className="font-tech text-xs sm:text-base md:text-lg font-bold tracking-[0.2em] text-neutral-300 uppercase border-b border-white/20 pb-1">
                          {rotatingPhrases[rotatingIndex]}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              /* ============================================================ */
              /* 4 CINEMATIC SLIDES VIEW: MEDIUM BALANCED TITLES             */
              /* ============================================================ */
              <motion.div
                key={`slide-${activeSlideData.id}`}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mx-auto flex flex-col items-center text-center px-2"
              >
                {/* Slide Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full mb-4 sm:mb-5"
                >
                  <Sparkles className="w-3 h-3 text-neutral-300" />
                  <span className="font-tech text-[9px] sm:text-xs tracking-[0.18em] uppercase font-semibold text-neutral-300">
                    {activeSlideData.tag}
                  </span>
                </motion.div>

                {/* Main Heading - Refined to Medium Size */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug sm:leading-tight text-white uppercase max-w-3xl"
                >
                  {activeSlideData.heading}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-3 sm:mt-5 font-sans text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed"
                >
                  {activeSlideData.subheading}
                </motion.p>

                {/* Dual Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                >
                  <button
                    onClick={onContactClick}
                    data-cursor-text="INQUIRE"
                    className="w-full sm:w-auto px-7 py-3 bg-white text-black font-tech text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/10"
                  >
                    SCHEDULE CONSULTATION
                  </button>
                  <a
                    href="#services"
                    className="w-full sm:w-auto px-7 py-3 border border-white/30 text-white font-tech text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white text-center"
                  >
                    EXPLORE SERVICES
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Section: Slide Navigation, Indicators & Scroll Explore */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-4 sm:pt-6 w-full">
          {/* Slide Progress and Controls */}
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3 sm:gap-4">
            <span className="font-tech text-xs tracking-widest text-neutral-400">
              {activeSlideData.slideNumber} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>

            {/* Slide Bar Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2 py-1">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setSequencePhase(3);
                    setCurrentSlide(idx);
                  }}
                  className="h-1 transition-all duration-500 rounded-full cursor-pointer relative overflow-hidden flex-shrink-0"
                  style={{
                    width: currentSlide === idx ? '24px' : '8px',
                    backgroundColor: currentSlide === idx ? '#ffffff' : 'rgba(255,255,255,0.3)',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
              <button
                onClick={handlePrevSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scroll Indicator with Animated Vertical Line */}
          <button
            onClick={scrollToExplore}
            className="hidden sm:flex items-center gap-3 group cursor-pointer text-left"
            data-cursor-text="DOWN"
          >
            <div className="flex flex-col">
              <span className="font-tech text-[10px] sm:text-xs text-neutral-400 group-hover:text-white tracking-[0.25em] uppercase font-semibold transition-colors">
                SCROLL TO EXPLORE
              </span>
              <span className="font-tech text-[9px] text-neutral-500 tracking-wider">
                INTEGRATED SOLUTIONS
              </span>
            </div>
            <div className="w-6 h-10 border border-neutral-700 group-hover:border-white rounded-full flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 bg-white rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Hidden Preloader for all 5 Hero Background Images with no-referrer */}
      <div className="hidden" aria-hidden="true">
        {HERO_SLIDES.map((slide) => (
          <img
            key={`preload-${slide.id}`}
            src={slide.image}
            alt=""
            referrerPolicy="no-referrer"
            loading="eager"
          />
        ))}
      </div>
    </section>
  );
}
