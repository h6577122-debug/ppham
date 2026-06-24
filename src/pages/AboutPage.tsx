import { useEffect, useRef, useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';

const SKILLS = [
  { name: 'AI / LLM APIs', pct: 95 },
  { name: 'Flutter / Dart', pct: 88 },
  { name: 'Firebase', pct: 88 },
  { name: 'UI / UX Design', pct: 85 },
  { name: 'Git / DevOps', pct: 85 },
  { name: 'Python', pct: 82 },
  { name: 'React Native', pct: 70 },
  { name: 'Node.js', pct: 60 },
];

const VALUES = [
  { icon: '🔓', title: 'BUILD IN PUBLIC', text: 'Everything I build, I share. No secrets. No gatekeeping. Just open creation.' },
  { icon: '⚡', title: 'QUALITY FIRST', text: "Every line of code, every pixel of UI. If it ships with my name, it's excellent." },
  { icon: '🧠', title: 'LEARN FOREVER', text: 'Technology never stops evolving. Neither do I. Ever.' },
];

const FACTS = [
  '🔥 I debug code at 2am and somehow enjoy it',
  '☕ Powered entirely by chai and stubbornness',
  '🌙 My best ideas come right before I sleep',
  '🇵🇰 Proudly Pakistani, building globally',
  '📱 I use every app I build. If it frustrates me, I fix it.',
  '🤖 I believe AI is the most powerful tool ever given to developers',
];

const STATUS_LINES = [
  { t: 0, line: '> Currently building: Marya AI Companion App' },
  { t: 400, line: '> Currently learning: LLM Fine-tuning' },
  { t: 800, line: '> Currently reading: AI development papers' },
  { t: 1200, line: '> Currently listening: lo-fi while coding' },
  { t: 1600, line: '> Next goal: 10,000 app downloads' },
];

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const [fill, setFill] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setFill(pct), 120); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="font-mono text-xs text-[var(--text-muted)] w-36 shrink-0">{name}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${fill}%`, background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }} />
      </div>
      <span className="font-mono text-xs w-9 text-right font-bold" style={{ color: 'var(--neon-cyan)' }}>{pct}%</span>
    </div>
  );
}

function TerminalStatus() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    STATUS_LINES.forEach(({ t, line }) => {
      setTimeout(() => setLines(prev => [...prev, line]), t);
    });
  }, []);
  return (
    <div className="rounded-2xl p-6 font-mono text-sm space-y-2"
      style={{ background: 'rgba(0,6,0,0.92)', border: '1px solid rgba(0,255,65,0.15)', boxShadow: '0 0 30px rgba(0,255,65,0.04)' }}>
      {lines.map((line, i) => (
        <div key={i} style={{ color: '#00ff41', animation: 'fadeIn 0.3s ease' }}>{line}</div>
      ))}
      {lines.length < STATUS_LINES.length && (
        <div style={{ color: '#00ff41', opacity: 0.4 }}>{'> ...'}</div>
      )}
      {lines.length === STATUS_LINES.length && (
        <div className="flex items-center gap-1 pt-1" style={{ color: '#00ff41' }}>
          <span>{'>'}</span>
          <span className="inline-block w-2 h-4 bg-[#00ff41]" style={{ animation: 'cursor-blink 1s step-end infinite' }} />
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageLayout title="About" description="The story behind HAMZA POWERPLAYER — Pakistani app developer and AI builder.">
      <PageHero label="WHO I AM" title="About Me" subtitle="The story behind the builder" />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Section A — Identity */}
        <div className="glass-card rounded-2xl p-8 md:p-10" style={{ border: '1px solid rgba(0,240,255,0.18)' }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Animated HP logo */}
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
                {/* Outer orbit */}
                <div className="absolute inset-0 rounded-full"
                  style={{ border: '1px solid rgba(0,240,255,0.25)', animation: 'spin-orbit 18s linear infinite' }} />
                {/* Dot on outer orbit */}
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--neon-cyan)]"
                  style={{ top: 2, left: '50%', marginLeft: -5, boxShadow: '0 0 8px rgba(0,240,255,0.8)', animation: 'spin-orbit 18s linear infinite', transformOrigin: '5px 87px' }} />
                {/* Middle orbit */}
                <div className="absolute rounded-full"
                  style={{ inset: 20, border: '1px solid rgba(124,58,237,0.35)', animation: 'spin-orbit 11s linear infinite reverse' }} />
                {/* Dot on middle orbit */}
                <div className="absolute w-2 h-2 rounded-full"
                  style={{ background: 'var(--neon-violet)', top: 22, left: '50%', marginLeft: -4, boxShadow: '0 0 6px rgba(124,58,237,0.8)', animation: 'spin-orbit 11s linear infinite reverse', transformOrigin: '4px 67px' }} />
                {/* Inner orbit */}
                <div className="absolute rounded-full"
                  style={{ inset: 40, border: '1px solid rgba(245,197,24,0.25)', animation: 'spin-orbit 7s linear infinite' }} />
                {/* Core */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    border: '2px solid var(--neon-cyan)',
                    boxShadow: '0 0 30px rgba(0,240,255,0.5), 0 0 60px rgba(0,240,255,0.2), inset 0 0 20px rgba(0,240,255,0.1)',
                    animation: 'ai-pulse 3s ease-in-out infinite',
                    background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)',
                  }}>
                  <span className="font-display font-black text-3xl text-[var(--neon-cyan)] neon-text-glow">HP</span>
                </div>
              </div>
            </div>

            {/* Identity grid */}
            <div className="space-y-4">
              {[
                ['Name', 'HAMZA POWERPLAYER'],
                ['Role', 'App Developer · AI Builder · Creator'],
                ['Location', 'Pakistan 🇵🇰'],
                ['Experience', '2+ Years Building'],
                ['Mission', 'Building the future from Pakistan'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 items-start">
                  <span className="font-mono text-[11px] text-[var(--neon-cyan)] w-24 shrink-0 pt-0.5 tracking-wider">{k}:</span>
                  <span className="font-body text-sm text-[var(--text-primary)] leading-relaxed">{v}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-mono text-[11px] text-[var(--neon-cyan)] w-24 shrink-0 tracking-wider">Status:</span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)' }}>
                  <div className="w-2 h-2 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
                  <span className="font-mono text-xs text-[var(--success)]">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section B — Story */}
        <div>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
            How It Started
          </h2>
          <div className="w-16 h-[2px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }} />
          <div className="space-y-5 font-body text-[rgba(240,240,255,0.82)] leading-[1.85] text-[16px]">
            <p>I started coding young — no mentors, no bootcamps, no CS degree. Just curiosity, a laptop, and an internet connection. I taught myself everything from tutorials, documentation, and endless trial and error.</p>
            <div className="pl-6 border-l-4 border-[var(--neon-cyan)] my-8 py-3 rounded-r-lg"
              style={{ background: 'rgba(0,240,255,0.04)' }}>
              <p className="text-xl md:text-2xl font-display font-black text-[var(--text-primary)]">
                "I fell in love with building things from absolutely nothing."
              </p>
            </div>
            <p>My first app was terrible. It crashed, it was ugly, and nobody used it. But I shipped it. That moment — pushing something I built to the world — was the moment everything changed.</p>
            <p>Then came the first success. Users. Downloads. Reviews. Someone in another country using something I made in my room. That feeling is a drug I've been chasing ever since.</p>
            <p>I build openly. I share my journey. I believe that someone in Pakistan building world-class software is not an exception — it should be the norm. I'm here to prove it.</p>
          </div>
        </div>

        {/* Section C — Values */}
        <div>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
            What I Stand For
          </h2>
          <div className="w-16 h-[2px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }} />
          <div className="grid md:grid-cols-3 gap-4">
            {VALUES.map(v => (
              <div key={v.title} className="glass-card rounded-2xl p-6 hover:border-[rgba(0,240,255,0.3)] transition-all group">
                <div className="text-5xl mb-4">{v.icon}</div>
                <div className="font-display font-black text-xs text-[var(--neon-cyan)] tracking-[0.15em] mb-3">{v.title}</div>
                <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section D — Skills */}
        <div>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
            What I Know
          </h2>
          <div className="w-16 h-[2px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }} />
          <div className="glass-card rounded-2xl p-6 space-y-5">
            {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        {/* Section E — Fun Facts */}
        <div>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
            Things You Should Know
          </h2>
          <div className="w-16 h-[2px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }} />
          <div className="grid md:grid-cols-2 gap-4">
            {FACTS.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-4 font-body text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[rgba(0,240,255,0.25)] transition-all cursor-default">
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Section F — Currently */}
        <div>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: 'var(--text-primary)', textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
            Right Now
          </h2>
          <div className="w-16 h-[2px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }} />
          <TerminalStatus />
        </div>
      </div>
    </PageLayout>
  );
}
