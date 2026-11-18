import { MotionReveal } from './MotionReveal';

const CREDIBILITY_HIGHLIGHTS = [
  'Architecture, Engineering & Construction Focus',
  'Stalled Proposal Identification',
  'Structured Follow-Up Cadence',
  'Clear Internal Ownership',
];

export function TrustSection() {
  return (
    <section
      aria-label="Riftmark AEC pipeline credibility"
      className="bg-[#F7F8F6] py-12 lg:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          <div className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[20px] p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pb-8 border-b border-[#E5E7E3]">
              <div className="lg:col-span-6">
                <h2 className="font-heading text-[22px] sm:text-[26px] font-bold leading-[1.24] tracking-[-0.02em] text-[#172B3A] [text-wrap:balance]">
                  A better way to capture the value already sitting in your pipeline.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15.5px] leading-[1.68] text-[#71808A]">
                  Many AEC firms don’t necessarily need more leads. They need a reliable process for
                  following up on the proposals they’ve already worked hard to win.
                </p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CREDIBILITY_HIGHLIGHTS.map((item, idx) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="font-heading text-[12.5px] font-bold text-[#B58A61] tabular-nums shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-[13.5px] font-medium text-[#252B31]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
