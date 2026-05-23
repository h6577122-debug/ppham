import { SiGithub, SiX, SiInstagram } from 'react-icons/si';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-surface)] py-16 border-t border-[var(--border-glow)] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-30 shadow-[0_0_15px_#00f0ff]" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] opacity-50 tracking-widest mb-4">
          HAMZA POWERPLAYER
        </h2>
        
        <p className="font-accent text-[var(--text-muted)] text-sm md:text-base tracking-wider mb-8 uppercase text-center">
          Building the future, one app at a time.
        </p>

        <div className="flex gap-6 mb-12">
          {[SiGithub, Linkedin, SiX, SiInstagram].map((Icon, i) => (
            <a key={i} href="#" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors interactive">
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent mb-8" />

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-body text-xs text-[var(--text-muted)] opacity-50">
            © 2026 HAMZA POWERPLAYER · All Rights Reserved
          </p>
          <p className="font-body text-xs text-[var(--text-muted)] opacity-50">
            Crafted with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
}
