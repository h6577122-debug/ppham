import { useState, useEffect, useRef } from 'react';

const APPS = [
  { name: 'Subsight', tagline: 'Smart subscription tracker', price: 'FREE', downloads: '2.1K+', rating: 4.7, reviews: 847, category: 'PRODUCTIVITY', colors: ['#00f0ff', '#001a3d'], cat: 'productivity' },
  { name: 'Link Analyzer Pro', tagline: 'Deep link security scanner', price: '$3.99', downloads: '1.2K+', rating: 4.9, reviews: 312, category: 'SECURITY', colors: ['#7c3aed', '#0a0014'], cat: 'security' },
  { name: 'AppShield', tagline: 'Developer security toolkit', price: 'FREE', downloads: '1.8K+', rating: 4.8, reviews: 521, category: 'DEV TOOLS', colors: ['#00ff88', '#001a0d'], cat: 'devtools' },
  { name: 'Privacy Policy Gen', tagline: 'Legal docs in 60 seconds', price: 'FREE+', downloads: '900+', rating: 4.6, reviews: 198, category: 'BUSINESS', colors: ['#f5c518', '#1a1000'], cat: 'productivity' },
  { name: 'SUBcription Ultra', tagline: 'Finance tracking reimagined', price: 'FREE', downloads: '750+', rating: 4.5, reviews: 163, category: 'FINANCE', colors: ['#9333ea', '#0f002a'], cat: 'finance' },
  { name: 'ElderPhone', tagline: 'Simplified phone for seniors', price: 'FREE', downloads: '600+', rating: 4.7, reviews: 142, category: 'ACCESSIBILITY', colors: ['#f97316', '#1a0800'], cat: 'productivity' },
  { name: 'WarrantyVault', tagline: 'Never lose a warranty again', price: 'FREE', downloads: '500+', rating: 4.4, reviews: 89, category: 'PRODUCTIVITY', colors: ['#60a5fa', '#001020'], cat: 'productivity' },
  { name: 'SubTrack Pro', tagline: 'Subscriptions under control', price: 'FREE', downloads: '420+', rating: 4.6, reviews: 76, category: 'FINANCE', colors: ['#14b8a6', '#001512'], cat: 'finance' },
  { name: 'TruthRate', tagline: 'Honest app reviews platform', price: 'FREE', downloads: '380+', rating: 4.3, reviews: 65, category: 'REVIEWS', colors: ['#ef4444', '#1a0000'], cat: 'security' },
  { name: 'Fantasy Text Pro', tagline: 'Unicode text art & fonts', price: 'FREE+', downloads: '650+', rating: 4.8, reviews: 211, category: 'CREATIVITY', colors: ['#ec4899', '#1a0010'], cat: 'productivity' },
  { name: 'Decision Maker', tagline: 'AI-powered choice engine', price: 'FREE', downloads: '290+', rating: 4.5, reviews: 54, category: 'PRODUCTIVITY', colors: ['#eab308', '#1a1200'], cat: 'productivity' },
  { name: 'Premortem Studio', tagline: 'Risk analysis for projects', price: 'FREE', downloads: '180+', rating: 4.4, reviews: 32, category: 'BUSINESS', colors: ['#991b1b', '#0a0000'], cat: 'devtools' },
];

const FILTERS = ['ALL', 'PRODUCTIVITY', 'SECURITY', 'DEV TOOLS', 'FINANCE'];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? '#f5c518' : 'rgba(255,255,255,0.15)', fontSize: 12 }}>★</span>
      ))}
    </div>
  );
}

