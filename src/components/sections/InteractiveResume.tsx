import { useState, useRef } from 'react';

const SECTIONS_DATA = [
  {
    key: 'experience',
    label: 'EXPERIENCE',
    content: (
      <div className="space-y-3 font-mono text-sm">
        <div>
          <div className="font-bold text-white">Self-Employed · Independent App Developer</div>
          <div style={{ color: 'var(--neon-cyan)' }}>2022 – Present</div>
          <ul className="mt-2 space-y-1 text-[var(--text-muted)] list-disc pl-4">
            <li>12+ apps published on Google Play</li>
            <li>Reaching 10,000+ global users across 50+ countries</li>
            <li>YouTube content documenting the build journey (2,400+ subscribers)</li>
            <li>3D asset sales on Unity Asset Store</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: 'skills',
    label: 'SKILLS',
    content: (
      <div className="space-y-2">
        {[
          ['Flutter / Dart', 88],
          ['Firebase / Supabase', 88],
          ['AI / LLM APIs', 95],
          ['Python', 82],
          ['Figma / UI Design', 85],
          ['Git / DevOps', 85],
        ].map(([name, pct]) => (
          <div key={name as string} className="flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--text-muted)] w-36 shrink-0">{name}</span>
            <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))', transition: 'width 1s ease' }} />
            </div>
            <span className="font-mono text-[10px]" style={{ color: 'var(--neon-cyan)' }}>{pct}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: 'education',
    label: 'EDUCATION',
    content: (
      <div className="font-mono text-sm space-y-2">
        <div className="font-bold text-white">Self-taught · Online Courses · Build-in-Public</div>
        <div style={{ color: 'var(--text-muted)' }}>"I believe the best education is shipping real products."</div>
        <div className="mt-3 space-y-1 text-[var(--text-muted)]">
          <div>Udemy, YouTube, Official Docs</div>
          <div>100+ projects built since 2019</div>
        </div>
      </div>
    ),
  },
  {
    key: 'apps',
    label: 'APPS PORTFOLIO',
    content: (
      <div className="grid grid-cols-3 gap-2">
        {['Subsight', 'Link Analyzer', 'AppShield', 'Privacy Gen', 'SUBcription', 'ElderPhone', 'WarrantyVault', 'SubTrack', 'TruthRate'].map(app => (
          <div key={app} className="text-center rounded-lg p-2"
            style={{ background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.1)' }}>
            <div className="font-mono text-[10px]" style={{ color: 'var(--neon-cyan)' }}>{app}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: 'languages',
    label: 'LANGUAGES',
    content: (
      <div className="font-mono text-sm space-y-2">
        {[['Urdu', 'Native'], ['English', 'Fluent'], ['Punjabi', 'Native']].map(([lang, level]) => (
          <div key={lang} className="flex items-center justify-between">
            <span className="text-white">{lang}</span>
            <span style={{ color: 'var(--neon-cyan)' }}>{level}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function InteractiveResume() {
  const [openSection, setOpenSection] = useState<string | null>('experience');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -4, y: dx * 4 });
  }

  return (
    <section id="resume" className="relative py-24 px-6" style={{ background: '#050510' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.2)' }}>
            CURRICULUM VITAE
          </span>
          <h2 className="font-display font-black text-5xl text-white" style={{ textShadow: '0 0 40px rgba(0,240,255,0.3)' }}>
            Every Line. Earned.
          </h2>
        </div>

        {/* Resume Card */}
        <div
          ref={cardRef}
          className="glass-card rounded-2xl overflow-hidden transition-transform duration-100 cursor-default"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Resume Header */}
          <div className="p-8 border-b border-[rgba(0,240,255,0.1)]"
            style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(124,58,237,0.05))' }}>
            <div className="font-display font-black text-2xl text-white mb-1">HAMZA POWERPLAYER</div>
            <div className="font-mono text-sm text-[var(--neon-cyan)] mb-3">App Developer · AI Builder · Creator</div>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs text-[var(--text-muted)]">
              <span>📍 Pakistan</span>
              <span>🌐 hamzapowerplayer.dev</span>
              <span>✉ hamzapowerplayer.global@gmail.com</span>
              <span>📞 wa.me/923129584661</span>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="divide-y divide-[rgba(255,255,255,0.05)]">
            {SECTIONS_DATA.map(s => (
              <div key={s.key}>
                <button
                  onClick={() => setOpenSection(openSection === s.key ? null : s.key)}
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors text-left"
                >
                  <span className="font-mono text-xs tracking-widest font-bold" style={{ color: 'var(--neon-cyan)' }}>{s.label}</span>
                  <span className="font-mono text-lg" style={{ color: 'var(--neon-cyan)', transform: openSection === s.key ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                </button>
                {openSection === s.key && (
                  <div className="px-5 pb-5" style={{ animation: 'fadeIn 0.2s ease' }}>
                    {s.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-black tracking-wider transition-all hover:scale-105"
            style={{ border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)' }}>
            ⬇ DOWNLOAD CV — PDF
          </button>
          <button onClick={() => alert('Right-click → Save As to download the dark version.')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-black tracking-wider transition-all hover:scale-105"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-muted)' }}>
            ⬇ DARK VERSION
          </button>
        </div>
      </div>
    </section>
  );
}
