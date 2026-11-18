import { useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { KeyMetrics } from './components/KeyMetrics';
import { Services } from './components/Services';
import { WhyRiftmark } from './components/WhyRiftmark';
import { HowItWorks } from './components/HowItWorks';
import { WhoWeSupport } from './components/WhoWeSupport';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FounderPerspectiveSection } from './components/FounderPerspectiveSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleBookCall = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    const formEl = document.getElementById('consultation-form');
    const target = formEl ?? document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7F8F6] text-[#252B31]">
        <Navbar onBookCall={handleBookCall} />
        <main className="flex-1">
          <Hero onBookCall={handleBookCall} />
          <TrustSection />
          <AboutSection onBookCall={handleBookCall} />
          <KeyMetrics />
          <Services onSelectService={handleBookCall} />
          <WhyRiftmark onBookCall={handleBookCall} />
          <HowItWorks />
          <WhoWeSupport />
          <CaseStudiesSection onBookCall={handleBookCall} />
          <FounderPerspectiveSection onBookCall={handleBookCall} />
          <FaqSection onBookCall={handleBookCall} />
          <FinalCtaSection nameInputRef={nameInputRef} selectedTopic={selectedTopic} />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
