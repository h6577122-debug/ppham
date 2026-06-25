import { useEffect, useRef, useState } from 'react';
import { TypewriterGlitch } from '../effects/TypewriterGlitch';
import { MagneticButton } from '../effects/MagneticButton';
import { ParticleCanvas } from '../effects/ParticleCanvas';
import { WaveformBorder } from '../effects/WaveformBorder';
import { RocketLaunch } from '../effects/RocketLaunch';

const TITLE = 'HAMZA POWERPLAYER';

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [rocketActive, setRocketActive] = useState(false);
  const [missionDone, setMissionDone] = useState(false);
  const [letterPositions, setLetterPositions] = useState<{ x: number; y: number }[]>(
    Array.from({ length: TITLE.length }, () => ({ x: 0, y: 0 }))
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const targetRef = useRef(Array.from({ length: TITLE.length }, () => ({ x: 0, y: 0 })));
  const currentRef = useRef(Array.from({ length: TITLE.length }, () => ({ x: 0, y: 0 })));
  const explodedRef = useRef(false);

  const subtitles = [
    "Building Apps for the Future",
    "Engineering AI Experiences",
    "Creating Tomorrow's Technology"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex(prev => (prev + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Gravity letter effect
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    document.addEventListener('mousemove', handleMouseMove);
    title.addEventListener('mouseleave', handleMouseLeave);

    function loop() {
      const spans = title?.querySelectorAll('.gravity-letter');
      if (!spans || spans.length === 0) { rafRef.current = requestAnimationFrame(loop); return; }

      const updates: { x: number; y: number }[] = [];
      spans.forEach((span, i) => {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseRef.current.x - cx;
        const dy = mouseRef.current.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;
        const MAX_PULL = 30;

        let tx = 0, ty = 0;
        if (dist < maxDist && !explodedRef.current) {
          const force = (1 - dist / maxDist) * (1 - dist / maxDist);
          tx = dx * force * MAX_PULL / Math.max(dist, 1);
          ty = dy * force * MAX_PULL / Math.max(dist, 1);
        }

        targetRef.current[i] = { x: tx, y: ty };
        currentRef.current[i] = {
          x: currentRef.current[i].x + (targetRef.current[i].x - currentRef.current[i].x) * 0.12,
          y: currentRef.current[i].y + (targetRef.current[i].y - currentRef.current[i].y) * 0.12,
        };
        updates.push({ ...currentRef.current[i] });
      });
      setLetterPositions(updates);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      title?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  function handleTitleClick() {
    if (explodedRef.current) return;
    explodedRef.current = true;
    // Explode outward
    const newTargets = Array.from({ length: TITLE.length }, (_, i) => ({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 200,
    }));
    newTargets.forEach((t, i) => { targetRef.current[i] = t; });
    setTimeout(() => {
      explodedRef.current = false;
      newTargets.forEach((_, i) => { targetRef.current[i] = { x: 0, y: 0 }; });
    }, 2000);
  }

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {rocketActive && (
        <RocketLaunch onClose={() => { setRocketActive(false); setMissionDone(true); }} />
      )}

      <section id="hero" className="relative min-h-[100dvh] flex flex-col items-stretch justify-center overflow-hidden parallax-layer" data-speed="0.3">
        {/* Backgrounds */}
        <div className="mesh-gradient-bg">
          <div className="blob-3"></div>
        </div>
        <div className="grid-overlay"></div>
        <ParticleCanvas />

        {/* Floating HAMZA letters — desktop only */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          {['H','A','M','Z','A'].map((char, i) => (
            <div
              key={i}
              className="absolute font-display font-black select-none"
              style={{
                fontSize: 130,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(0,240,255,0.055)',
                left: `${8 + i * 18}%`,
                top: `${10 + Math.sin(i * 1.2) * 20}%`,
                animation: `hero-letter-${i} ${12 + i * 2}s ease-in-out infinite alternate`,
                willChange: 'transform',
              }}
            >
              {char}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-16 flex-1 justify-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[var(--border-glow)] bg-[var(--glass)] backdrop-blur-md">
            <span className="font-accent text-xs font-bold tracking-[4px] text-[var(--neon-cyan)]">
              [ APP DEVELOPER · AI BUILDER · CREATOR ]
            </span>
          </div>

          {/* Gravity title */}
          <div
            ref={titleRef}
            className="font-display font-black mb-6 tracking-tight leading-tight cursor-pointer"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
            onClick={handleTitleClick}
          >
            {TITLE.split('').map((char, i) => (
              <span
                key={i}
                className={`gravity-letter inline-block ${char === ' ' ? 'w-[0.3em]' : ''}`}
                style={{
                  transform: `translate(${letterPositions[i]?.x ?? 0}px, ${letterPositions[i]?.y ?? 0}px)`,
                  transition: explodedRef.current ? 'transform 2s cubic-bezier(0.34,1.56,0.64,1)' : 'none',
                  willChange: 'transform',
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 20px rgba(0,240,255,0.5)',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  backgroundImage: 'linear-gradient(135deg, #00f0ff, #7c3aed, #00f0ff)',
                  filter: `drop-shadow(0 0 ${8 + Math.abs(letterPositions[i]?.x ?? 0) * 0.3}px rgba(0,240,255,0.6))`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

          <div className="h-8 mb-10 relative overflow-hidden w-full max-w-lg mx-auto">
            {subtitles.map((sub, i) => (
              <div
                key={i}
                className={`absolute inset-0 w-full font-accent text-lg md:text-xl text-[var(--text-muted)] transition-all duration-1000 transform ${
                  i === subtitleIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {sub}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <MagneticButton onClick={() => handleScroll('projects')}>EXPLORE PROJECTS</MagneticButton>
            <MagneticButton variant="secondary" onClick={() => handleScroll('contact')}>CONTACT ME</MagneticButton>
          </div>

          {/* Rocket Launch Button */}
          <div className="relative mt-2">
            <button
              onClick={() => setRocketActive(true)}
              disabled={rocketActive}
              className="relative px-8 py-3 rounded-full font-display font-black text-sm tracking-widest transition-all hover:scale-105 disabled:opacity-50"
              style={{
                border: '1px solid rgba(0,240,255,0.5)',
                background: 'rgba(0,240,255,0.06)',
                color: 'var(--neon-cyan)',
                boxShadow: '0 0 20px rgba(0,240,255,0.2), inset 0 0 20px rgba(0,240,255,0.05)',
                animation: 'rocket-shimmer 2s ease-in-out infinite',
              }}
            >
              <span className="mr-2">🚀</span>
              LAUNCH SEQUENCE — INITIATE
              {/* Attention ring */}
              <div className="absolute -inset-1 rounded-full border border-[rgba(0,240,255,0.3)]"
                style={{ animation: 'attention-ring 2s ease-in-out infinite' }} />
            </button>

            {missionDone && (
              <div className="mt-3 font-mono text-xs text-[var(--gold)] text-center"
                style={{ textShadow: '0 0 10px var(--gold)', animation: 'fadeIn 0.5s ease' }}>
                [ MISSION COMPLETE ✓ ]
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce z-10">
          <span className="font-accent text-xs tracking-widest text-[var(--text-muted)]" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--neon-cyan)] to-transparent"></div>
        </div>

        {/* Waveform Border at bottom */}
        <div className="relative z-10 w-full mt-auto">
          <WaveformBorder />
        </div>
      </section>
    </>
  );
}
