import { useState, useEffect, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { ASSETS } from '../data/riftmarkData';
import { ResilientImage } from './ResilientImage';
import { MotionReveal } from './MotionReveal';

interface FinalCtaSectionProps {
  nameInputRef: React.RefObject<HTMLInputElement | null>;
  selectedTopic?: string;
}

interface FormState {
  fullName: string;
  firmName: string;
  email: string;
  discipline: string;
  notes: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  firmName: '',
  email: '',
  discipline: 'Engineering Firm',
  notes: '',
};

export function FinalCtaSection({ nameInputRef, selectedTopic }: FinalCtaSectionProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedTopic) {
      setSubmitted(false);
      setForm((prev) => ({
        ...prev,
        notes: prev.notes.trim()
          ? prev.notes
          : `Interested in discussing: ${selectedTopic}`,
      }));
    }
  }, [selectedTopic]);

  const scrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 400);
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your name.';
    if (!form.firmName.trim()) nextErrors.firmName = 'Please enter your firm name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid work email.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] py-20 lg:py-28 border-t border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* SECTION 13: Stravelle Image-Led Final CTA Panel */}
        <MotionReveal>
          <div className="relative rounded-[24px] overflow-hidden border border-[#E5E7E3] bg-[#172B3A] min-h-[380px] flex items-center">
            <ResilientImage
              src={ASSETS.finalCta}
              alt="Architecture and MEP engineering leaders reviewing construction plans in a sunlit studio"
              fallbackLabel="Riftmark Revenue Recovery Consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#172B3A]/92 via-[#172B3A]/80 to-[#172B3A]/45"
            />

            <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16">
              <div className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[20px] p-7 sm:p-10 max-w-[620px] shadow-[0_20px_48px_-20px_rgba(23,43,58,0.35)]">
                <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                  NEXT STEP
                </p>
                <h2 className="font-heading text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#172B3A] [text-wrap:balance] mb-4">
                  Your next opportunity could already be waiting in your pipeline.
                </h2>
                <p className="text-[15.5px] leading-[1.68] text-[#71808A] mb-7">
                  Before investing more resources into finding new leads, take a closer look at the
                  proposals your team has already sent. Let’s identify where follow-up could make a
                  difference.
                </p>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
                >
                  <span>Book a Revenue Recovery Call</span>
                  <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Clean Consultation Request Card */}
        <MotionReveal delay={0.08}>
          <div
            id="consultation-form"
            className="bg-[#F7F8F6] border border-[#E5E7E3] rounded-[24px] p-7 sm:p-10 lg:p-12"
          >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-2">
                CONTACT RIFTMARK
              </p>
              <h3 className="font-heading text-[24px] sm:text-[26px] font-bold text-[#172B3A] mb-3">
                Schedule a Pipeline Conversation
              </h3>
              <p className="text-[15px] leading-[1.68] text-[#71808A] mb-6">
                Share a few details about your firm and current proposal follow-up process. David
                Chaidez replies directly with available times.
              </p>

              <div className="space-y-3.5 pt-5 border-t border-[#E5E7E3] text-[14px]">
                <div className="flex items-center gap-3 text-[#252B31]">
                  <MapPin className="w-4 h-4 text-[#B58A61] shrink-0" aria-hidden="true" />
                  <span>San Diego, California · U.S. AEC Firms</span>
                </div>
                <div className="flex items-center gap-3 text-[#252B31]">
                  <Mail className="w-4 h-4 text-[#B58A61] shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:David@rift-mark.com"
                    className="hover:text-[#B58A61] transition-colors font-medium"
                  >
                    David@rift-mark.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[20px] p-8">
                  <div className="w-10 h-10 rounded-xl bg-[#172B3A] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#B58A61]" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-[20px] font-bold text-[#172B3A] mb-2">
                    Request Received
                  </h4>
                  <p className="text-[15px] leading-[1.65] text-[#71808A] mb-6">
                    Thank you, <span className="font-semibold text-[#172B3A]">{form.fullName}</span>.
                    Your inquiry for <span className="font-semibold text-[#172B3A]">{form.firmName}</span>{' '}
                    has been noted. David will respond directly to{' '}
                    <span className="font-semibold text-[#172B3A]">{form.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 text-[13.5px] font-semibold text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl hover:bg-[#ECEEE9] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[20px] p-6 sm:p-8 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cta-fullName"
                        className="block text-[13px] font-semibold text-[#172B3A] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        ref={nameInputRef}
                        id="cta-fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 text-[14.5px] text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58A61]"
                      />
                      {errors.fullName && (
                        <p className="text-[12.5px] text-red-700 mt-1" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cta-firmName"
                        className="block text-[13px] font-semibold text-[#172B3A] mb-1.5"
                      >
                        Firm Name
                      </label>
                      <input
                        id="cta-firmName"
                        type="text"
                        required
                        value={form.firmName}
                        onChange={(e) => {
                          setForm({ ...form, firmName: e.target.value });
                          if (errors.firmName) setErrors({ ...errors, firmName: undefined });
                        }}
                        placeholder="Your firm"
                        className="w-full px-4 py-2.5 text-[14.5px] text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58A61]"
                      />
                      {errors.firmName && (
                        <p className="text-[12.5px] text-red-700 mt-1" role="alert">
                          {errors.firmName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cta-email"
                        className="block text-[13px] font-semibold text-[#172B3A] mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@firm.com"
                        className="w-full px-4 py-2.5 text-[14.5px] text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58A61]"
                      />
                      {errors.email && (
                        <p className="text-[12.5px] text-red-700 mt-1" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cta-discipline"
                        className="block text-[13px] font-semibold text-[#172B3A] mb-1.5"
                      >
                        Firm Type
                      </label>
                      <select
                        id="cta-discipline"
                        value={form.discipline}
                        onChange={(e) => setForm({ ...form, discipline: e.target.value })}
                        className="w-full px-4 py-2.5 text-[14.5px] text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58A61]"
                      >
                        <option>Architecture Firm</option>
                        <option>Engineering Firm</option>
                        <option>MEP Consultant</option>
                        <option>Construction Company</option>
                        <option>Other AEC Professional Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cta-notes"
                      className="block text-[13px] font-semibold text-[#172B3A] mb-1.5"
                    >
                      Pipeline Context (Optional)
                    </label>
                    <textarea
                      id="cta-notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Briefly share where proposals currently stall after submission..."
                      className="w-full px-4 py-2.5 text-[14.5px] text-[#172B3A] bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58A61] resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[12.5px] text-[#71808A]">
                      Confidential · No obligation
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14.5px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Book a Revenue Recovery Call</span>
                      <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        </MotionReveal>
      </div>
    </section>
  );
}
