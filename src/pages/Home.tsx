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
import { HackerMode } from '@/components/effects/HackerMode';
import { HamzaAI } from '@/components/effects/HamzaAI';
import { VelocityLines } from '@/components/effects/VelocityLines';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { InfinityTicker } from '@/components/sections/InfinityTicker';
import { WarRoom } from '@/components/sections/WarRoom';
import { About } from '@/components/sections/About';
import { SolarSystem } from '@/components/sections/SolarSystem';
import { TheForge } from '@/components/sections/TheForge';
import { GravityRoom } from '@/components/sections/GravityRoom';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { AppShowcase } from '@/components/sections/AppShowcase';
import { NeuralNetwork } from '@/components/sections/NeuralNetwork';
import { AICapabilities } from '@/components/sections/AICapabilities';
import { Timeline } from '@/components/sections/Timeline';
import { TheSignal } from '@/components/sections/TheSignal';
import { Roadmap } from '@/components/sections/Roadmap';
import { Achievements } from '@/components/sections/Achievements';
import { LiveActivity } from '@/components/sections/LiveActivity';
import { Philosophy } from '@/components/sections/Philosophy';
import { WallOfFire } from '@/components/sections/WallOfFire';
import { Console } from '@/components/sections/Console';
import { Testimonials } from '@/components/sections/Testimonials';
import { Multiverse } from '@/components/sections/Multiverse';
import { Mirror } from '@/components/sections/Mirror';
import { Contact } from '@/components/sections/Contact';
import { TheVault } from '@/components/sections/TheVault';
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
      <KonamiEasterEgg onActivate={() => { sessionStorage.setItem('konami-done', 'true'); window.dispatchEvent(new Event('konami-activated')); }} />
      <MobileBottomNav />
      <ScreensaverMode />
      <AirplaneBanner />
      <FloatingLetters />
      <ShockwaveRipple />
      <MouseSpotlight />
      <DNAHelix />
      <HackerMode />
      <HamzaAI />
      <VelocityLines />

      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Infinity Ticker */}
        <InfinityTicker />

        {/* 3. War Room */}
        <WarRoom />

        <div className="bg-[var(--bg-base)]">
          {/* 4. About */}
          <About />

          {/* 5. Skills — Solar System */}
          <SolarSystem />

          {/* 6. The Forge */}
          <TheForge />

          {/* 7. Gravity Room */}
          <GravityRoom />

          {/* 8. Tech Stack Universe */}
          <TechStack />

          {/* 9. Projects */}
          <Projects />

          {/* 10. App Showcase */}
          <AppShowcase />

          {/* 11. Neural Network */}
          <NeuralNetwork />

          {/* 12. AI Capabilities */}
          <AICapabilities />

          {/* 13. Developer Timeline */}
          <Timeline />

          {/* 14. The Signal */}
          <TheSignal />

          {/* 15. Vision 2030 Roadmap */}
          <Roadmap />

          {/* 16. Achievements */}
          <Achievements />

          {/* 17. Live Activity */}
          <LiveActivity />

          {/* 18. Philosophy */}
          <Philosophy />

          {/* 19. Wall of Fire */}
          <WallOfFire />

          {/* 20. Developer Console */}
          <Console />

          {/* 21. Testimonials */}
          <Testimonials />

          {/* 22. Multiverse */}
          <Multiverse />

          {/* 23. Mirror */}
          <Mirror />

          {/* 24. Contact */}
          <Contact />

          {/* 25. The Vault */}
          <TheVault />
        </div>
      </main>

      <Footer />
    </div>
  );
}
