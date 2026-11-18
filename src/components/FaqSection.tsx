import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';

interface FaqSectionProps {
  onBookCall: (topic?: string) => void;
}

export function FaqSection({ onBookCall }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#F7F8F6] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Left Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <MotionReveal>
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                FAQ
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#172B3A] [text-wrap:balance] mb-4">
                Questions AEC firms often ask.
              </h2>
              <p className="text-[15.5px] leading-[1.68] text-[#71808A] mb-7">
                Straightforward answers on how Riftmark approaches proposal follow-up, internal
                ownership, and your current pipeline.
              </p>
              <button
                type="button"
                onClick={() => onBookCall('FAQ Question')}
                className="inline-flex items-center px-5 py-3 text-[14px] font-semibold text-[#172B3A] bg-[#FFFFFF] hover:bg-[#ECEEE9] border border-[#E5E7E3] rounded-xl transition-colors cursor-pointer"
              >
                Ask a Question Directly
              </button>
            </MotionReveal>
          </div>

          {/* Right 5-Question Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <MotionReveal key={item.id} delay={index * 0.04}>
                  <div
                    className={`border rounded-[20px] transition-colors duration-150 ${
                      isOpen
                        ? 'bg-[#FFFFFF] border-[#172B3A]/20 shadow-[0_10px_28px_-18px_rgba(23,43,58,0.12)]'
                        : 'bg-[#FFFFFF]/80 border-[#E5E7E3] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61] rounded-[20px]"
                    >
                      <span className="font-heading text-[16.5px] font-bold text-[#172B3A] leading-snug">
                        {item.question}
                      </span>
                      <span className="w-8 h-8 rounded-lg bg-[#F7F8F6] border border-[#E5E7E3] flex items-center justify-center shrink-0 text-[#172B3A]">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                        ) : (
                          <Plus className="w-4 h-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-panel-${item.id}`}
                        className="px-6 pb-6 pt-1 text-[15px] leading-[1.68] text-[#71808A]"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
