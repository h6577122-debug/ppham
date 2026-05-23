import { ScrollReveal } from '../effects/ScrollReveal';

const YEARS = [
  {
    year: '2024',
    title: 'THE FOUNDATION',
    state: 'past',
    goals: ['Master app development', 'Ship first 3 apps', 'Build AI skill base'],
    status: 'COMPLETE',
  },
  {
    year: '2025',
    title: 'THE LAUNCH',
    state: 'past',
    goals: ['8+ apps in production', 'First AI-powered product', 'Grow developer brand'],
    status: 'COMPLETE',
  },
  {
    year: '2026',
    title: 'THE RISE',
    state: 'current',
    goals: ['Launch SaaS product', '10K+ active users', 'Build development team'],
    status: 'IN PROGRESS',
  },
  {
    year: '2027',
    title: 'THE SCALE',
    state: 'future',
    goals: ['First $10K MRR product', 'Mentor other developers', 'International clients'],
    status: 'UPCOMING',
  },
  {
    year: '2028',
    title: 'THE EMPIRE',
    state: 'future',
    goals: ['Tech studio launched', '5 products in market', 'AI company founded'],
    status: 'UPCOMING',
  },
  {
    year: '2030',
    title: 'THE VISION',
    state: 'far',
    goals: ['HAMZA POWERPLAYER as a globally recognized tech brand', 'Products used by millions', "Pakistan's next tech unicorn"],
    status: 'THE DREAM',
  },
];

const STATE_STYLES: Record<string, { opacity: number; borderColor: string; yearColor: string; glow: string }> = {
  past: { opacity: 0.6, borderColor: 'rgba(255,255,255,0.08)', yearColor: 'var(--text-muted)', glow: 'none' },
  current: { opacity: 1, borderColor: 'var(--neon-cyan)', yearColor: 'var(--neon-cyan)', glow: '0 0 30px rgba(0,240,255,0.3)' },
  future: { opacity: 0.85, borderColor: 'rgba(124,58,237,0.4)', yearColor: 'var(--neon-violet)', glow: '0 0 20px rgba(124,58,237,0.15)' },
  far: { opacity: 0.9, borderColor: 'rgba(245,197,24,0.4)', yearColor: 'var(--gold)', glow: '0 0 30px rgba(245,197,24,0.15)' },
};

const STATUS_COLORS: Record<string, string> = {
  COMPLETE: 'var(--success)',
  'IN PROGRESS': 'var(--neon-cyan)',
  UPCOMING: 'var(--neon-violet)',
  'THE DREAM': 'var(--gold)',
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-violet)] font-bold mb-4">[ ROADMAP ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">The Plan</h2>
        </ScrollReveal>

        <div
          className="flex gap-6 overflow-x-auto pb-8 roadmap-scroll"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {YEARS.map((y) => {
            const s = STATE_STYLES[y.state];
            const statusColor = STATUS_COLORS[y.status];
            return (
              <div
                key={y.year}
                className="glass-card rounded-2xl p-8 flex flex-col gap-4 relative flex-shrink-0"
                style={{
                  minWidth: 280,
                  scrollSnapAlign: 'center',
                  opacity: s.opacity,
                  borderColor: s.borderColor,
                  boxShadow: s.glow,
                  transition: 'all 0.3s ease',
                }}
              >
                {y.state === 'current' && (
                  <div
                    className="absolute top-4 right-4 font-accent text-[10px] tracking-widest px-2 py-1 rounded border animate-pulse"
                    style={{ color: 'var(--success)', borderColor: 'var(--success)' }}
                  >
                    YOU ARE HERE
                  </div>
                )}

                <div
                  className="font-display font-black"
                  style={{ fontSize: '3rem', color: s.yearColor, textShadow: s.glow !== 'none' ? `0 0 20px ${s.yearColor}` : 'none' }}
                >
                  {y.year}
                </div>

                <div>
                  <div className="font-accent font-bold text-sm text-[var(--text-primary)] tracking-widest mb-3">{y.title}</div>
                  <ul className="flex flex-col gap-2">
                    {y.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: s.yearColor, boxShadow: `0 0 6px ${s.yearColor}` }}
                        />
                        <span className="font-body text-xs text-[var(--text-muted)] leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <span
                    className="font-accent text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border"
                    style={{ color: statusColor, borderColor: statusColor }}
                  >
                    {y.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
