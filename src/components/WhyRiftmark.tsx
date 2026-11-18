import { ArrowUpRight, Eye, UserCheck, Repeat, Target } from 'lucide-react';
import { WHY_BENEFITS } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';

interface WhyRiftmarkProps {
  onBookCall: (topic?: string) => void;
}

const BENEFIT_ICONS = [Eye, UserCheck, Repeat, Target];

export function WhyRiftmark({ onBookCall }: WhyRiftmarkProps) {
  return (
    <section id="why-riftmark" className="bg-[#FFFFFF] py-20 lg:py-28 border-y border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          {/* Stravelle Why Panel */}
          <div className="bg-[#172B3A] text-white rounded-[24px] p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Prominent Heading + CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                    WHY RIFTMARK
                  </p>
                  <h2 className="font-heading text-[clamp(1.85rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white [text-wrap:balance] mb-5">
                    More than proposal tracking. A process built to move opportunities forward.
                  </h2>
                  <p className="text-[16px] leading-[1.68] text-slate-300 mb-8">
                    Riftmark helps AEC firms replace inconsistent follow-up with a more intentional
                    approach to recovering potential revenue.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onBookCall('Pipeline Follow-Up Consultation')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-[#172B3A] bg-[#FFFFFF] hover:bg-[#F7F8F6] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
                  >
                    <span>Book a Consultation</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Right Four Clear Benefit Statements */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {WHY_BENEFITS.map((benefit, index) => {
                  const Icon = BENEFIT_ICONS[index];
                  return (
                    <div
                      key={benefit.id}
                      className="bg-white/[0.06] border border-white/12 rounded-[20px] p-6 sm:p-7 flex flex-col justify-between"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                        <Icon className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-[18px] font-bold text-white mb-2 leading-snug">
                          {benefit.title}
                        </h3>
                        <p className="text-[14.5px] leading-[1.65] text-slate-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
