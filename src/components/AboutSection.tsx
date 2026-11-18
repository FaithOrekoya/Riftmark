import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/riftmarkData';
import { ResilientImage } from './ResilientImage';
import { MotionReveal } from './MotionReveal';

interface AboutSectionProps {
  onBookCall: (topic?: string) => void;
}

export function AboutSection({ onBookCall }: AboutSectionProps) {
  return (
    <section id="about" className="bg-[#FFFFFF] py-20 lg:py-28 border-y border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Editorial Text Split (Stravelle Intro Pattern) */}
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            <div className="lg:col-span-6">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#B58A61] mb-3">
                ABOUT RIFTMARK
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,3.2vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#172B3A] [text-wrap:balance]">
                The opportunity isn’t always another lead. Sometimes it’s the conversation that never happened.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-5 text-[16px] leading-[1.7] text-[#71808A]">
              <p>
                Riftmark works with AEC firms to identify stalled proposals, bring structure to
                follow-up, and help teams reconnect with opportunities already in their pipeline.
              </p>
              <p>
                The goal is to turn forgotten conversations into active business opportunities through
                clear ownership, consistent communication, and a practical revenue recovery process.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onBookCall('About Riftmark & Pipeline Process')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-[14.5px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
                >
                  <span>Get to Know Riftmark</span>
                  <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Two Complementary Editorial Images (Stravelle Gallery Pattern) */}
        <MotionReveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7 rounded-[20px] overflow-hidden border border-[#E5E7E3] bg-[#F7F8F6] aspect-[16/10]">
              <ResilientImage
                src={ASSETS.aboutDocs}
                alt="AEC professionals reviewing architectural blueprints and bound engineering proposals"
                fallbackLabel="AEC Proposal Review"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-5 rounded-[20px] overflow-hidden border border-[#E5E7E3] bg-[#F7F8F6] aspect-[16/10] md:aspect-auto">
              <ResilientImage
                src={ASSETS.aboutLeadership}
                alt="Architecture and construction leadership discussing pipeline opportunities"
                fallbackLabel="AEC Leadership Discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
