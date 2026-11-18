import { Linkedin, Mail } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#172B3A] text-white border-t border-[#252B31]">
      <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16">
        <MotionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5 text-white mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="28" height="28" rx="6" fill="#252B31" />
                <path
                  d="M8.5 20V8H15.2C17.6 8 19.2 9.35 19.2 11.45C19.2 13.05 18.2 14.2 16.55 14.65L19.6 20H16.95L14.2 15.05H10.95V20H8.5ZM10.95 13.05H14.85C16.05 13.05 16.75 12.45 16.75 11.45C16.75 10.45 16.05 9.95 14.85 9.95H10.95V13.05Z"
                  fill="#FFFFFF"
                />
                <rect x="20.5" y="18" width="2.5" height="2" rx="0.5" fill="#B58A61" />
              </svg>
              <span className="font-heading text-[18px] font-bold tracking-tight text-white">
                Riftmark
              </span>
            </a>
            <p className="text-[14.5px] leading-[1.68] text-slate-300 max-w-[320px]">
              Revenue recovery and structured proposal follow-up consulting for architecture,
              engineering, and construction firms.
            </p>
          </div>

          {/* Company Navigation */}
          <div className="lg:col-span-2">
            <p className="font-heading text-[12.5px] font-bold tracking-[0.06em] uppercase text-[#B58A61] mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Navigation */}
          <div className="lg:col-span-3">
            <p className="font-heading text-[12.5px] font-bold tracking-[0.06em] uppercase text-[#B58A61] mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01 — Proposal Pipeline Review
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02 — Revenue Recovery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03 — Follow-Up Systems &amp; Accountability
                </a>
              </li>
              <li>
                <a href="#our-approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Verified Social */}
          <div className="lg:col-span-3">
            <p className="font-heading text-[12.5px] font-bold tracking-[0.06em] uppercase text-[#B58A61] mb-4">
              Contact
            </p>
            <div className="space-y-2.5 text-[14px] text-slate-300">
              <p>San Diego, California</p>
              <a
                href="mailto:David@rift-mark.com"
                className="inline-flex items-center gap-2 text-white hover:text-[#B58A61] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B58A61]" aria-hidden="true" />
                <span>David@rift-mark.com</span>
              </a>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/davidchaidez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/16 text-[13.5px] font-medium text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#B58A61]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </MotionReveal>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-slate-400">
          <p>© {year} Riftmark. All rights reserved.</p>
          <p>rift-mark.com · San Diego, California</p>
        </div>
      </div>
    </footer>
  );
}
