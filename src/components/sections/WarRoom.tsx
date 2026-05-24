import { useEffect, useRef, useState } from 'react';
import { NeonLabel } from '@/components/effects/NeonLabel';

const CODE_LINES = [
  { text: 'class AIAssistant extends Widget {', color: 'cyan' },
  { text: '  final model = GeminiPro();', color: 'gold' },
  { text: '  // Initialize neural context', color: 'muted' },
  { text: '  Future<String> respond(String q) async {', color: 'cyan' },
  { text: '    return await model.generate(q);', color: 'text' },
  { text: '  }', color: 'text' },
  { text: '}', color: 'text' },
  { text: 'def train_model(data: pd.DataFrame):', color: 'cyan' },
  { text: '    model = RandomForest(n_estimators=200)', color: 'gold' },
  { text: '    # Fit on cleaned dataset', color: 'muted' },
  { text: '    model.fit(X_train, y_train)', color: 'text' },
  { text: '    return model.score(X_test, y_test)', color: 'text' },
  { text: 'const fetchData = async (url) => {', color: 'cyan' },
  { text: '  const res = await fetch(url);', color: 'text' },
  { text: '  // Parse and validate response', color: 'muted' },
  { text: '  return await res.json();', color: 'gold' },
  { text: '};', color: 'text' },
  { text: 'Widget build(BuildContext ctx) {', color: 'cyan' },
  { text: '  return StreamBuilder<QuerySnapshot>(', color: 'text' },
  { text: '    stream: db.snapshots(),', color: 'gold' },
  { text: '    builder: (ctx, snap) => ListView(', color: 'text' },
  { text: '      children: snap.data!.docs.map(', color: 'text' },
  { text: '        (d) => Card(child: Text(d[\'name\']))', color: 'muted' },
  { text: '      ).toList(),', color: 'text' },
];

const PROJECTS = [
  { name: 'AI Chat App', color: 'var(--neon-cyan)', pct: 78 },
  { name: 'E-Commerce Platform', color: 'var(--neon-violet)', pct: 45 },
  { name: 'Task Automation Bot', color: 'var(--gold)', pct: 92 },
];

const WORLD_DOTS: { x: number; y: number; label: string }[] = [
  { x: 69, y: 45, label: 'Pakistan' },
  { x: 63, y: 50, label: 'UAE' },
  { x: 52, y: 32, label: 'UK' },
  { x: 25, y: 38, label: 'USA' },
  { x: 22, y: 33, label: 'Canada' },
  { x: 55, y: 33, label: 'Germany' },
  { x: 85, y: 67, label: 'Australia' },
];

function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const ease = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(ease * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val}</span>;
}

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setMonth(target.getMonth() + 3);
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number, len = 2) => String(n).padStart(len, '0');
  return (
    <div className="flex gap-4 justify-center mt-4">
      {[{ v: time.d, l: 'days', pad: 3 }, { v: time.h, l: 'hrs' }, { v: time.m, l: 'min' }, { v: time.s, l: 'sec' }].map(({ v, l, pad: p }) => (
        <div key={l} className="text-center">
          <div className="font-display text-2xl font-bold text-white tabular-nums">{pad(v, p ?? 2)}</div>
          <div className="font-body text-xs text-[rgba(255,255,255,0.5)] uppercase">{l}</div>
        </div>
      ))}
    </div>
  );
}

