import { KEY_METRICS } from '../data/riftmarkData';
import { MotionReveal } from './MotionReveal';
import { AnimatedMetricValue } from './AnimatedMetricValue';

export function KeyMetrics() {
  return (
    <section aria-label="Key Metrics" className="bg-[#F7F8F6] py-16 lg:py-22">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionReveal>
          <div className="bg-[#FFFFFF] border border-[#E5E7E3] rounded-[24px] p-7 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-10 mb-10 border-b border-[#E5E7E3]">
              <div>
                <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-2">
                  KEY METRICS
                </p>
                <h2 className="font-heading text-[clamp(1.65rem,2.8vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#172B3A]">
                  Reported recovery figures &amp; specialized focus.
                </h2>
              </div>
              <p className="text-[13.5px] leading-[1.55] text-[#71808A] max-w-[420px]">
                Reported outcomes shared by David from specific proposal recovery engagements—not
                general industry averages or guaranteed client results.
              </p>
            </div>

            {/* Four Evenly Spaced Figures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {KEY_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col justify-between pt-2 lg:pt-0"
                >
                  <div>
                    <p className="font-heading text-[42px] sm:text-[48px] font-bold tracking-[-0.03em] leading-none text-[#172B3A] tabular-nums mb-3">
                      <AnimatedMetricValue value={metric.value} />
                    </p>
                    <p className="font-heading text-[15.5px] font-bold text-[#252B31] mb-1.5">
                      {metric.label}
                    </p>
                    <p className="text-[13.5px] leading-[1.6] text-[#71808A]">
                      {metric.note}
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
