import { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, X } from 'lucide-react';
import { ASSETS, INSIGHT_ARTICLES, InsightArticle } from '../data/riftmarkData';
import { ResilientImage } from './ResilientImage';
import { MotionReveal } from './MotionReveal';

interface FounderPerspectiveSectionProps {
  onBookCall: (topic?: string) => void;
}

export function FounderPerspectiveSection({ onBookCall }: FounderPerspectiveSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    if (!selectedArticle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedArticle]);

  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28 border-y border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION 11: Founder Perspective replacing fabricated client testimonials */}
        <div className="mb-20">
          <MotionReveal>
            <div className="max-w-[680px] mb-10">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                FOUNDER PERSPECTIVE
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3.1vw,2.55rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#172B3A] [text-wrap:balance]">
                A more intentional approach to business development.
              </h2>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <div className="bg-[#F7F8F6] border border-[#E5E7E3] rounded-[24px] p-7 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-4">
                  <div className="rounded-[20px] overflow-hidden border border-[#E5E7E3] bg-[#FFFFFF] aspect-[3/4] max-w-[340px]">
                    <ResilientImage
                      src={ASSETS.founderPortrait}
                      alt="David Chaidez, Founder of Riftmark"
                      fallbackLabel="David Chaidez · Founder"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <blockquote className="font-heading text-[20px] sm:text-[24px] font-semibold leading-[1.45] text-[#172B3A] mb-6">
                    “Most AEC firms don’t have a lead generation shortage—they have a follow-up gap
                    caused by the reality of busy project schedules. When technical leaders bring
                    consistent structure to proposals they’ve already written, opportunities that
                    felt quiet often turn back into active conversations.”
                  </blockquote>

                  <p className="text-[15.5px] leading-[1.7] text-[#71808A] mb-7">
                    Based in San Diego, California, Riftmark works directly with architecture,
                    engineering, and construction principals to review stalled proposals, restore
                    accountability, and build repeatable follow-up habits without disrupting active
                    billable work or handing client relationships to outside cold callers.
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E5E7E3]">
                    <div>
                      <p className="font-heading text-[16px] font-bold text-[#172B3A]">
                        David Chaidez
                      </p>
                      <p className="text-[13.5px] text-[#71808A]">
                        Founder, Riftmark · San Diego, CA
                      </p>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/davidchaidez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-[13.5px] font-semibold text-[#172B3A] bg-[#FFFFFF] hover:bg-[#ECEEE9] border border-[#E5E7E3] rounded-xl transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#172B3A]" aria-hidden="true" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Insights Editorial Grid (#insights anchor from Header) */}
        <div id="insights" className="pt-4 scroll-mt-24">
          <MotionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-2">
                  INSIGHTS
                </p>
                <h3 className="font-heading text-[24px] sm:text-[28px] font-bold text-[#172B3A]">
                  Perspectives on AEC Proposal Follow-Up
                </h3>
              </div>
              <p className="text-[14.5px] text-[#71808A] max-w-[360px]">
                Practical field notes based on David Chaidez’s writing for AEC principals.
              </p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHT_ARTICLES.map((article, index) => (
              <MotionReveal key={article.id} delay={index * 0.06} className="h-full">
                <article className="h-full bg-[#F7F8F6] border border-[#E5E7E3] rounded-[20px] overflow-hidden flex flex-col transition-all duration-200 hover:bg-[#FFFFFF] hover:shadow-[0_14px_32px_-18px_rgba(23,43,58,0.12)]">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#E5E7E3]">
                    <ResilientImage
                      src={article.image}
                      alt={article.imageAlt}
                      fallbackLabel={article.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[12.5px] font-medium text-[#71808A] mb-2.5">
                        <span className="font-semibold text-[#B58A61]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-heading text-[18px] font-bold leading-snug text-[#172B3A] mb-2.5">
                        {article.title}
                      </h4>
                      <p className="text-[14px] leading-[1.65] text-[#71808A] mb-5">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#E5E7E3]">
                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#172B3A] hover:text-[#B58A61] transition-colors cursor-pointer"
                      >
                        <span>Read Note</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="insight-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172B3A]/60 backdrop-blur-xs"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[24px] max-w-[680px] w-full max-h-[88vh] overflow-y-auto shadow-[0_24px_60px_-15px_rgba(23,43,58,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E5E7E3] px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#71808A]">
                <span className="font-semibold text-[#B58A61]">{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
                className="w-9 h-9 rounded-lg border border-[#E5E7E3] flex items-center justify-center text-[#172B3A] hover:bg-[#F7F8F6] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[12.5px] font-medium text-[#71808A] mb-2">
                {selectedArticle.sourceLabel}
              </p>
              <h3
                id="insight-modal-title"
                className="font-heading text-[24px] sm:text-[26px] font-bold leading-snug text-[#172B3A] mb-5"
              >
                {selectedArticle.title}
              </h3>
              <div className="space-y-4 text-[15.5px] leading-[1.7] text-[#252B31] mb-6">
                {selectedArticle.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="bg-[#F7F8F6] border border-[#E5E7E3] rounded-xl p-5 mb-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#B58A61] mb-1">
                  Key Takeaway
                </p>
                <p className="text-[14.5px] font-medium text-[#172B3A]">
                  {selectedArticle.takeaway}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E5E7E3]">
                <span className="text-[13px] text-[#71808A]">David Chaidez · Riftmark</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    onBookCall(selectedArticle.title);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl cursor-pointer"
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
