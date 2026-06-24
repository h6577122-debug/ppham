import { useEffect, useRef, useState } from 'react';

function LiveClock() {
  const [times, setTimes] = useState<string[]>([]);
  useEffect(() => {
    function update() {
      const now = new Date();
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
      setTimes([fmt('Asia/Karachi'), fmt('America/New_York'), fmt('Europe/London'), fmt('America/Los_Angeles')]);
    }
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);
  const zones = ['ISLAMABAD', 'NEW YORK', 'LONDON', 'LOS ANGELES'];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
      {zones.map((z, i) => (
        <div key={z} className="text-center rounded-xl p-3" style={{ background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.1)' }}>
          <div className="font-display font-black text-2xl" style={{ color: 'var(--neon-cyan)', fontVariantNumeric: 'tabular-nums' }}>{times[i] || '--:--'}</div>
          <div className="font-mono text-[10px] text-[var(--text-muted)] mt-1 tracking-wider">{z}</div>
        </div>
      ))}
    </div>
  );
}

function HeartbeatCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef(false);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let rafId: number;

    function drawECG(phase: number, hovered: boolean) {
      const W = canvas!.width, H = canvas!.height;
      ctx.clearRect(0, 0, W, H);
      const color = hovered ? '#f5c518' : '#00f0ff';
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.beginPath();

      const totalPoints = 300;
      for (let i = 0; i < totalPoints; i++) {
        const x = (i / totalPoints) * W;
        const t = (i / totalPoints + phase) % 1;
        let y = H / 2;

        // Spike pattern
        const spikePositions = [0.15, 0.45, 0.75];
        for (const sp of spikePositions) {
          const dist = Math.abs(t - sp);
          if (dist < 0.04) {
            const norm = dist / 0.04;
            y -= Math.sin(norm * Math.PI) * (H * 0.35) * (hovered ? 1.5 : 1);
          }
          if (dist > 0.01 && dist < 0.06) {
            const norm = (dist - 0.01) / 0.05;
            y += Math.sin(norm * Math.PI) * (H * 0.12);
          }
        }
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    function animate() {
      const speed = hoverRef.current ? 0.006 : 0.003;
      phaseRef.current = (phaseRef.current + speed) % 1;
      drawECG(phaseRef.current, hoverRef.current);
      rafId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div onMouseEnter={() => { hoverRef.current = true; }} onMouseLeave={() => { hoverRef.current = false; }}>
      <canvas ref={canvasRef} width={600} height={60} className="w-full rounded-lg cursor-crosshair" style={{ background: 'rgba(0,0,0,0.3)' }} />
      <div className="flex items-center gap-2 mt-2">
        <div className="w-2 h-2 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
        <span className="font-mono text-[10px] tracking-widest text-[var(--success)]">SYSTEM VITALS: NOMINAL</span>
      </div>
    </div>
  );
}

function MiniLineChart() {
  const data = [42, 58, 67, 89, 73, 95, 112, 98, 134, 147, 189, 204, 221, 247];
  const max = Math.max(...data);
  const W = 300, H = 80;
  const pts = data.map((v, i) => ({ x: (i / (data.length - 1)) * W, y: H - (v / max) * H * 0.9 - 4 }));
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaD = `${pathD} L${W},${H} L0,${H} Z`;

  return (
    <div className="mt-3">
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ height: 80 }}>
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5c518" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5c518" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#chartGrad)" />
        <path d={pathD} stroke="#00f0ff" strokeWidth="2" fill="none" />
        <line x1="0" y1={H * 0.5} x2={W} y2={H * 0.5} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      <div className="flex items-center gap-2 mt-1">
        <span style={{ color: 'var(--success)', fontSize: 12 }}>↑ 23% vs last month</span>
      </div>
    </div>
  );
}

