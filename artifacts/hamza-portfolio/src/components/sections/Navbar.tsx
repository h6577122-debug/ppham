import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Console', 'Contact'];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${scrolled ? 'bg-[rgba(4,4,10,0.85)] backdrop-blur-xl border-b border-[var(--border-glow)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer interactive" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="font-display font-bold text-xl text-[var(--neon-cyan)] neon-text-glow">HP</span>
          <span className="font-accent font-semibold tracking-wider text-sm hidden sm:block text-[var(--text-primary)]">HAMZA POWERPLAYER</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleScrollTo(link)}
              className="font-accent text-sm font-medium text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors relative group interactive"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--neon-cyan)] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00f0ff]" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--text-primary)] interactive" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#04040a] z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => handleScrollTo(link)}
            className="font-display text-3xl font-bold text-[var(--text-primary)] hover:text-[var(--neon-cyan)] hover:neon-text-glow transition-all"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
