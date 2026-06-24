import { useEffect, useRef } from 'react';

function FlagCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let rafId: number;

    function draw() {
      const W = canvas!.width, H = canvas!.height;
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.rotate(angleRef.current);
      ctx.globalAlpha = 0.04;

      // Crescent
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.arc(40, 0, 150, Math.PI * 2, 0, true);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Star (5-pointed)
      ctx.beginPath();
      const R = 60, r = 25, n = 5;
      for (let i = 0; i < n * 2; i++) {
        const radius = i % 2 === 0 ? R : r;
        const angle = (i * Math.PI) / n - Math.PI / 2;
        if (i === 0) ctx.moveTo(Math.cos(angle) * radius + 80, Math.sin(angle) * radius);
        else ctx.lineTo(Math.cos(angle) * radius + 80, Math.sin(angle) * radius);
      }
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();
      angleRef.current += 0.0008;
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas ref={canvasRef} width={500} height={500}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
  );
}

export function PakistanRising() {
  return (
    <section id="pakistan-rising" className="relative py-32 px-6 overflow-hidden" style={{ background: '#02020a' }}>
      {/* Pakistan flag colors aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(1,130,1,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
        <FlagCanvas />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{ color: '#00aa00', background: 'rgba(0,170,0,0.06)', border: '1px solid rgba(0,170,0,0.2)' }}>
            🇵🇰 MADE IN PAKISTAN
          </span>

          {/* Opening */}
          <div className="font-display font-black text-2xl md:text-3xl text-[var(--text-primary)] mb-4 leading-tight">
            "They told us the world's technology comes from elsewhere."
          </div>
          <div className="font-display font-black text-2xl md:text-3xl mb-12" style={{ color: 'var(--neon-cyan)' }}>
            "They were wrong."
          </div>

          {/* Pull quote */}
          <div className="font-display font-black text-3xl md:text-5xl text-white leading-tight mb-16"
            style={{ textShadow: '0 0 60px rgba(0,240,255,0.2)' }}>
            "Every great app started as code<br />written somewhere.<br />
            <span style={{ color: 'var(--neon-cyan)' }}>Mine is written in Pakistan.</span>"
          </div>
        </div>

        {/* Manifesto */}
        <div className="max-w-2xl mx-auto space-y-6 font-accent text-[17px] leading-[1.9] text-[rgba(240,240,255,0.78)] mb-12">
          <p>
            I started building alone. No mentor ecosystem. No local startup culture pointing me in the right direction. Just curiosity, an internet connection, and a stubborn refusal to believe that where I was born could limit what I could create.
          </p>
          <p>
            Every one of my apps gets used by people I'll never meet — in Germany, the US, Australia, Japan. People who have no idea the code running on their phone was written late at night in a Pakistani city. That fact still gets me every single time.
          </p>

          {/* Pull-quote midpoint */}
          <div className="pl-6 border-l-4 my-8 py-2" style={{ borderColor: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.03)' }}>
            <p className="font-display font-black text-xl text-white">
              "I am not building <em>despite</em> being from Pakistan.<br />
              I am building <em>because</em> of who Pakistan made me."
            </p>
          </div>

          <p>
            The Pakistani tech generation is quietly building world-class products. We don't wait for permission. We don't wait for the ecosystem to catch up to us. We ship. We iterate. We grow.
          </p>
          <p>
            My mission is simple: be the proof that it's possible, so someone else believes it too. If one developer sees this and thinks "maybe I can do this too" — then everything I've built has already mattered.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { icon: '🌐', stat: '50+ countries', desc: 'Apps downloaded globally' },
            { icon: '📱', stat: '12 apps shipped', desc: '0 outside help' },
            { icon: '🔥', stat: 'Started young', desc: 'Still building' },
          ].map(c => (
            <div key={c.stat} className="glass-card rounded-xl p-5 text-center hover:border-[rgba(0,170,0,0.3)] transition-all">
              <div className="text-3xl mb-2">{c.icon}</div>
              <div className="font-display font-black text-lg text-white mb-1">{c.stat}</div>
              <div className="font-mono text-xs text-[var(--text-muted)]">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Closing terminal line */}
        <div className="text-center font-mono text-sm tracking-[4px] text-[var(--text-muted)]">
          {'> LOCATION: PAKISTAN  ·  REACH: WORLDWIDE  ·  STATUS: BUILDING'}
          <span className="inline-block w-2 h-4 ml-1 bg-[var(--neon-cyan)] align-middle" style={{ animation: 'cursor-blink 1s step-end infinite' }} />
        </div>
      </div>
    </section>
  );
}