function BuildGrid() {
  const weeks = 52;
  const days = 7;
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const rand = Math.random();
      if (rand < 0.35) return 0;
      if (rand < 0.6) return 1;
      if (rand < 0.8) return 2;
      if (rand < 0.93) return 3;
      return 4;
    })
  );
  const colors = ['rgba(255,255,255,0.04)', 'rgba(0,240,255,0.15)', 'rgba(0,240,255,0.35)', 'rgba(0,240,255,0.65)', '#00f0ff'];

  return (
    <div>
      <div className="flex gap-0.5 overflow-x-auto pb-2">
        {grid.map((week, w) => (
          <div key={w} className="flex flex-col gap-0.5">
            {week.map((level, d) => (
              <div key={d} title={level > 0 ? `${level} commits` : 'No activity'}
                style={{ width: 10, height: 10, borderRadius: 2, background: colors[level], cursor: 'default' }} />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 font-mono text-sm">
        <span style={{ color: '#f5c518' }}>🔥</span>
        <span style={{ color: 'var(--text-primary)' }}>Current Streak: <strong style={{ color: 'var(--neon-cyan)' }}>47 days</strong></span>
      </div>
    </div>
  );
}

export function ControlRoom() {
  const [revenue, setRevenue] = useState(247);

  useEffect(() => {
    const t = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 15 + 2));
    }, 18000);
    return () => clearInterval(t);
  }, []);

  const statusItems = [
    { label: 'AI ENGINE', status: 'ONLINE', color: 'var(--neon-cyan)' },
    { label: 'BUILD PIPELINE', status: 'ACTIVE', color: 'var(--neon-violet)' },
    { label: 'DEPLOY READY', status: 'STANDING BY', color: '#f5c518' },
  ];

  const apps = [
    { name: 'Subsight', dl: 847, rating: 4.7 },
    { name: 'Link Analyzer', dl: 234, rating: 4.9 },
    { name: 'AppShield', dl: 521, rating: 4.8 },
    { name: 'Privacy Policy', dl: 312, rating: 4.6 },
  ];

  return (
    <section id="control-room" className="relative py-24 px-6" style={{ background: '#030308' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.2)' }}>
            MISSION CONTROL
          </span>
          <h2 className="font-display font-black text-5xl text-white" style={{ textShadow: '0 0 40px rgba(0,240,255,0.3)' }}>
            Live From The Lab
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel 1 — Dev Status + ECG + clocks */}
          <div className="md:col-span-2 glass-card rounded-2xl p-6">
            <h3 className="font-display text-xs tracking-widest text-[var(--neon-cyan)] mb-4">DEV STATUS</h3>
            <HeartbeatCanvas />
            <div className="mt-6 space-y-3">
              {statusItems.map(s => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}`, animation: 'ai-pulse 2s ease infinite' }} />
                  <span className="font-mono text-xs text-[var(--text-muted)] w-32">{s.label}</span>
                  <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.status}</span>
                </div>
              ))}
            </div>
            <LiveClock />
          </div>

          {/* Panel 2 — Revenue */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xs tracking-widest text-[var(--text-muted)] mb-2">REVENUE THIS MONTH</h3>
            <div className="font-display font-black text-5xl" style={{ color: '#f5c518' }}>${revenue}</div>
            <MiniLineChart />
          </div>

          {/* Panel 3 — App Health */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xs tracking-widest text-[var(--text-muted)] mb-4">APP HEALTH</h3>
            <div className="space-y-3">
              {apps.map(a => (
                <div key={a.name} className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)] w-32 truncate">{a.name}</span>
                  <span style={{ color: 'var(--neon-cyan)' }}>{a.dl.toLocaleString()}</span>
                  <span style={{ color: '#f5c518' }}>{a.rating}★</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
                    <span style={{ color: 'var(--success)' }}>LIVE</span>
                  </div>
                </div>
              ))}
              <a href="#trophy-room" className="block mt-3 font-mono text-[11px] text-[var(--neon-cyan)] hover:underline">View all 12 apps →</a>
            </div>
          </div>

          {/* Panel 4 — Build Streak */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xs tracking-widest text-[var(--text-muted)] mb-4">BUILD STREAK</h3>
            <BuildGrid />
          </div>

          {/* Panel 5 — YouTube */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xs tracking-widest text-[var(--text-muted)] mb-4">YOUTUBE CHANNEL</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[['SUBSCRIBERS', '2,400+'], ['VIDEOS', '24'], ['TOTAL VIEWS', '47K+']].map(([l, v]) => (
                <div key={l} className="text-center">
                  <div className="font-display font-black text-2xl" style={{ color: '#f5c518' }}>{v}</div>
                  <div className="font-mono text-[9px] text-[var(--text-muted)] mt-1 tracking-wider">{l}</div>
                </div>
              ))}
            </div>
            <div className="font-mono text-[10px] text-[var(--text-muted)] mb-3">HAMZA POWERPLAYER</div>
            <a href="https://youtube.com/@hamzapowerplayer" target="_blank" rel="noopener noreferrer"
              className="block w-full py-2 rounded-xl font-mono text-[11px] text-center transition-all hover:border-[#f5c518]"
              style={{ border: '1px solid rgba(245,197,24,0.3)', color: '#f5c518' }}>
              VISIT CHANNEL ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
