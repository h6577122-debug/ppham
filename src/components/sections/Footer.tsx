import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { SiGithub, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { WaveformBorder } from '@/components/effects/WaveformBorder';

const PAGES_COL = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Apps', href: '/apps' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tools', href: '/tools' },
  { label: 'FAQ', href: '/faq' },
];

const WORK_COL = [
  { label: 'Hire Me', href: '/hire' },
  { label: 'Contact', href: '/contact' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/hire' },
  { label: 'Portfolio', href: '/' },
];

const LEGAL_COL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap' },
];

export function Footer() {
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    setSecretUnlocked(localStorage.getItem('konami') === 'true');
  }, []);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const handler = () => {
      const rect = footer.getBoundingClientRect();
      const proximity = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setBgOpacity(proximity * 0.07);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      return (
        <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className="block font-accent text-xs text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors text-left">
          {label}
        </button>
      );
    }
    return (
      <Link href={href} className="block font-accent text-xs text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors">
        {label}
      </Link>
    );
  };

  return (
    <footer className="relative bg-[var(--bg-surface)] border-t border-[var(--border-glow)] overflow-hidden">
      <div className="w-full">
        <WaveformBorder flip />
      </div>

      {/* Aurora bleed */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%)' }} />

      {/* Giant background text */}
      <div aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black whitespace-nowrap"
          style={{ fontSize: '8vw', opacity: bgOpacity, letterSpacing: '0.1em', color: 'transparent', WebkitTextStroke: '1px rgba(0,240,255,0.15)' }}>
          HAMZA POWERPLAYER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 pb-10">
        {/* 4 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ border: '2px solid var(--neon-cyan)', boxShadow: '0 0 20px rgba(0,240,255,0.25)', background: 'rgba(0,240,255,0.05)' }}>
                <span className="font-display font-black text-sm text-[var(--neon-cyan)] neon-text-glow">HP</span>
              </div>
              <span className="font-display font-bold tracking-widest text-sm text-[var(--text-primary)]">HAMZA POWERPLAYER</span>
            </div>
            <p className="font-accent text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Building the future, one app at a time.
            </p>
            <p className="font-accent text-xs text-[var(--text-muted)] mb-5">Pakistan 🇵🇰</p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: SiGithub, href: 'https://github.com/HAMZAPP99', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com/in/hamzapowerplayer', label: 'LinkedIn' },
                { Icon: SiX, href: 'https://x.com/hamzapowerplayer', label: 'X' },
                { Icon: SiInstagram, href: 'https://instagram.com/hamzapowerplayer', label: 'Instagram' },
                { Icon: SiYoutube, href: 'https://youtube.com/@hamzapowerplayer', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 glass-card rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-all"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,240,255,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Pages */}
          <div>
            <div className="font-display font-black text-xs text-[var(--neon-cyan)] tracking-widest mb-4">PAGES</div>
            <div className="space-y-2.5">
              {PAGES_COL.map(l => <NavLink key={l.href} {...l} />)}
            </div>
          </div>

          {/* Column 3 — Work */}
          <div>
            <div className="font-display font-black text-xs text-[var(--neon-cyan)] tracking-widest mb-4">WORK</div>
            <div className="space-y-2.5">
              {WORK_COL.map(l => <NavLink key={l.label} {...l} />)}
            </div>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <div className="font-display font-black text-xs text-[var(--neon-cyan)] tracking-widest mb-4">LEGAL</div>
            <div className="space-y-2.5">
              {LEGAL_COL.map(l => <NavLink key={l.href} {...l} />)}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.2), transparent)' }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-accent text-xs text-[var(--text-muted)] opacity-60">
            © 2026 HAMZA POWERPLAYER. All Rights Reserved.
          </p>
          <p className="font-accent text-xs text-[var(--text-muted)] opacity-60">
            Made with obsession in Pakistan 🇵🇰
          </p>
        </div>

        {secretUnlocked && (
          <div className="mt-4 text-center">
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
