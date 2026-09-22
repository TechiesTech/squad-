import { ArrowUp, ShieldCheck, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800/80 pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-neutral-900">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-neutral-500 bg-neutral-950 flex items-center justify-center">
                  <span className="font-display font-black text-sm text-white">SS</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg tracking-[0.15em] uppercase text-white">
                    SQUAD SERVICES
                  </span>
                  <span className="font-tech text-[10px] text-neutral-400 tracking-[0.25em] uppercase font-semibold">
                    PRIVATE LIMITED
                  </span>
                </div>
              </div>

              <p className="mt-6 font-sans text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
                Enterprise security, mechanized facility management, certified ground forces, and integrated workplace solutions engineered for world-class corporate organizations.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-tech text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-neutral-300" />
              <span>PSARA &bull; ISO 9001:2015 &bull; STATUTORY 100% COMPLIANT</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-6">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-3 font-tech text-xs tracking-wider uppercase text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">SOLUTIONS</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">CLIENTS</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">CAREERS</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Selected Key Services */}
          <div className="lg:col-span-3">
            <h4 className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-6">
              CORE SERVICES
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-xs text-neutral-400">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.number} &mdash; {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-white font-tech hover:underline pt-1 inline-block">
                  + 9 MORE SPECIALIZED VERTICALS &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Headquarters */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-6">
                CONNECT
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="w-9 h-9 border border-neutral-800 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 border border-neutral-800 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 border border-neutral-800 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 border border-neutral-800 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="Global"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top */}
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 font-tech text-xs tracking-widest text-neutral-400 hover:text-white transition-colors group"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-neutral-400 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} SQUAD SERVICES PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
            <span>&bull;</span>
            <a href="#hero" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </a>
            <span>&bull;</span>
            <a href="#hero" className="hover:text-white transition-colors">
              SECURITY DISCLOSURES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
