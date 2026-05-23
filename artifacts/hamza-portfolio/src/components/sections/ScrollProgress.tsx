import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgress(scrolled);
      
      const sections = ['about', 'skills', 'projects', 'timeline', 'achievements', 'console', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-2 top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.05)] z-40">
      <div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--neon-cyan)] to-[var(--neon-violet)]"
        style={{ height: `${progress}%` }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--neon-violet)] shadow-[0_0_10px_var(--neon-violet)]" />
      </div>
      
      {activeSection && (
        <div 
          className="absolute right-6 bg-[var(--bg-surface)] border border-[var(--border-glow)] px-2 py-1 text-[10px] font-accent tracking-widest uppercase text-[var(--neon-cyan)] rounded shadow-[0_0_10px_rgba(0,240,255,0.2)]"
          style={{ top: `${progress}%`, transform: 'translateY(-50%)' }}
        >
          {activeSection}
        </div>
      )}
    </div>
  );
}