function AppIcon({ app, index }: { app: typeof APPS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const initials = app.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div
      className="relative cursor-pointer"
      style={{ width: 80, height: 80, perspective: 600 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Stack layers */}
      {[2, 1, 0].map(layer => (
        <div
          key={layer}
          className="absolute rounded-2xl flex items-center justify-center font-display font-black text-white transition-all duration-400"
          style={{
            width: 70, height: 70,
            background: `linear-gradient(135deg, ${app.colors[0]}cc, ${app.colors[1]})`,
            border: `1px solid ${app.colors[0]}44`,
            top: hovered ? (layer === 0 ? -35 : layer === 1 ? 6 : 12) : layer * 4,
            left: hovered ? (layer === 0 ? 0 : layer === 1 ? 6 : 12) : layer * 2,
            transform: hovered && layer === 0 ? 'rotate(12deg)' : 'none',
            zIndex: 3 - layer,
            opacity: layer === 0 ? 1 : 0.6 - layer * 0.1,
            fontSize: 22,
            boxShadow: layer === 0 ? `0 8px 32px ${app.colors[0]}44` : 'none',
            transitionDelay: `${layer * 20}ms`,
          }}
        >
          {layer === 0 && <span style={{ textShadow: `0 0 20px ${app.colors[0]}` }}>{initials}</span>}
        </div>
      ))}

      {/* Hover details */}
      {hovered && (
        <div className="absolute z-10 rounded-xl p-2 text-[10px] font-mono text-center"
          style={{
            background: 'rgba(4,4,10,0.96)', border: '1px solid rgba(0,240,255,0.2)',
            width: 90, left: -10, top: 42, boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}>
          <div style={{ color: app.colors[0] }}>{app.downloads}</div>
          <div style={{ color: 'rgba(240,240,255,0.5)' }}>downloads</div>
          <div style={{ color: '#f5c518', marginTop: 4 }}>{app.rating}★</div>
        </div>
      )}
    </div>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 80);
        const t = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(start);
          if (start >= target) clearInterval(t);
        }, 20);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function TrophyRoom() {
  const [filter, setFilter] = useState('ALL');

  const filtered = APPS.filter(a => {
    if (filter === 'ALL') return true;
    if (filter === 'PRODUCTIVITY') return a.cat === 'productivity';
    if (filter === 'SECURITY') return a.cat === 'security';
    if (filter === 'DEV TOOLS') return a.cat === 'devtools';
    if (filter === 'FINANCE') return a.cat === 'finance';
    return true;
  });

  return (
    <section id="trophy-room" className="relative py-24 px-6"
      style={{ background: '#050510' }}>
      {/* Gold corner glows */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: '#f5c518', background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.2)' }}>
            PLAY STORE
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4"
            style={{ textShadow: '0 0 40px rgba(245,197,24,0.4)' }}>
            Every App. Earned.
          </h2>
          <p className="font-mono text-sm text-[var(--text-muted)]">12 Apps Published on Google Play · All built by one person. From scratch.</p>
          <div className="mt-6 font-display font-black text-4xl" style={{ color: '#f5c518' }}>
            <AnimatedCounter target={10000} />+ Total Downloads
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-200"
              style={{
                background: filter === f ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.04)',
                color: filter === f ? '#04040a' : 'var(--text-muted)',
                border: `1px solid ${filter === f ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.1)'}`,
              }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((app, i) => (
            <div key={app.name}
              className="glass-card rounded-2xl p-5 flex flex-col gap-3 hover:border-[rgba(0,240,255,0.25)] transition-all duration-300 hover:-translate-y-1 group"
              style={{ opacity: 1, transform: 'scale(1)', transition: 'all 0.3s ease', animationDelay: `${i * 60}ms` }}>
              {/* Icon */}
              <div className="flex justify-center py-2">
                <AppIcon app={app} index={i} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2 justify-center">
                <StarRating rating={app.rating} />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">{app.rating} ({app.reviews})</span>
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="font-display font-black text-sm text-[var(--text-primary)] mb-1">{app.name}</div>
                <div className="font-accent text-xs text-[var(--text-muted)]">{app.tagline}</div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="px-2 py-0.5 rounded-full font-mono text-[10px]"
                  style={{ background: 'rgba(0,240,255,0.08)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,240,255,0.2)' }}>
                  {app.price}
                </span>
                <span className="px-2 py-0.5 rounded-full font-mono text-[10px]"
                  style={{ background: 'rgba(245,197,24,0.08)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.2)' }}>
                  {app.downloads}
                </span>
              </div>

              <a href="https://play.google.com/store/apps/developer?id=HAMZA+POWERPLAYER" target="_blank" rel="noopener noreferrer"
                className="w-full py-2 rounded-xl font-mono text-[11px] text-center transition-all duration-200 group-hover:border-[rgba(0,240,255,0.4)] group-hover:text-[var(--neon-cyan)]"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                VIEW ON PLAY STORE ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
