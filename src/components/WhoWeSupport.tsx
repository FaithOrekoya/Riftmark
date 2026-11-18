import { Building2, Compass, Cpu, HardHat, Briefcase } from 'lucide-react';
import { SUPPORTED_INDUSTRIES } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';

const INDUSTRY_ICONS = [Building2, Compass, Cpu, HardHat, Briefcase];

export function WhoWeSupport() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-24 border-y border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-[600px]">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                WHO WE SUPPORT
              </p>
              <h2 className="font-heading text-[clamp(1.75rem,3vw,2.45rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#172B3A] [text-wrap:balance]">
                Built around the realities of AEC businesses.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] text-[#71808A] max-w-[400px]">
              Designed for firms where senior technical leaders manage both client relationships and
              active project delivery.
            </p>
          </div>
        </MotionReveal>

        {/* Clean Balanced 5-Column Industry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SUPPORTED_INDUSTRIES.map((industry, index) => {
            const Icon = INDUSTRY_ICONS[index];
            return (
              <MotionReveal key={industry.id} delay={index * 0.05} className="h-full">
                <div className="h-full bg-[#F7F8F6] border border-[#E5E7E3] rounded-[18px] p-6 flex flex-col justify-between transition-colors duration-150 hover:bg-[#FFFFFF]">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E5E7E3] flex items-center justify-center mb-5">
                    <Icon className="w-4 h-4 text-[#172B3A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[16px] font-bold text-[#172B3A] leading-snug mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.58] text-[#71808A]">
                      {industry.context}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
