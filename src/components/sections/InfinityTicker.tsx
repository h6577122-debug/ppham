import { useEffect, useRef } from 'react';

const ROW1 = [
  'HAMZA POWERPLAYER', 'APP DEVELOPER', 'AI BUILDER', 'PAKISTAN',
  'BUILDING THE FUTURE', 'MOBILE APPS', 'ARTIFICIAL INTELLIGENCE',
  'CREATIVE TECH', 'NEXT-GEN DEVELOPER', 'DREAM BIG', 'BUILD MORE',
];

const ROW2 = [
  'FLUTTER', 'PYTHON', 'FIREBASE', 'REACT', 'AI APIS', 'FIGMA',
  'NODE.JS', 'DART', 'SUPABASE', 'GPT-4', 'CLAUDE', 'GEMINI', 'GIT',
  'TYPESCRIPT', 'CURSOR AI', 'REPLIT', 'LANGCHAIN',
];

const joined1 = ROW1.map(t => `${t} ✦`).join('  ');
const joined2 = ROW2.map(t => `${t} ◆`).join('  ');

export function InfinityTicker() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const target = row1?.parentElement?.parentElement;
    if (!target) return;

    const obs = new IntersectionObserver(([e]) => {
      const state = e.isIntersecting ? 'running' : 'paused';
      if (row1) row1.style.animationPlayState = state;
      if (row2) row2.style.animationPlayState = state;
    }, { threshold: 0 });
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 80,
        background: '#060614',
        borderTop: '1px solid rgba(0,240,255,0.08)',
        borderBottom: '1px solid rgba(0,240,255,0.08)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      {/* Row 1: left → right */}
      <div className="flex items-center overflow-hidden" style={{ height: 40 }}>
        <div
          ref={row1Ref}
          className="ticker-row-1 flex shrink-0 whitespace-nowrap"
          style={{ animationPlayState: 'running' }}
        >
          {[joined1, joined1, joined1].map((text, i) => (
            <span
              key={i}
              className="px-4"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'rgba(240,240,255,0.65)',
                letterSpacing: '0.05em',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: right → left */}
      <div className="flex items-center overflow-hidden" style={{ height: 40 }}>
        <div
          ref={row2Ref}
          className="ticker-row-2 flex shrink-0 whitespace-nowrap"
          style={{ animationPlayState: 'running' }}
        >
          {[joined2, joined2, joined2].map((text, i) => (
            <span
              key={i}
              className="px-4"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 12,
                textTransform: 'uppercase',
                color: 'rgba(0,240,255,0.45)',
                letterSpacing: '0.08em',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