export function WarRoom() {
  const codeRef = useRef<HTMLDivElement>(null);
  const [codeOffset, setCodeOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    let rafId: number;
    const tick = () => {
      frame++;
      if (frame % 3 === 0) setCodeOffset(prev => (prev + 1) % CODE_LINES.length);
      rafId = requestAnimationFrame(tick);
    };
    const id = setInterval(() => {
      rafId = requestAnimationFrame(tick);
    }, 80);
    return () => { clearInterval(id); cancelAnimationFrame(rafId); };
  }, []);

  const lineColor = (c: string) => {
    if (c === 'cyan') return 'var(--neon-cyan)';
    if (c === 'gold') return 'var(--gold)';
    if (c === 'muted') return 'var(--text-muted)';
    return 'var(--text-primary)';
  };

  const visibleLines = Array.from({ length: 8 }, (_, i) => CODE_LINES[(codeOffset + i) % CODE_LINES.length]);

  return (
    <section id="warroom" className="py-[clamp(60px,10vh,140px)] relative z-10" style={{ background: '#060614' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <NeonLabel color="var(--danger)" className="mb-4">[ WAR ROOM ]</NeonLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            <span className="text-[var(--gold)]" style={{ fontSize: '120%' }}>R</span>eal-Time Status
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Panel 1: Active Projects */}
          <div className="glass-card p-6 relative overflow-hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,240,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-transparent" />
            <div className="font-accent text-xs tracking-widest text-[var(--neon-cyan)] mb-2 font-bold">ACTIVE PROJECTS</div>
            <div className="font-display text-6xl font-black text-[var(--text-primary)] mb-1">
              <CountUp target={3} />
            </div>
            <div className="font-body text-xs text-[var(--text-muted)] mb-6">Currently in development</div>
            <div className="flex flex-col gap-3">
              {PROJECTS.map(p => (
                <div key={p.name}>
                  <div className="flex justify-between font-body text-xs mb-1">
                    <span style={{ color: p.color }}>{p.name}</span>
                    <span className="text-[var(--text-muted)]">{p.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden relative">
                    <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color, boxShadow: `0 0 8px ${p.color}` }}>
                      <div className="absolute right-0 top-0 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Code Output */}
          <div className="glass-card p-6 relative overflow-hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <div className="font-accent text-xs tracking-widest text-[var(--gold)] mb-3 font-bold">LIVE CODE OUTPUT</div>
            <div ref={codeRef} className="font-body text-xs leading-6 overflow-hidden" style={{ height: '10rem' }}>
              {visibleLines.map((line, i) => (
                <div key={i} style={{ color: lineColor(line.color), opacity: 1 - (i / 10) * 0.5 }}>
                  <span className="text-[var(--text-muted)] mr-2 select-none">{String(i + 1).padStart(2, '0')}</span>
                  {line.text}
                </div>
              ))}
              <span className="inline-block w-1.5 h-4 bg-[var(--neon-cyan)] animate-pulse align-middle" />
            </div>
          </div>

          {/* Panel 3: App Store Ratings */}
          <div className="glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <div className="font-accent text-xs tracking-widest text-[var(--gold)] mb-4 font-bold">APP STORE RATING</div>
            <svg viewBox="0 0 120 120" className="w-32 h-32">
              <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="48"
                fill="none"
                stroke="url(#ratingGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="301.6"
                strokeDashoffset="30"
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
              />
              <defs>
                <linearGradient id="ratingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f5c518" />
                  <stop offset="100%" stopColor="#ff9800" />
                </linearGradient>
              </defs>
              <text x="60" y="55" textAnchor="middle" fill="#f5c518" fontSize="20" fontFamily="Orbitron" fontWeight="900">4.9</text>
              <text x="60" y="72" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="11" fontFamily="Orbitron">★★★★★</text>
            </svg>
            <div className="font-body text-xs text-[var(--text-muted)] mt-2">Avg across all apps</div>
          </div>

          {/* Panel 4: Global Reach */}
          <div className="glass-card p-6 relative overflow-hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--neon-violet)] to-transparent" />
            <div className="font-accent text-xs tracking-widest text-[var(--neon-violet)] mb-3 font-bold">GLOBAL REACH</div>
            <div className="relative bg-[rgba(255,255,255,0.02)] rounded overflow-hidden" style={{ height: 90 }}>
              {WORLD_DOTS.map((dot, i) => (
                <div
                  key={i}
                  className="absolute"
                  title={dot.label}
                  style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                >
                  <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--gold)]' : 'bg-[var(--neon-cyan)]'} animate-pulse`} style={{ boxShadow: `0 0 6px ${i === 0 ? '#f5c518' : '#00f0ff'}` }} />
                </div>
              ))}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,240,255,0.3) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            </div>
            <div className="font-body text-xs text-[var(--text-muted)] mt-3 text-center">
              <span className="text-[var(--neon-cyan)] font-bold">7 Countries</span> · Growing Daily
            </div>
          </div>

          {/* Panel 5: Build Streak */}
          <div className="glass-card p-6 relative overflow-hidden" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--danger)] to-transparent" />
            <div className="font-accent text-xs tracking-widest text-[var(--danger)] mb-2 font-bold">BUILD STREAK</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" style={{ animation: 'pulse 1s ease-in-out infinite' }}>🔥</span>
              <div>
                <div className="font-display text-3xl font-black text-[var(--text-primary)]">Day <CountUp target={847} duration={2000} /></div>
                <div className="font-body text-xs text-[var(--text-muted)]">Consecutive builds</div>
              </div>
            </div>
            <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm bg-[var(--success)]"
                  style={{
                    opacity: 0.7 + Math.random() * 0.3,
                    animation: `pulse 0.4s ${i * 0.04}s ease-out both`,
                    boxShadow: '0 0 4px rgba(0,255,136,0.4)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Panel 6: Next Launch Countdown */}
          <div className="glass-card p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,45,85,0.12) 0%, rgba(255,152,0,0.08) 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--danger)] via-orange-500 to-[var(--gold)]" />
            <div className="font-accent text-xs tracking-widest text-[var(--danger)] mb-2 font-bold">NEXT APP LAUNCH</div>
            <div className="font-body text-xs text-[var(--text-muted)] mb-1">Counting down to release</div>
            <Countdown />
            <div className="mt-4 flex justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse mr-2 self-center" />
              <span className="font-body text-xs text-[var(--success)]">Systems nominal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
