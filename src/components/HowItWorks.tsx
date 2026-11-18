import { APPROACH_STEPS } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';

export function HowItWorks() {
  return (
    <section id="our-approach" className="bg-[#F7F8F6] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                OUR APPROACH
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3.1vw,2.55rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#172B3A] [text-wrap:balance]">
                A practical process from overlooked proposal to renewed opportunity.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] leading-[1.68] text-[#71808A]">
                A structured approach that gives your team clarity on what needs attention and what
                happens next.
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Stravelle Numbered Steps with Subtle Visual Dividers */}
        <MotionReveal delay={0.08}>
          <div className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[24px] p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E5E7E3]">
              {APPROACH_STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col justify-between ${
                    index > 0 ? 'pt-6 border-t border-[#E5E7E3] md:pt-0 md:border-t-0' : ''
                  } lg:px-7 first:lg:pl-0 last:lg:pr-0`}
                >
                  <div>
                    <p className="font-heading text-[32px] font-extrabold tracking-tight text-[#B58A61] tabular-nums mb-5">
                      {step.number}
                    </p>
                    <h3 className="font-heading text-[19px] font-bold text-[#172B3A] mb-2.5">
                      {step.number} — {step.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.68] text-[#71808A]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
