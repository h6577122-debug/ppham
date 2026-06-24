import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hp_cookie_consent');
    if (!consent) setTimeout(() => setVisible(true), 2000);
  }, []);

  function accept() {
    localStorage.setItem('hp_cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('hp_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4"
      style={{ animation: 'slide-up 0.4s ease' }}>
      <div className="max-w-4xl mx-auto rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
        style={{ background: 'rgba(8,8,26,0.97)', border: '1px solid rgba(0,240,255,0.2)', backdropFilter: 'blur(20px)', boxShadow: '0 -4px 40px rgba(0,0,0,0.4)' }}>
        <p className="font-body text-sm text-[var(--text-muted)] flex-1">
          🍪 I use minimal cookies to improve your experience. No tracking. No ads. Just essentials.{' '}
          <Link href="/cookies" className="text-[var(--neon-cyan)] hover:underline">Learn More</Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline}
            className="px-5 py-2 rounded-full font-display text-xs font-bold text-[var(--text-muted)] border border-[rgba(255,255,255,0.1)] hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-all tracking-widest">
            DECLINE
          </button>
          <button onClick={accept}
            className="px-5 py-2 rounded-full font-display text-xs font-bold text-[#04040a] tracking-widest transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
