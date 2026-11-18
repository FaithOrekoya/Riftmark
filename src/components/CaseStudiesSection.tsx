import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { CASE_STUDIES, CaseStudyItem } from '../data/riftmarkData';
import { ResilientImage } from './ResilientImage';
import { MotionReveal } from './MotionReveal';
import { AnimatedMetricValue } from './AnimatedMetricValue';

interface CaseStudiesSectionProps {
  onBookCall: (topic?: string) => void;
}

export function CaseStudiesSection({ onBookCall }: CaseStudiesSectionProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  useEffect(() => {
    if (!selectedCase) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCase(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedCase]);

  return (
    <section id="case-studies" className="bg-[#F7F8F6] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
            <div className="max-w-[640px]">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                FEATURED CASE STUDIES
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3.1vw,2.55rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#172B3A] [text-wrap:balance] mb-4">
                Real pipeline challenges. Measurable recovery opportunities.
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#71808A]">
                Explore examples of how a more intentional approach to proposal follow-up can help AEC
                businesses reconnect with opportunities.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setSelectedCase(CASE_STUDIES[0])}
                className="inline-flex items-center gap-2 px-5 py-3 text-[14px] font-semibold text-[#172B3A] bg-[#FFFFFF] hover:bg-[#ECEEE9] border border-[#E5E7E3] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Two Featured Image-Led Case Study Cards (Stravelle Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <MotionReveal key={study.id} delay={index * 0.08} className="h-full">
              <article className="h-full bg-[#FFFFFF] border border-[#E5E7E3] rounded-[24px] overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-[0_18px_40px_-22px_rgba(23,43,58,0.14)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#172B3A]">
                  <ResilientImage
                    src={study.image}
                    alt={study.imageAlt}
                    fallbackLabel={study.industry}
                    className="w-full h-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/85 via-[#172B3A]/20 to-transparent"
                  />
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#B58A61]">
                        {study.number}
                      </p>
                      <p className="font-heading text-[34px] sm:text-[38px] font-extrabold leading-none text-white tabular-nums mt-1">
                        <AnimatedMetricValue value={study.figure} />
                      </p>
                    </div>
                    <p className="text-[13px] font-medium text-slate-200 text-right">
                      {study.industry}
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[12.5px] font-medium text-[#71808A] mb-3">
                      <span className="font-semibold text-[#B58A61]">{study.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.industry}</span>
                    </div>

                    <h3 className="font-heading text-[22px] sm:text-[24px] font-bold text-[#172B3A] leading-snug mb-3">
                      {study.headline}
                    </h3>

                    <p className="text-[15.5px] leading-[1.68] text-[#71808A] mb-6">
                      {study.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#E5E7E3] flex items-center justify-between gap-4">
                    <span className="text-[13px] text-[#71808A]">{study.figureCaption}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(study)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#172B3A] hover:text-[#B58A61] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Read Details</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Verified Case Study Detail Modal (No invented client identities or extra dates) */}
      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172B3A]/60 backdrop-blur-xs"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[24px] max-w-[640px] w-full overflow-hidden shadow-[0_24px_60px_-15px_rgba(23,43,58,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 sm:px-8 py-5 border-b border-[#E5E7E3] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#71808A]">
                <span className="font-semibold text-[#B58A61]">{selectedCase.number}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCase.industry}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                aria-label="Close case study summary"
                className="w-9 h-9 rounded-lg border border-[#E5E7E3] flex items-center justify-center text-[#172B3A] hover:bg-[#F7F8F6] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {CASE_STUDIES.map((cs) => (
                  <button
                    key={cs.id}
                    type="button"
                    onClick={() => setSelectedCase(cs)}
                    className={`px-3.5 py-1.5 text-[12.5px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                      cs.id === selectedCase.id
                        ? 'bg-[#172B3A] text-white border-[#172B3A]'
                        : 'bg-[#F7F8F6] text-[#71808A] border-[#E5E7E3] hover:text-[#172B3A]'
                    }`}
                  >
                    {cs.number}
                  </button>
                ))}
              </div>

              <p className="font-heading text-[40px] font-extrabold text-[#172B3A] tabular-nums leading-none mb-2">
                {selectedCase.figure}
              </p>
              <p className="text-[13.5px] font-medium text-[#B58A61] mb-4">
                {selectedCase.figureCaption}
              </p>

              <h3
                id="case-modal-title"
                className="font-heading text-[24px] font-bold text-[#172B3A] mb-4"
              >
                {selectedCase.headline}
              </h3>

              <p className="text-[15.5px] leading-[1.7] text-[#71808A] mb-6">
                {selectedCase.description}
              </p>

              <div className="bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl p-4 mb-6 text-[13px] leading-[1.6] text-[#71808A]">
                Note: Client identities are kept strictly confidential. These figures reflect
                reported outcomes shared by David Chaidez and are not presented as guaranteed
                results for every engagement.
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E5E7E3]">
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="text-[14px] font-medium text-[#71808A] hover:text-[#172B3A] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const topic = selectedCase.headline;
                    setSelectedCase(null);
                    onBookCall(topic);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Book a Revenue Recovery Call</span>
                  <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
