import { useEffect, useRef, useState } from 'react';

const INITIAL_ITEMS = [
  { type: 'sale', text: '+$3.99 · Link Analyzer Pro · 🇺🇸 United States' },
  { type: 'review', text: '★★★★★ New 5-star review · Subsight · 🇩🇪 Germany' },
  { type: 'sale', text: '+$1.99 · Privacy Policy Gen · 🇬🇧 United Kingdom' },
  { type: 'download', text: '↓ AppShield · New install · 🇦🇺 Australia' },
  { type: 'sale', text: '+$3.99 · Link Analyzer Pro · 🇨🇦 Canada' },
  { type: 'milestone', text: '🎉 Subsight hit 1,000 installs!' },
  { type: 'download', text: '↓ SUBcription Ultra · New install · 🇧🇷 Brazil' },
  { type: 'sale', text: '+$2.99 · Fantasy Text Pro · 🇯🇵 Japan' },
  { type: 'review', text: '★★★★★ "Best dev tool on the store" · AppShield' },
];

const POOL = [...INITIAL_ITEMS];

function getColor(type: string) {
  if (type === 'sale' || type === 'milestone') return '#f5c518';
  if (type === 'review') return '#00f0ff';
  return '#7c3aed';
}

export function RevenueTicker() {
  const [dismissed, setDismissed] = useState(false);
  const [items, setItems] = useState(INITIAL_ITEMS.slice(0, 7));
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem('hp_ticker_dismissed') === 'true') {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;
    function pushNew() {
      const delay = 7000 + Math.random() * 5000;
      intervalRef.current = setTimeout(() => {
        const next = POOL[Math.floor(Math.random() * POOL.length)];
        setItems(prev => [...prev.slice(-8), next]);
        pushNew();
      }, delay);
    }
    pushNew();
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current); };
  }, [dismissed]);

  if (dismissed) return null;

  const doubled = [...items, ...items];

  return (
    <div
      id="revenue-ticker"
      className="hidden md:flex items-center justify-between overflow-hidden"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 28,
        background: 'rgba(0,0,0,0.95)', zIndex: 10001,
        borderBottom: '1px solid rgba(245,197,24,0.2)',
      }}
    >
      <div className="flex-1 overflow-hidden relative">
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: 'ticker-scroll 40s linear infinite' }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-6 text-[11px] font-mono cursor-pointer"
              style={{ color: getColor(item.type) }}
              onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}>
              {item.text}
              <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: 8 }}>|</span>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => { setDismissed(true); localStorage.setItem('hp_ticker_dismissed', 'true'); }}
        className="flex-shrink-0 w-7 h-full flex items-center justify-center text-[10px] hover:bg-white/5 transition-colors"
        style={{ color: 'rgba(255,255,255,0.3)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
      >
        ✕
      </button>
    </div>
  );
}
