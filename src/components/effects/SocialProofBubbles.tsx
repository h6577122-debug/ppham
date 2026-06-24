import { useEffect, useRef, useState } from 'react';

const MESSAGES = [
  '🇧🇷 Someone from Brazil downloaded Subsight',
  '⭐️⭐️⭐️⭐️⭐️ 5-star review on Privacy Policy Generator',
  '👁 847 people viewed this portfolio this week',
  '🤝 New collaboration request from Dubai',
  '📲 AppShield hit 1,000 installs',
  '🇩🇪 New user from Germany joined Subsight',
  '🚀 Link Analyzer Pro trending in UK',
  '💬 "Best subscription tracker I\'ve found" — AppUser',
  '🇺🇸 +$3.99 sale · Link Analyzer Pro · USA',
  '🌍 Apps now downloaded in 52 countries',
];

interface Bubble {
  id: number;
  text: string;
  x: number;
  visible: boolean;
}

export function SocialProofBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const counterRef = useRef(0);
  const lastXRef = useRef(-1);

  useEffect(() => {
    function spawnBubble() {
      const delay = 18000 + Math.random() * 12000;
      setTimeout(() => {
        let x: number;
        do { x = 10 + Math.random() * 70; } while (Math.abs(x - lastXRef.current) < 15);
        lastXRef.current = x;
        const id = counterRef.current++;
        const text = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        setBubbles(prev => [...prev, { id, text, x, visible: true }]);
        setTimeout(() => {
          setBubbles(prev => prev.filter(b => b.id !== id));
        }, 5000);
        spawnBubble();
      }, delay);
    }
    const init = setTimeout(() => spawnBubble(), 25000);
    return () => clearTimeout(init);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ top: 0 }}>
      {bubbles.map(b => (
        <div
          key={b.id}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            left: `${b.x}%`,
            top: '20%',
            width: 220,
            animation: 'bubble-float 5s ease-out forwards',
          }}
          onClick={(e) => {
            const el = e.currentTarget;
            el.style.transform = 'scale(1.15)';
            el.style.opacity = '0';
            el.style.transition = 'all 0.2s ease';
            setBubbles(prev => prev.filter(bu => bu.id !== b.id));
          }}
        >
          <div className="rounded-xl px-3 py-2.5 text-xs font-mono leading-relaxed"
            style={{
              background: 'rgba(8,8,26,0.92)',
              border: '1px solid rgba(0,240,255,0.2)',
              boxShadow: '0 4px 24px rgba(0,240,255,0.1)',
              color: 'rgba(240,240,255,0.9)',
            }}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}
