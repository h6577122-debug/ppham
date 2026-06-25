import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import AuroraEngine from '@/components/effects/AuroraEngine';

const TARGET = new Date('2026-10-01T00:00:00Z').getTime();

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const Unit = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="font-display font-black text-5xl md:text-7xl text-[var(--neon-cyan)] neon-text-glow"
        style={{ minWidth: 80, textAlign: 'center' }}>
        {String(val).padStart(2, '0')}
      </div>
      <div className="font-mono text-xs text-[var(--text-muted)] tracking-widest mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Unit val={time.d} label="DAYS" />
      <span className="font-display font-black text-4xl text-[var(--neon-cyan)] opacity-50 mb-4">:</span>
      <Unit val={time.h} label="HOURS" />
      <span className="font-display font-black text-4xl text-[var(--neon-cyan)] opacity-50 mb-4">:</span>
      <Unit val={time.m} label="MINUTES" />
      <span className="font-display font-black text-4xl text-[var(--neon-cyan)] opacity-50 mb-4">:</span>
      <Unit val={time.s} label="SECONDS" />
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [count] = useState(247);

  useEffect(() => { document.title = 'Coming Soon | HAMZA POWERPLAYER'; }, []);

  return (
    <div className="bg-[var(--bg-base)] min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <AuroraEngine />
      <div className="noise-overlay" />

      <div className="relative z-10 text-center max-w-2xl w-full">
        {/* HP logo */}
        <div className="flex justify-center mb-10">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(0,240,255,0.15)', animation: 'spin-orbit 20s linear infinite' }} />
            <div className="absolute rounded-full" style={{ inset: 8, border: '1px solid rgba(124,58,237,0.2)', animation: 'spin-orbit 12s linear infinite reverse' }} />
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-2xl text-[var(--neon-cyan)]"
              style={{ border: '2px solid var(--neon-cyan)', boxShadow: '0 0 30px rgba(0,240,255,0.4)', animation: 'ai-pulse 3s ease-in-out infinite' }}>
              HP
            </div>
          </div>
        </div>

        <div className="font-accent text-xs font-bold tracking-[6px] text-[var(--neon-cyan)] uppercase mb-4">
          [ SOMETHING BIG ]
        </div>
        <h1 className="font-display font-black mb-4 holo-text"
          style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
          SOMETHING BIG<br />IS COMING
        </h1>
        <p className="font-accent text-[var(--text-muted)] text-lg mb-12">Get ready. This is going to be something special.</p>

        {/* Countdown */}
        <div className="flex justify-center mb-14">
          <Countdown />
        </div>

        {/* Email form */}
        <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
          <h3 className="font-display font-black text-sm text-[var(--text-primary)] mb-1">Be the first to know</h3>
          <p className="font-accent text-xs text-[var(--text-muted)] mb-4">Get notified the moment it drops.</p>
          {notified ? (
            <p className="font-mono text-sm text-[var(--success)]">✓ You're on the list!</p>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setNotified(true); }} className="flex gap-2">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.12)] rounded-xl px-4 py-2.5 font-accent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-cyan)] placeholder:text-[rgba(255,255,255,0.2)]" />
              <button type="submit" className="px-4 py-2.5 rounded-xl font-display text-xs font-black text-[#04040a] tracking-widest"
                style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
                NOTIFY ME
              </button>
            </form>
          )}
          <p className="font-mono text-xs text-[var(--text-muted)] mt-3 opacity-60">{count} people already waiting</p>
        </div>

        <div className="mt-8">
          <Link href="/" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
