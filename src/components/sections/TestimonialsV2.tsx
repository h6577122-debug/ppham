import { useEffect, useRef, useState } from 'react';

type Tab = 'GOOGLE PLAY' | 'YOUTUBE' | 'LINKEDIN' | 'DIRECT';

const TESTIMONIALS: { tab: Tab; flag: string; stars: number; text: string; name: string; app?: string }[] = [
  { tab: 'GOOGLE PLAY', flag: '🇩🇪', stars: 5, text: "This is the best subscription tracker I've found. Clean, fast, offline. No BS.", name: 'Verified Google Play User', app: 'Subsight' },
  { tab: 'GOOGLE PLAY', flag: '🇺🇸', stars: 5, text: "Link Analyzer saved me from a phishing attack. Every developer should have this.", name: 'Google Play User', app: 'Link Analyzer Pro' },
  { tab: 'GOOGLE PLAY', flag: '🇬🇧', stars: 5, text: "AppShield does exactly what it says. Solid, no-nonsense security tool.", name: 'Verified Purchaser', app: 'AppShield' },
  { tab: 'GOOGLE PLAY', flag: '🇦🇺', stars: 5, text: "Generated a complete privacy policy in under 2 minutes. Saved me hours.", name: 'Verified Google Play User', app: 'Privacy Policy Gen' },
  { tab: 'GOOGLE PLAY', flag: '🇨🇦', stars: 4, text: "Fantasy Text Pro has the most unique character sets I've seen. Love it.", name: 'Google Play User', app: 'Fantasy Text Pro' },
  { tab: 'YOUTUBE', flag: '🇮🇳', stars: 5, text: "Your build videos are the most honest on this platform. No fluff, just real building. Keep going.", name: 'YouTube Subscriber', app: undefined },
  { tab: 'YOUTUBE', flag: '🇵🇰', stars: 5, text: "Watching you build from Pakistan inspires me every day. You prove it's possible.", name: 'YouTube Subscriber', app: undefined },
  { tab: 'LINKEDIN', flag: '🇦🇪', stars: 5, text: "Hamza is one of the most dedicated developers I've connected with. His commitment to shipping quality products is exceptional.", name: 'Software Engineer, Dubai', app: undefined },
  { tab: 'DIRECT', flag: '🇺🇸', stars: 5, text: "Hired Hamza for a Flutter app. Delivered ahead of schedule, clean code, and he fixed every edge case without being asked. Highly recommend.", name: 'Client (Startup Founder)', app: undefined },
];

const RATING_BARS = [
  { stars: 5, pct: 78, label: '5 stars' },
  { stars: 4, pct: 16, label: '4 stars' },
  { stars: 3, pct: 4, label: '3 stars' },
  { stars: 2, pct: 1, label: '1–2 stars' },
];

function FlipCard({ t, index, visible }: { t: typeof TESTIMONIALS[0]; index: number; visible: boolean }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setFlipped(true), index * 150);
      return () => clearTimeout(timer);
    } else {
      setFlipped(false);
    }
  }, [visible, index]);

  return (
    <div className="cursor-pointer" style={{ perspective: 600, height: 180 }}
      onClick={() => setFlipped(f => !f)}>
      <div className="relative w-full h-full transition-all duration-700"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        {/* Front (face down) */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{ backfaceVisibility: 'hidden', background: 'rgba(8,8,26,0.9)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="text-4xl">{t.flag}</div>
          <div className="flex gap-1">
            {Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: '#f5c518' }}>★</span>)}
          </div>
          <div className="font-mono text-[10px] text-[var(--text-muted)]">Click to reveal</div>
        </div>

        {/* Back (face up) */}
        <div className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'rgba(8,8,26,0.96)', border: '1px solid rgba(0,240,255,0.15)' }}>
          <p className="font-body text-sm text-[var(--text-primary)] leading-relaxed italic">"{t.text}"</p>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{t.flag}</span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">— {t.name}</span>
            </div>
            {t.app && <div className="font-mono text-[10px] mt-1" style={{ color: 'var(--neon-cyan)' }}>via {t.app}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function RatingBar({ label, pct }: { label: string; pct: number }) {
  const [fill, setFill] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setFill(pct), 200); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="font-mono text-[10px] text-[var(--text-muted)] w-14 text-right">{label}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${fill}%`, background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }} />
      </div>
      <span className="font-mono text-[10px] text-[var(--text-muted)] w-8">{pct}%</span>
    </div>
  );
}

const TABS: Tab[] = ['GOOGLE PLAY', 'YOUTUBE', 'LINKEDIN', 'DIRECT'];

export function TestimonialsV2() {
  const [activeTab, setActiveTab] = useState<Tab>('GOOGLE PLAY');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = TESTIMONIALS.filter(t => t.tab === activeTab);

  return (
    <section ref={sectionRef} id="testimonials-v2" className="relative py-24 px-6" style={{ background: '#030308' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.2)' }}>
            WHAT THEY SAY
          </span>
          <h2 className="font-display font-black text-5xl text-white mb-8" style={{ textShadow: '0 0 40px rgba(0,240,255,0.3)' }}>
            Real Users. Real Words.
          </h2>

          {/* Rating summary */}
          <div className="glass-card rounded-2xl p-6 mb-8 max-w-sm mx-auto">
            <div className="font-display font-black text-4xl text-white mb-1">4.8 <span style={{ color: '#f5c518' }}>★</span></div>
            <div className="font-mono text-xs text-[var(--text-muted)] mb-4">Average Rating</div>
            <div className="space-y-2">
              {RATING_BARS.map(r => <RatingBar key={r.label} label={r.label} pct={r.pct} />)}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {TABS.map(tab => (
            <button key={tab} onClick={() => { setActiveTab(tab); setVisible(false); setTimeout(() => setVisible(true), 50); }}
              className="px-4 py-2 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-200"
              style={{
                background: activeTab === tab ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.04)',
                color: activeTab === tab ? '#04040a' : 'var(--text-muted)',
                border: `1px solid ${activeTab === tab ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.1)'}`,
              }}>
              {tab === 'GOOGLE PLAY' ? '★ ' : tab === 'YOUTUBE' ? '▶ ' : tab === 'LINKEDIN' ? '💼 ' : '✉ '}{tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t, i) => (
            <FlipCard key={`${activeTab}-${i}`} t={t} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
