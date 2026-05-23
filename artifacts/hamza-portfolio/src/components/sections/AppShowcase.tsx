import { useState } from 'react';
import { Wrench, Code, Zap, Search, Copy, Settings, Lock, Star } from 'lucide-react';
import { ScrollReveal } from '../effects/ScrollReveal';

const SCREENS = [
  {
    id: 0,
    label: 'ToolBox Master',
    render: () => (
      <div className="w-full h-full flex flex-col p-4" style={{ background: '#060612' }}>
        <div className="font-display text-xs text-[var(--neon-cyan)] font-bold tracking-widest mb-4 text-center">TOOLBOX MASTER</div>
        <div className="grid grid-cols-3 gap-2 flex-1 content-start">
          {[Wrench, Code, Zap, Search, Copy, Settings].map((Icon, i) => (
            <div key={i} className="glass-card rounded-lg flex flex-col items-center justify-center gap-1 aspect-square">
              <Icon size={16} className="text-[var(--neon-cyan)]" />
              <span className="font-body text-[8px] text-[var(--text-muted)]">Tool {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 1,
    label: 'DayPilot',
    render: () => (
      <div className="w-full h-full flex flex-col p-4" style={{ background: '#060612' }}>
        <div className="font-display text-xs text-[var(--neon-cyan)] font-bold tracking-widest mb-3 text-center">DAYPILOT</div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <div key={i} className={`text-center font-body text-[8px] py-1 rounded ${i === 2 ? 'bg-[rgba(0,240,255,0.2)] text-[var(--neon-cyan)]' : 'text-[var(--text-muted)]'}`}>{d}</div>
          ))}
        </div>
        <div className="flex flex-col gap-1 flex-1">
          {[
            { label: '9AM · Stand-up', color: '#00f0ff' },
            { label: '11AM · Build sprint', color: '#7c3aed' },
            { label: '2PM · Design review', color: '#f5c518' },
            { label: '4PM · Deploy', color: '#00ff88' },
          ].map((block, i) => (
            <div key={i} className="rounded px-2 py-1" style={{ background: `${block.color}22`, borderLeft: `2px solid ${block.color}` }}>
              <span className="font-body text-[8px]" style={{ color: block.color }}>{block.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: 'LockBox Pro',
    render: () => (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4" style={{ background: '#060612' }}>
        <div className="font-display text-xs text-[var(--gold)] font-bold tracking-widest">LOCKBOX PRO</div>
        <Lock size={40} className="text-[var(--gold)]" style={{ filter: 'drop-shadow(0 0 12px #f5c518)' }} />
        <div className="px-3 py-1 border border-[var(--gold)] rounded-full">
          <span className="font-body text-[10px] text-[var(--gold)] tracking-widest">SECURED</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map((k) => (
            <div key={k} className="w-8 h-8 rounded-full border border-[rgba(245,197,24,0.3)] flex items-center justify-center">
              <span className="font-body text-[10px] text-[var(--text-muted)]">{k}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: 'Coming Soon',
    render: () => (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 relative overflow-hidden" style={{ background: '#060612' }}>
        <div className="font-display font-bold text-[var(--danger)] tracking-widest px-3 py-1 border border-[var(--danger)] rounded text-xs" style={{ animation: 'glitch-flicker 0.3s steps(2) infinite' }}>
          CLASSIFIED
        </div>
        <div className="font-display text-3xl font-black text-[var(--text-muted)]" style={{ animation: 'glitch-flicker 0.5s steps(3) infinite' }}>???</div>
        <div className="font-body text-xs text-[var(--text-muted)] text-center">ACCESS DENIED</div>
        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, rgba(255,45,85,0.03) 0px, rgba(255,45,85,0.03) 1px, transparent 1px, transparent 3px)' }} />
      </div>
    ),
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="apps" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-violet)] font-bold mb-4">[ APP PREVIEW ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Your Pocket, Upgraded</h2>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-12 relative">
          {/* Floating callouts */}
          <div className="hidden md:flex w-full max-w-2xl justify-between absolute top-1/2 -translate-y-1/2 pointer-events-none px-0" style={{ zIndex: 2 }}>
            <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 border border-[var(--neon-cyan)]" style={{ transform: 'translateX(-60px)' }}>
              <span className="text-base">🚀</span>
              <span className="font-body text-xs text-[var(--neon-cyan)] font-bold">10K+ downloads</span>
            </div>
            <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 border border-[var(--gold)]" style={{ transform: 'translateX(60px)' }}>
              <Star size={14} className="text-[var(--gold)]" />
              <span className="font-body text-xs text-[var(--gold)] font-bold">4.9 ★ rating</span>
            </div>
          </div>

          {/* Phone */}
          <div
            className="relative"
            style={{
              width: 280,
              height: 560,
              borderRadius: 40,
              background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
              animation: 'phone-rock 4s ease-in-out infinite alternate',
            }}
          >
            {/* Notch */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 24, background: '#04040a', borderRadius: '0 0 16px 16px', zIndex: 10 }} />
            {/* Power button */}
            <div style={{ position: 'absolute', right: -3, top: 100, width: 3, height: 50, background: 'rgba(255,255,255,0.15)', borderRadius: '0 4px 4px 0' }} />
            {/* Volume buttons */}
            <div style={{ position: 'absolute', left: -3, top: 80, width: 3, height: 35, background: 'rgba(255,255,255,0.15)', borderRadius: '4px 0 0 4px' }} />
            <div style={{ position: 'absolute', left: -3, top: 130, width: 3, height: 35, background: 'rgba(255,255,255,0.15)', borderRadius: '4px 0 0 4px' }} />
            {/* Screen */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 10,
                right: 10,
                bottom: 12,
                borderRadius: 30,
                background: 'var(--bg-surface)',
                overflow: 'hidden',
              }}
            >
              {SCREENS.map((screen) => (
                <div
                  key={screen.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: active === screen.id ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  {screen.render()}
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-3">
            {SCREENS.map((screen, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                aria-label={screen.label}
                style={{
                  width: active === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: active === i ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.15)',
                  boxShadow: active === i ? '0 0 12px #00f0ff' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
