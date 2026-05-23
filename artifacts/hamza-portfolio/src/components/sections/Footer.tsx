import { useEffect, useState } from 'react';
import { SiGithub, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Linkedin } from 'lucide-react';

const NAV_ECHO = ['About', 'Skills', 'Projects', 'Tech', 'AI', 'Vision', 'Console', 'Contact'];

export function Footer() {
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    setSecretUnlocked(localStorage.getItem('konami') === 'true');
  }, []);

  // Proximity-based opacity for background text
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const handler = () => {
      const rect = footer.getBoundingClientRect();
      const proximity = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setBgOpacity(proximity * 0.05);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--bg-surface)] min-h-[400px] border-t border-[var(--border-glow)] overflow-hidden flex flex-col justify-end py-16">
      {/* Aurora bleed */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%)' }}
      />

      {/* Giant background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ transition: 'opacity 0.3s ease' }}
      >
        <span
          className="font-display font-black whitespace-nowrap"
          style={{ fontSize: '8vw', opacity: bgOpacity, letterSpacing: '0.1em', color: 'var(--text-primary)' }}
        >
          HAMZA POWERPLAYER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        {/* Logo + tagline */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{
            border: '2px solid var(--neon-cyan)',
            boxShadow: '0 0 30px rgba(0,240,255,0.3)',
            background: 'rgba(0,240,255,0.05)',
          }}
        >
          <span className="font-display font-black text-2xl text-[var(--neon-cyan)] neon-text-glow">HP</span>
        </div>

        <h2 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-widest mb-3">
          HAMZA POWERPLAYER
        </h2>
        <p className="font-accent text-[var(--text-muted)] text-sm tracking-wider mb-8 text-center">
          Building the future, one commit at a time.
        </p>

        {/* Animated divider */}
        <div className="w-full max-w-lg h-[1px] mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-violet), transparent)' }}
        />

        {/* Social icons */}
        <div className="flex gap-5 mb-10">
          {[
            { Icon: SiGithub, href: 'https://github.com', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: SiX, href: 'https://x.com', label: 'X' },
            { Icon: SiInstagram, href: 'https://instagram.com', label: 'Instagram' },
            { Icon: SiYoutube, href: 'https://youtube.com', label: 'YouTube' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-all duration-200 interactive"
              style={{ borderColor: 'var(--border-glow)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,240,255,0.4)';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Nav echo */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {NAV_ECHO.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-accent text-xs text-[var(--text-muted)] hover:text-[var(--neon-cyan)] tracking-wider transition-colors duration-200 interactive"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Second divider */}
        <div className="w-full max-w-lg h-[1px] mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
        />

        {/* Bottom row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
          <p className="font-body text-xs text-[var(--text-muted)] opacity-60">
            © 2026 HAMZA POWERPLAYER
          </p>
          <p className="font-body text-xs text-[var(--text-muted)] opacity-60">
            Made in Pakistan 🇵🇰
          </p>
          <p className="font-body text-xs text-[var(--text-muted)] opacity-60">
            Crafted with obsession.
          </p>
        </div>

        {/* Konami badge */}
        {secretUnlocked && (
          <div className="mt-6">
            <span className="font-accent text-xs font-bold tracking-widest px-3 py-1 border rounded"
              style={{ color: 'var(--success)', borderColor: 'var(--success)' }}>
              [ SECRET UNLOCKED ✓ ]
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
