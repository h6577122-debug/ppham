import { useEffect } from 'react';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import AuroraEngine from '@/components/effects/AuroraEngine';
import { ToastNotifications } from '@/components/effects/ToastNotifications';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { AppShowcase } from '@/components/sections/AppShowcase';
import { AICapabilities } from '@/components/sections/AICapabilities';
import { Timeline } from '@/components/sections/Timeline';
import { Roadmap } from '@/components/sections/Roadmap';
import { Achievements } from '@/components/sections/Achievements';
import { LiveActivity } from '@/components/sections/LiveActivity';
import { Philosophy } from '@/components/sections/Philosophy';
import { Console } from '@/components/sections/Console';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { KonamiEasterEgg } from '@/components/sections/KonamiEasterEgg';
import { MobileBottomNav } from '@/components/sections/MobileBottomNav';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const speed = parseFloat((layer as HTMLElement).dataset.speed || '0');
        const yPos = -(scrolled * speed);
        (layer as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[var(--bg-base)] min-h-screen text-[var(--text-primary)] overflow-x-hidden selection:bg-[var(--neon-cyan)] selection:text-[#04040a]">
      {/* Global effects */}
      <AuroraEngine />
      <div className="noise-overlay" />
      <LoadingScreen />
      <CustomCursor />
      <ToastNotifications />
      <KonamiEasterEgg onActivate={() => {}} />
      <MobileBottomNav />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="bg-[var(--bg-base)]">
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <AppShowcase />
          <AICapabilities />
          <Timeline />
          <Roadmap />
          <Achievements />
          <LiveActivity />
          <Philosophy />
          <Console />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
