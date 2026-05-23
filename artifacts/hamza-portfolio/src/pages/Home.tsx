import { useEffect } from 'react';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { Achievements } from '@/components/sections/Achievements';
import { Console } from '@/components/sections/Console';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[var(--bg-base)] min-h-screen text-[var(--text-primary)] overflow-hidden selection:bg-[var(--neon-cyan)] selection:text-[#04040a]">
      <div className="noise-overlay" />
      <LoadingScreen />
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <div className="relative z-10 bg-[var(--bg-base)]">
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Achievements />
          <Console />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
