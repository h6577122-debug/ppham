import { useEffect, useState } from 'react';
import { TypewriterGlitch } from '../effects/TypewriterGlitch';
import { MagneticButton } from '../effects/MagneticButton';
import { ParticleCanvas } from '../effects/ParticleCanvas';

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
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

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden parallax-layer" data-speed="0.3">
      {/* Backgrounds */}
      <div className="mesh-gradient-bg">
        <div className="blob-3"></div>
      </div>
      <div className="grid-overlay"></div>
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-16">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[var(--border-glow)] bg-[var(--glass)] backdrop-blur-md">
          <span className="font-accent text-xs font-bold tracking-[4px] text-[var(--neon-cyan)]">
            [ APP DEVELOPER · AI BUILDER · CREATOR ]
          </span>
        </div>

        {/* Holographic hero title */}
        <h1
          className="font-display font-black mb-6 tracking-tight leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
        >
          <TypewriterGlitch text="HAMZA POWERPLAYER" className="holo-text" />
        </h1>

        <div className="h-8 mb-12 relative overflow-hidden w-full max-w-lg mx-auto">
          {subtitles.map((sub, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full font-body text-lg md:text-xl text-[var(--text-muted)] transition-all duration-1000 transform ${
                i === subtitleIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {sub}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <MagneticButton onClick={() => handleScroll('projects')}>EXPLORE PROJECTS</MagneticButton>
          <MagneticButton variant="secondary" onClick={() => handleScroll('contact')}>CONTACT ME</MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="font-accent text-xs tracking-widest text-[var(--text-muted)]" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--neon-cyan)] to-transparent"></div>
      </div>
    </section>
  );
}
