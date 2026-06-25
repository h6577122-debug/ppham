import { useEffect, useRef } from 'react';

const PLATFORMS = [
  {
    icon: '▶',
    name: 'HAMZA POWERPLAYER',
    platform: 'YouTube',
    stat: '2,400+ Subscribers',
    desc: 'Full builds. Real mistakes. Honest progress.',
    cta: 'SUBSCRIBE ↗',
    href: 'https://youtube.com/@hamzapowerplayer',
    color: '#f5c518',
  },
  {
    icon: 'P',
    name: 'Support the Mission',
    platform: 'Patreon',
    stat: 'Join the inner circle',
    desc: 'Early access to prompts, tools, source code & behind-the-scenes.',
    cta: 'BECOME A PATRON ↗',
    href: 'https://patreon.com/hamzapowerplayer',
    color: '#7c3aed',
  },
  {
    icon: '✈',
    name: 'HAMZA PP Community',
    platform: 'Telegram',
    stat: 'Dev tips daily',
    desc: 'App dev news, build updates, exclusive content.',
    cta: 'JOIN GROUP ↗',
    href: 'https://t.me/hamzapowerplayer',
    color: '#00f0ff',
  },
  {
    icon: '⌥',
    name: '@HAMZAPP99',
    platform: 'GitHub',
    stat: 'Open-source tools',
    desc: 'Follow the code. Fork it. Build with it.',
    cta: 'FOLLOW ↗',
    href: 'https://github.com/HAMZAPP99',
    color: 'rgba(240,240,255,0.8)',
  },
  {
    icon: 'in',
    name: 'Hamza PowerPlayer',
    platform: 'LinkedIn',
    stat: 'Professional network',
    desc: 'Connect for collaboration, partnerships, and opportunities.',
    cta: 'CONNECT ↗',
    href: 'https://linkedin.com/in/hamzapowerplayer',
    color: '#60a5fa',
  },
  {
    icon: '💬',
    name: 'Direct Contact',
    platform: 'WhatsApp',
    stat: 'Response: < 6 hours',
    desc: 'Have a project? Drop a message. Let\'s talk.',
    cta: 'MESSAGE NOW ↗',
    href: 'https://wa.me/923129584661',
    color: '#00ff88',
  },
];

function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sweepRef = useRef(0);

  const DOTS = [
    { angle: -45, r: 0.6, color: '#f5c518', size: 7 },  // YouTube
    { angle: 10, r: 0.5, color: '#7c3aed', size: 5 },   // Patreon
    { angle: 30, r: 0.75, color: '#00f0ff', size: 5 },  // Telegram
    { angle: 170, r: 0.55, color: 'rgba(240,240,255,0.8)', size: 5 }, // GitHub
    { angle: 200, r: 0.6, color: '#60a5fa', size: 5 },  // LinkedIn
    { angle: 240, r: 0.45, color: '#00ff88', size: 5 },  // WhatsApp
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const S = canvas.width / 2;
    let rafId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      // Rings
      for (let r = 0.25; r <= 1; r += 0.25) {
        ctx.beginPath();
        ctx.arc(S, S, S * r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0,240,255,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cross hairs
      ctx.beginPath();
      ctx.moveTo(S, 0); ctx.lineTo(S, S * 2);
      ctx.moveTo(0, S); ctx.lineTo(S * 2, S);
      ctx.strokeStyle = 'rgba(0,240,255,0.05)';
      ctx.stroke();

      // Sweep
      const sweep = sweepRef.current;
      const grad = ctx.createConicalGradient ?
        null :
        ctx.createLinearGradient(S, S, S + S * Math.cos(sweep), S + S * Math.sin(sweep));

      ctx.beginPath();
      ctx.moveTo(S, S);
      ctx.arc(S, S, S * 0.95, sweep - 0.4, sweep);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0,240,255,0.08)';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(S, S);
      ctx.lineTo(S + S * 0.95 * Math.cos(sweep), S + S * 0.95 * Math.sin(sweep));
      ctx.strokeStyle = 'rgba(0,240,255,0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Dots
      DOTS.forEach(dot => {
        const angle = (dot.angle * Math.PI) / 180;
        const x = S + S * dot.r * Math.cos(angle);
        const y = S + S * dot.r * Math.sin(angle);

        // Check if sweep just passed this dot
        const normalizedSweep = ((sweep % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const normalizedDot = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const diff = Math.abs(normalizedSweep - normalizedDot);
        const glow = diff < 0.3 ? (1 - diff / 0.3) : 0;

        ctx.beginPath();
        ctx.arc(x, y, dot.size + glow * 4, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 10 + glow * 20;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Pulse ring
        ctx.beginPath();
        ctx.arc(x, y, dot.size + 6 + glow * 8, 0, Math.PI * 2);
        ctx.strokeStyle = dot.color + '44';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      sweepRef.current = (sweep + 0.012) % (Math.PI * 2);
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return <canvas ref={canvasRef} width={280} height={280} className="rounded-full" />;
}

export function CommunityHub() {
  return (
    <section id="community" className="relative py-24 px-6" style={{ background: '#04040a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--success)', background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }}>
            JOIN THE MOVEMENT
          </span>
          <h2 className="font-display font-black text-5xl text-white mb-4"
            style={{ textShadow: '0 0 40px rgba(0,240,255,0.3)' }}>
            Where Builders Meet
          </h2>

          {/* Radar */}
          <div className="flex justify-center my-8">
            <RadarCanvas />
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PLATFORMS.map(p => (
            <div key={p.platform} className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 group"
              style={{ '--accent': p.color } as React.CSSProperties}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-lg"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}33`, color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <div className="font-display font-black text-xs text-[var(--text-primary)]">{p.name}</div>
                  <div className="font-mono text-[10px]" style={{ color: p.color }}>{p.platform}</div>
                </div>
              </div>
              <div className="font-body text-xs font-bold" style={{ color: p.color }}>{p.stat}</div>
              <div className="font-accent text-sm text-[var(--text-muted)] flex-1">{p.desc}</div>
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                className="block w-full py-2.5 rounded-xl font-mono text-[11px] text-center font-bold tracking-wider transition-all duration-200 hover:scale-105"
                style={{ border: `1px solid ${p.color}44`, color: p.color, background: `${p.color}08` }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-accent text-xl text-[var(--text-muted)]">
          Built in public. Growing in public. Pakistan → World.
        </p>
      </div>
    </section>
  );
}
