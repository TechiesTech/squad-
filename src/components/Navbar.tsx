import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SOLUTIONS', href: '#solutions' },
    { name: 'CLIENTS', href: '#clients' },
    { name: 'CAREERS', href: '#careers' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#contact') {
      onContactClick();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-neutral-800/80 py-4 shadow-2xl shadow-black/80'
            : 'bg-transparent py-7 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="group flex items-center gap-0 sm:gap-0.5 -ml-1"
            data-cursor-text="HOME"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-neutral-600 bg-neutral-950 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-white -my-1">
              <span className="font-display font-black text-xs sm:text-sm text-white tracking-tighter">SS</span>
            </div>
            <div className="flex flex-col text-left -my-1">
              <span className="font-display font-bold text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.15em] text-white group-hover:text-neutral-200 transition-colors uppercase truncate">
                SQUAD SERVICES
              </span>
              <span className="font-tech text-[8px] sm:text-[9px] text-neutral-400 tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
                PRIVATE LIMITED
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-tech text-[11px] font-medium tracking-[0.18em] text-neutral-300 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              data-cursor-text="TOUCH"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-100 hover:bg-white text-black font-tech text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-200 hover:text-white border border-neutral-800 bg-neutral-950/80 rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-neutral-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 pb-8 overflow-y-auto max-h-[100dvh] lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 pb-4 border-b border-neutral-800 text-neutral-400 font-tech text-xs tracking-widest">
                <ShieldCheck className="w-4 h-4 text-neutral-300" />
                <span className="truncate">SQUAD SERVICES PRIVATE LIMITED</span>
              </div>
              <nav className="flex flex-col gap-3 sm:gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-display text-base sm:text-lg font-semibold tracking-wide text-neutral-200 hover:text-white flex items-center justify-between py-1.5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-neutral-800/80 flex flex-col gap-3 sm:gap-4 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 bg-white text-black font-tech text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center font-tech text-[9px] sm:text-[10px] text-neutral-400 tracking-wider">
                CORPORATE SECURITY &bull; FACILITY MANAGEMENT &bull; WORKPLACE SERVICES
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
