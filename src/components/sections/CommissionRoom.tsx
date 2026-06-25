import { useState } from 'react';

const TIERS = [
  {
    name: 'STARTER', price: '$299', timeline: '1–2 weeks',
    color: 'var(--neon-cyan)',
    features: [
      { y: true, text: 'Single-screen app (React Native / Kotlin)' },
      { y: true, text: 'Basic UI design' },
      { y: true, text: 'Play Store submission' },
      { y: true, text: '30-day support' },
      { y: false, text: 'Backend integration' },
      { y: false, text: 'Custom animations' },
    ],
    cta: 'GET STARTED →',
    popular: false,
  },
  {
    name: 'PRO', price: '$799', timeline: '2–4 weeks',
    color: '#f5c518',
    features: [
      { y: true, text: 'Full app (5–8 screens)' },
      { y: true, text: 'Premium UI with animations' },
      { y: true, text: 'Firebase / API integration' },
      { y: true, text: 'Play Store submission + ASO' },
      { y: true, text: '60-day support + 1 update' },
      { y: true, text: 'Source code delivered' },
    ],
    cta: 'BUILD MY APP →',
    popular: true,
  },
  {
    name: 'ENTERPRISE', price: 'Custom', timeline: '4–8 weeks',
    color: 'var(--neon-violet)',
    features: [
      { y: true, text: 'Full product (iOS + Android)' },
      { y: true, text: 'Custom AI integration' },
      { y: true, text: 'Scalable backend + database' },
      { y: true, text: 'Both store submissions' },
      { y: true, text: '90-day support + unlimited fixes' },
      { y: true, text: 'Full NDA + IP transfer' },
    ],
    cta: 'BOOK A CALL →',
    popular: false,
  },
];

const SERVICES = [
  { icon: '📱', name: 'Mobile Apps', desc: 'Flutter, React Native, Kotlin' },
  { icon: '🌐', name: 'Web Apps', desc: 'React, Next.js, full-stack' },
  { icon: '🤖', name: 'AI Integration', desc: 'GPT-4, Claude, Gemini APIs' },
  { icon: '🛠', name: 'Dev Tools', desc: 'Custom utilities & automation' },
  { icon: '🎨', name: 'UI/UX Design', desc: 'Figma to pixel-perfect code' },
  { icon: '⚡', name: 'App Optimization', desc: 'Speed, ratings, ASO' },
];

const PROCESS = [
  { num: '01', label: 'BRIEF', desc: 'Tell me your idea, platform, budget, and timeline.' },
  { num: '02', label: 'DESIGN', desc: 'I design every screen in Figma before writing a single line of code.' },
  { num: '03', label: 'BUILD', desc: 'Daily progress updates. You see the app grow in real time.' },
  { num: '04', label: 'TEST', desc: 'Full device testing + bug squashing before delivery.' },
  { num: '05', label: 'LAUNCH', desc: 'Store submission, APK delivery, and 24hr launch support.' },
  { num: '06', label: 'SUPPORT', desc: 'I stick around. No project ends at delivery.' },
];

export function CommissionRoom() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <section id="commission" className="relative py-24 px-6" style={{ background: '#04040a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs font-bold tracking-[8px] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--neon-violet)', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)' }}>
            WORK WITH ME
          </span>
          <h2 className="font-display font-black text-5xl text-white mb-4"
            style={{ textShadow: '0 0 40px rgba(124,58,237,0.4)' }}>
            Let's Build Your Vision
          </h2>
        </div>

        {/* Availability Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-4 mb-12"
          style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.2)' }}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
            <span className="font-mono text-sm font-bold" style={{ color: 'var(--success)' }}>CURRENTLY ACCEPTING NEW PROJECTS — 2 SLOTS REMAINING</span>
          </div>
          <div className="font-mono text-xs text-[var(--text-muted)]">Avg response time: <strong className="text-white">6 hours</strong></div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {SERVICES.map(s => (
            <div key={s.name} className="glass-card rounded-xl p-4 text-center hover:border-[rgba(0,240,255,0.25)] transition-all group">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-display font-black text-xs text-[var(--text-primary)] mb-1">{s.name}</div>
              <div className="font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier, i) => (
            <div key={tier.name}
              onMouseEnter={() => setHoveredTier(i)}
              onMouseLeave={() => setHoveredTier(null)}
              className="glass-card rounded-2xl p-6 flex flex-col relative transition-all duration-300 cursor-default"
              style={{
                border: tier.popular ? `1px solid ${tier.color}` : undefined,
                transform: hoveredTier === i ? 'translateY(-12px) scale(1.02)' : tier.popular ? 'translateY(-4px)' : 'none',
                boxShadow: hoveredTier === i ? `0 24px 60px ${tier.color}33` : tier.popular ? `0 8px 30px ${tier.color}22` : undefined,
              }}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-mono text-[10px] font-bold"
                  style={{ background: tier.color, color: '#04040a' }}>
                  MOST POPULAR
                </div>
              )}
              <div className="mb-4">
                <div className="font-mono text-xs tracking-widest mb-1" style={{ color: tier.color }}>{tier.name}</div>
                <div className="font-display font-black text-4xl text-white">{tier.price}</div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">Timeline: {tier.timeline}</div>
              </div>
              <div className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2 font-mono text-xs">
                    <span style={{ color: f.y ? 'var(--success)' : 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: 2 }}>{f.y ? '✓' : '✗'}</span>
                    <span style={{ color: f.y ? 'var(--text-primary)' : 'rgba(255,255,255,0.3)' }}>{f.text}</span>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/923129584661?text=Hi Hamza! I'm interested in the ${tier.name} package.`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl font-display font-black text-xs text-center tracking-widest transition-all duration-200 hover:scale-105"
                style={{
                  background: tier.popular ? tier.color : 'transparent',
                  border: `1px solid ${tier.color}`,
                  color: tier.popular ? '#04040a' : tier.color,
                }}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-12">
          <h3 className="font-display font-black text-2xl text-center text-white mb-8">How I Work</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS.map(p => (
              <div key={p.num} className="glass-card rounded-xl p-4 text-center hover:border-[rgba(0,240,255,0.25)] transition-all">
                <div className="font-display font-black text-3xl mb-2" style={{ color: 'var(--neon-cyan)' }}>{p.num}</div>
                <div className="font-mono text-[10px] tracking-widest text-[var(--neon-cyan)] mb-2">{p.label}</div>
                <div className="font-accent text-[11px] text-[var(--text-muted)]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="rounded-2xl p-6 text-center" style={{ border: '1px solid rgba(245,197,24,0.3)', background: 'rgba(245,197,24,0.03)' }}>
          <div className="font-display font-black text-lg text-white mb-2">
            "If you're not satisfied with the final build — I fix it. Free."
          </div>
          <div className="font-accent text-sm text-[var(--text-muted)] mb-1">
            I've never left a project unfinished. That record stays intact.
          </div>
          <div className="font-mono text-xs" style={{ color: '#f5c518' }}>— Hamza, HAMZA POWERPLAYER</div>
        </div>
      </div>
    </section>
  );
}
