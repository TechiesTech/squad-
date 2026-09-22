import { useState, forwardRef, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactSectionProps {
  preselectedService?: string;
}

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ preselectedService }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || '01 SECURITY SERVICES',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-black text-white py-16 sm:py-24 lg:py-32 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-[1px] bg-neutral-600" />
          <span className="font-tech text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            10 / GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Big Heading, Direct Info, 24/7 Hotline */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] uppercase text-white leading-tight">
              LET'S BUILD <br />
              A BETTER <br />
              <span className="text-neutral-400">WORKPLACE.</span>
            </h2>

            <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              Connect with our corporate client relations team for customized enterprise security evaluations, facility management RFPs, or nationwide staffing requirements.
            </p>

            {/* Direct Contact Channels */}
            <div className="mt-8 sm:mt-12 flex flex-col gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-neutral-300" />
                </div>
                <div>
                  <span className="font-tech text-[10px] tracking-widest text-neutral-400 uppercase block">
                    CORPORATE INQUIRIES
                  </span>
                  <a
                    href="mailto:contact@2squadservices.com"
                    className="font-display font-semibold text-base sm:text-lg text-white hover:text-neutral-300 transition-colors break-all"
                  >
                    contact@2squadservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-neutral-300" />
                </div>
                <div>
                  <span className="font-tech text-[10px] tracking-widest text-neutral-400 uppercase block">
                    TELEPHONE &amp; HOTLINE
                  </span>
                  <a
                    href="tel:+918000000000"
                    className="font-display font-semibold text-base sm:text-lg text-white hover:text-neutral-300 transition-colors"
                  >
                    +91 (0) 800 2-SQUAD (77823)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-neutral-300" />
                </div>
                <div>
                  <span className="font-tech text-[10px] tracking-widest text-neutral-400 uppercase block">
                    REGISTERED OFFICE
                  </span>
                  <p className="font-sans text-sm text-neutral-300 mt-0.5">
                    Squad Services Private Limited, Executive Business Tower, Corporate Hub, India
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Operations Badge */}
            <div className="mt-6 sm:mt-8 p-4 bg-neutral-900/60 border border-neutral-800 rounded flex items-center gap-3">
              <Clock className="w-5 h-5 text-neutral-300 flex-shrink-0" />
              <div className="font-tech text-xs text-neutral-300 tracking-wider">
                <span className="text-white font-semibold">24/7 SOC COMMAND: </span>
                Continuous round-the-clock supervisor dispatch and emergency response desk.
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
            <div className="mb-8">
              <span className="font-tech text-xs tracking-[0.2em] text-neutral-400 uppercase font-semibold block">
                START A CONVERSATION &rarr;
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white mt-1">
                REQUEST A PROPOSAL
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display font-bold text-2xl uppercase">INQUIRY RECEIVED</h4>
                <p className="font-sans text-neutral-400 max-w-md mt-2 text-sm sm:text-base">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your requirement for{' '}
                  <span className="text-white font-medium">{formData.serviceRequired}</span> has been logged with reference ID <span className="font-tech text-neutral-300">#2SQ-{Math.floor(1000 + Math.random() * 9000)}</span>. Our regional operations director will reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      serviceRequired: '01 SECURITY SERVICES',
                      message: '',
                    });
                  }}
                  className="mt-8 px-6 py-2.5 bg-white text-black font-tech text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Enterprises Ltd."
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. r.sharma@company.com"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div className="flex flex-col gap-2">
                  <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                    Primary Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-white transition-colors text-sm"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={`${srv.number} ${srv.title}`} className="bg-neutral-950 text-white">
                        {srv.number} &mdash; {srv.title} ({srv.category})
                      </option>
                    ))}
                    <option value="COMPLETE_INTEGRATED_PACKAGE" className="bg-neutral-950 text-white">
                      COMPREHENSIVE INTEGRATED WORKPLACE FACILITY &amp; SECURITY
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                    Scope Details / Facility Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details such as facility size (sq.ft.), number of shifts, site location, or specialized requirements..."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-sm resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor-text="SEND"
                  className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-tech text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'TRANSMITTING INQUIRY...' : 'SEND ENQUIRY'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
