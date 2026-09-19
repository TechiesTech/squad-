import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle, X, Shield, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Security', 'Facility', 'Staffing', 'Technical'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative w-full bg-white text-black py-16 sm:py-24 lg:py-32 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-[1px] bg-black" />
              <span className="font-tech text-xs tracking-[0.25em] text-neutral-500 uppercase font-semibold">
                04 / CAPABILITY MATRIX
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] uppercase text-black">
              WHAT WE DO
            </h2>
            <p className="mt-2 sm:mt-3 font-sans text-base sm:text-lg md:text-xl text-neutral-600 font-light max-w-xl">
              Integrated services for modern workplaces. 16 specialized verticals governed by a unified command structure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 font-tech text-xs tracking-wider uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-black text-white border-black font-bold shadow-md'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${SERVICES_DATA.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedServiceModal(service)}
              data-cursor-text="EXPAND"
              className="group relative bg-white border border-neutral-300 hover:border-black overflow-hidden flex flex-col justify-between p-5 sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              {/* Background image preview on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Top Row: Number and Arrow */}
              <div className="relative z-10 flex items-center justify-between pb-4 sm:pb-6 border-b border-neutral-200 group-hover:border-neutral-400 transition-colors">
                <span className="font-tech text-sm font-semibold tracking-widest text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                  {service.number}
                </span>
                <span className="font-tech text-[10px] tracking-widest px-2 py-0.5 border border-neutral-200 uppercase text-neutral-500 group-hover:border-black group-hover:text-black transition-colors">
                  {service.category}
                </span>
              </div>

              {/* Middle: Title & Short Desc */}
              <div className="relative z-10 py-5 sm:py-6 my-auto">
                <h3 className="font-display font-bold text-base sm:text-xl tracking-tight uppercase leading-snug text-black group-hover:text-neutral-900 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Row: Interaction Arrow + Deliverables count */}
              <div className="relative z-10 pt-4 sm:pt-6 border-t border-neutral-100 group-hover:border-neutral-300 flex items-center justify-between transition-colors">
                <span className="font-tech text-[10px] sm:text-[11px] font-semibold text-neutral-500 group-hover:text-black tracking-wider uppercase">
                  {service.deliverables.length} MODULES
                </span>
                <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 bg-neutral-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-neutral-900 border border-neutral-700 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-300" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-lg uppercase">
                NEED A CUSTOM INTEGRATED WORKPLACE AUDIT?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-0.5">
                Our operations team conducts comprehensive on-site facility & security gap assessments.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService(SERVICES_DATA[0])}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-tech text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex-shrink-0 text-center"
          >
            REQUEST FACILITY AUDIT
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-white text-black border border-neutral-200 shadow-2xl overflow-hidden max-h-[92dvh] flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative h-40 sm:h-56 bg-neutral-900 overflow-hidden flex-shrink-0">
                <img
                  src={selectedServiceModal.image}
                  alt={selectedServiceModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 bg-black/60 hover:bg-black text-white flex items-center justify-center rounded-full transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-tech text-xs tracking-widest text-neutral-300 mb-1 uppercase">
                      <span>VERTICAL {selectedServiceModal.number}</span>
                      <span>&bull;</span>
                      <span>{selectedServiceModal.category}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-3xl tracking-tight uppercase">
                      {selectedServiceModal.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-5 sm:p-8 overflow-y-auto flex-1">
                <h4 className="font-tech text-xs tracking-[0.2em] uppercase text-neutral-500 font-semibold mb-2">
                  OPERATIONAL SCOPE & SPECIFICATION
                </h4>
                <p className="font-sans text-sm sm:text-base text-neutral-800 leading-relaxed">
                  {selectedServiceModal.fullDesc}
                </p>

                <h4 className="font-tech text-xs tracking-[0.2em] uppercase text-neutral-500 font-semibold mt-6 mb-3">
                  KEY DELIVERABLES & PROTOCOLS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedServiceModal.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 bg-neutral-50 border border-neutral-200"
                    >
                      <CheckCircle className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-neutral-800 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-tech">
                    <Shield className="w-4 h-4 text-black" />
                    <span>GUARANTEED ZERO DOWNTIME SLA</span>
                  </div>
                  <button
                    onClick={() => {
                      const service = selectedServiceModal;
                      setSelectedServiceModal(null);
                      onSelectService(service);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-black text-white font-tech text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors text-center"
                  >
                    REQUEST SERVICE QUOTATION
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
