import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOB_OPENINGS } from '../data/siteData';
import { JobOpening } from '../types';
import { ArrowRight, MapPin, Briefcase, X, CheckCircle2, UserCheck } from 'lucide-react';

export default function CareersSection() {
  const [openingsModalOpen, setOpeningsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  return (
    <section id="careers" className="relative w-full bg-white text-black py-16 sm:py-24 lg:py-32 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-px bg-black" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-500 uppercase font-semibold">
            09 / HUMAN TALENT & CAREERS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subheading, CTA */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] uppercase text-black leading-tight">
              BUILD YOUR <br />
              FUTURE <br />
              WITH US.
            </h2>

            <p className="mt-4 sm:mt-6 font-sans text-base sm:text-xl text-neutral-700 font-light max-w-md leading-relaxed">
              Join a team that keeps workplaces moving. We foster career mobility, tactical academy training, and dignified corporate service vocations.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpeningsModalOpen(true)}
                data-cursor-text="OPENINGS"
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white font-tech text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-neutral-800 flex items-center gap-3"
              >
                <span>VIEW OPENINGS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 pl-2 sm:pl-4 text-xs font-tech text-neutral-500 uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-black flex-shrink-0" />
                <span>EQUAL OPPORTUNITY EMPLOYER</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Image Animation */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-neutral-900 shadow-2xl group"
              data-cursor="image"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Squad Services Team at Work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white flex items-end justify-between">
                <div>
                  <span className="font-tech text-xs tracking-widest text-neutral-300 uppercase block">
                    THE SQUAD CULTURE
                  </span>
                  <span className="font-display font-bold text-sm sm:text-lg uppercase">
                    DISCIPLINE &bull; DIGNITY &bull; LEADERSHIP
                  </span>
                </div>
                <span className="font-tech text-xs text-neutral-400 tracking-wider">
                  500+ STRONG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Openings Modal */}
      <AnimatePresence>
        {openingsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-white text-black border border-neutral-300 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-neutral-950 text-white flex items-center justify-between border-b border-neutral-800">
                <div>
                  <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                    CAREER OPPORTUNITIES
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase mt-1">
                    CURRENT OPEN POSITIONS
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setOpeningsModalOpen(false);
                    setSelectedJob(null);
                    setAppliedSuccess(false);
                  }}
                  className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 divide-y divide-neutral-200">
                {appliedSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="font-display font-bold text-2xl uppercase">APPLICATION RECORDED</h4>
                    <p className="font-sans text-neutral-600 max-w-md mx-auto mt-2">
                      Thank you for your interest in Squad Services. Our recruitment team will review your profile and contact you within 48 hours.
                    </p>
                    <button
                      onClick={() => setAppliedSuccess(false)}
                      className="mt-6 px-6 py-2.5 bg-black text-white font-tech text-xs uppercase tracking-widest"
                    >
                      VIEW OTHER POSITIONS
                    </button>
                  </div>
                ) : (
                  JOB_OPENINGS.map((job) => (
                    <div key={job.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-tech text-[10px] tracking-widest px-2 py-0.5 bg-neutral-100 uppercase text-neutral-700 font-semibold">
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 font-tech text-xs text-neutral-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-lg sm:text-xl uppercase text-black">
                          {job.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
                          {job.description}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedJob(job);
                          setAppliedSuccess(true);
                        }}
                        className="self-start sm:self-center px-4 py-2 bg-neutral-100 hover:bg-black hover:text-white font-tech text-xs font-bold tracking-widest uppercase transition-colors flex-shrink-0"
                      >
                        APPLY NOW
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
