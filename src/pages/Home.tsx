import { useEffect } from 'react';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import AuroraEngine from '@/components/effects/AuroraEngine';
import { ToastNotifications } from '@/components/effects/ToastNotifications';
import { AirplaneBanner } from '@/components/effects/AirplaneBanner';
import { FloatingLetters } from '@/components/effects/FloatingLetters';
import { ShockwaveRipple } from '@/components/effects/ShockwaveRipple';
import { MouseSpotlight } from '@/components/effects/MouseSpotlight';
import { DNAHelix } from '@/components/effects/DNAHelix';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { InfinityTicker } from '@/components/sections/InfinityTicker';
import { WarRoom } from '@/components/sections/WarRoom';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { GravityRoom } from '@/components/sections/GravityRoom';
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
import { Mirror } from '@/components/sections/Mirror';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { KonamiEasterEgg } from '@/components/sections/KonamiEasterEgg';
import { MobileBottomNav } from '@/components/sections/MobileBottomNav';
import { ScreensaverMode } from '@/components/sections/ScreensaverMode';

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
      {/* Global fixed effects */}
      <AuroraEngine />
      <div className="noise-overlay" />
      <LoadingScreen />
      <CustomCursor />
      <ToastNotifications />
      <KonamiEasterEgg onActivate={() => {}} />
      <MobileBottomNav />
      <ScreensaverMode />
      <AirplaneBanner />
      <FloatingLetters />
      <ShockwaveRipple />
      <MouseSpotlight />
      <DNAHelix />

      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Infinity Ticker */}
        <InfinityTicker />

        {/* 3. War Room */}
        <WarRoom />

        <div className="bg-[var(--bg-base)]">
          {/* 4. About (with Spinning Globe) */}
          <About />

          {/* 5. Skills */}
          <Skills />

          {/* 6. Gravity Room */}
          <GravityRoom />

          {/* 7. Tech Stack Universe */}
          <TechStack />

          {/* 8. Projects */}
          <Projects />

          {/* 9. App Showcase */}
          <AppShowcase />

          {/* 10. AI Capabilities */}
          <AICapabilities />

          {/* 11. Developer Timeline */}
          <Timeline />

          {/* 12. Vision 2030 Roadmap */}
          <Roadmap />

          {/* 13. Achievements */}
          <Achievements />

          {/* 14. Live Activity */}
          <LiveActivity />

          {/* 15. Philosophy */}
          <Philosophy />

          {/* 16. Developer Console */}
          <Console />

          {/* 17. Testimonials */}
          <Testimonials />

          {/* 18. Mirror — Cursor Spotlight */}
          <Mirror />

          {/* 19. Contact */}
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
