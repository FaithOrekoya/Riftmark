import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookCall: (topic?: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onBookCall }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleMobileBook = () => {
    setMobileOpen(false);
    onBookCall();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F8F6]/94 backdrop-blur-md border-b border-[#E5E7E3]">
      <div className="max-w-[1200px] mx-auto px-6 h-[74px] flex items-center justify-between gap-6">
        {/* Left: Riftmark Wordmark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-[#172B3A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61] rounded-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="28" height="28" rx="6" fill="#172B3A" />
            <path
              d="M8.5 20V8H15.2C17.6 8 19.2 9.35 19.2 11.45C19.2 13.05 18.2 14.2 16.55 14.65L19.6 20H16.95L14.2 15.05H10.95V20H8.5ZM10.95 13.05H14.85C16.05 13.05 16.75 12.45 16.75 11.45C16.75 10.45 16.05 9.95 14.85 9.95H10.95V13.05Z"
              fill="#FFFFFF"
            />
            <rect x="20.5" y="18" width="2.5" height="2" rx="0.5" fill="#B58A61" />
          </svg>
          <span className="font-heading text-[18px] font-bold tracking-tight text-[#172B3A]">
            Riftmark
          </span>
        </a>

        {/* Center/Right: Clean Single-Line Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#71808A]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#172B3A] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#B58A61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Prominent Consultation CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onBookCall()}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-[14px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61] focus-visible:ring-offset-2"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E5E7E3] bg-[#FFFFFF] text-[#172B3A] hover:bg-[#F7F8F6] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A61]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E5E7E3] bg-[#FFFFFF] px-6 py-5 space-y-4">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 text-[15px] font-medium text-[#172B3A] hover:text-[#B58A61] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E5E7E3]">
            <button
              type="button"
              onClick={handleMobileBook}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-semibold text-white bg-[#172B3A] hover:bg-[#252B31] rounded-xl transition-colors cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#B58A61]" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
