import { ArrowRight, Search, TrendingUp, ClipboardCheck } from 'lucide-react';
import { SERVICES } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_ICONS = [Search, TrendingUp, ClipboardCheck];

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="bg-[#F7F8F6] pb-20 pt-4 lg:pb-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stravelle Services Overview: Sticky Left Intro + Stacked/Structured Right Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <MotionReveal>
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                WHAT WE DO
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3.1vw,2.55rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#172B3A] [text-wrap:balance] mb-4">
                A focused approach to recovering the opportunities you’ve already created.
              </h2>
              <p className="text-[16px] leading-[1.68] text-[#71808A]">
                Riftmark helps AEC businesses bring visibility, accountability, and consistent
                follow-up to their proposal pipeline.
              </p>
            </MotionReveal>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <MotionReveal key={service.id} delay={index * 0.06}>
                  <article className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[20px] p-7 sm:p-9 transition-all duration-200 hover:shadow-[0_16px_36px_-20px_rgba(23,43,58,0.12)]">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-[14px] font-bold text-[#B58A61] tabular-nums">
                          {service.number}
                        </span>
                        <span className="text-[#E5E7E3]" aria-hidden="true">
                          /
                        </span>
                        <span className="text-[13px] font-medium text-[#71808A]">
                          {service.focus}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#F7F8F6] border border-[#E5E7E3] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#172B3A]" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-heading text-[21px] sm:text-[22px] font-bold text-[#172B3A] mb-3">
                      {service.number} — {service.title}
                    </h3>

                    <p className="text-[15.5px] leading-[1.68] text-[#71808A] mb-6">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E7E3]">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#172B3A] hover:text-[#B58A61] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61] rounded-md"
                      >
                        <span>Discuss {service.title}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
