import { useEffect } from 'react';
import AuroraEngine from '@/components/effects/AuroraEngine';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { HamzaAI } from '@/components/effects/HamzaAI';
import { PageNavbar } from './PageNavbar';
import { Footer } from '@/components/sections/Footer';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({ children, title, description }: Props) {
  useEffect(() => {
    const pageTitle = title ? `${title} | HAMZA POWERPLAYER` : 'HAMZA POWERPLAYER';
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute('content', description);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description]);

  return (
    <div className="bg-[var(--bg-base)] min-h-screen text-[var(--text-primary)] overflow-x-hidden selection:bg-[var(--neon-cyan)] selection:text-[#04040a]">
      <AuroraEngine />
      <div className="noise-overlay" />
      <CustomCursor />
      <HamzaAI />
      <PageNavbar />
      <main className="relative z-10 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
