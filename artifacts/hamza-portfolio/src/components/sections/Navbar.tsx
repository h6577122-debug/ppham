import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Tech', id: 'tech' },
  { label: 'AI', id: 'ai' },
  { label: 'Vision', id: 'roadmap' },
  { label: 'Console', id: 'console' },
  { label: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          scrolled ? 'bg-[rgba(4,4,10,0.85)] backdrop-blur-xl border-b border-[var(--border-glow)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer interactive"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-display font-bold text-xl text-[var(--neon-cyan)] neon-text-glow">HP</span>
            <span className="font-accent font-semibold tracking-wider text-sm hidden sm:block text-[var(--text-primary)]">
              HAMZA POWERPLAYER
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              const isHovered = hoveredLink === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="font-accent text-sm font-medium relative group interactive"
                  style={{
                    color: isActive ? 'var(--neon-cyan)' : 'var(--text-muted)',
                    letterSpacing: isHovered ? '1px' : '0px',
                    transition: 'color 0.2s ease, letter-spacing 0.2s ease',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] bg-[var(--neon-cyan)] transition-all duration-300"
                    style={{
                      width: isActive || isHovered ? '100%' : '0%',
                      boxShadow: '0 0 10px #00f0ff',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--text-primary)] interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-6"
        style={{
          background: 'rgba(4,4,10,0.95)',
          backdropFilter: 'blur(24px)',
          transform: mobileMenuOpen ? 'perspective(800px) rotateY(0deg)' : 'perspective(800px) rotateY(90deg)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
          transformOrigin: 'right center',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="font-display text-2xl font-bold hover:text-[var(--neon-cyan)] transition-all duration-200 interactive"
            style={{
              color: activeId === link.id ? 'var(--neon-cyan)' : 'var(--text-primary)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(30px)',
              transitionDelay: mobileMenuOpen ? `${i * 0.08}s` : '0s',
              transition: 'opacity 0.3s ease, transform 0.3s ease, color 0.2s ease',
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
