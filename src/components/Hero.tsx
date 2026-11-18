import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/riftmarkData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onBookCall: (topic?: string) => void;
}

export function Hero({ onBookCall }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#172B3A] min-h-[540px] lg:min-h-[640px] flex items-center"
    >
      {/* Full-Width Architectural Consulting Photography */}
      <ResilientImage
        src={ASSETS.heroPanel}
        alt="AEC engineering and architecture principals discussing project drawings in a modern boardroom"
        fallbackLabel="Riftmark AEC Revenue Recovery"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Measured Contrast Scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#172B3A]/95 via-[#172B3A]/82 to-[#172B3A]/35"
      />

      {/* Aligned Container Inside Full-Width Hero */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-[700px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12.5px] font-semibold tracking-[0.12em] uppercase text-[#B58A61] mb-4"
          >
            AEC REVENUE RECOVERY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2.35rem,4.3vw,3.65rem)] font-bold leading-[1.09] tracking-[-0.025em] text-white [text-wrap:balance] mb-6"
          >
            Your Next Revenue Opportunity Is Already in Your Pipeline.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-[17px] sm:text-[18px] leading-[1.65] text-slate-200 max-w-[54ch] mb-9"
          >
            Riftmark helps architecture, engineering, and construction firms recover opportunities
            from proposals that have been sent but never properly followed up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => onBookCall('Revenue Recovery Call')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-[#172B3A] bg-[#FFFFFF] hover:bg-[#F7F8F6] rounded-xl shadow-[0_10px_24px_-8px_rgba(0,0,0,0.28)] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
            >
              <span>Book a Revenue Recovery Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
            </button>

            <a
              href="#our-approach"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-white/10 hover:bg-white/18 border border-white/25 backdrop-blur-xs rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
            >
              <span>Explore Our Approach</span>
              <ArrowRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
