import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';

const SERVICES = [
  {
    icon: '📱', title: 'Mobile App Development', price: '$800', timeline: '3–8 weeks',
    color: 'var(--neon-cyan)',
    items: ['Full Flutter app (iOS + Android)', 'Firebase backend integration', 'UI/UX design included', 'Google Play / App Store submission', '30-day post-launch support'],
  },
  {
    icon: '🤖', title: 'AI Integration', price: '$500', timeline: '1–3 weeks',
    color: 'var(--neon-violet)',
    items: ['LLM integration (GPT-4/Claude/Gemini)', 'Custom prompt engineering', 'API setup & documentation', 'Testing & optimization'],
  },
  {
    icon: '🌐', title: 'Web Development', price: '$600', timeline: '2–5 weeks',
    color: 'var(--gold)',
    items: ['Responsive design', 'React or vanilla JS', 'Backend API integration', 'SEO optimization', 'Performance optimization'],
  },
  {
    icon: '🎨', title: 'UI/UX Design', price: '$300', timeline: '1–2 weeks',
    color: '#e040fb',
    items: ['Figma wireframes & mockups', 'Full design system', 'Prototype & interactions', 'Handoff-ready files'],
  },
];

const STEPS = [
  { step: '01', title: 'DISCOVERY', sub: 'Day 1–2', text: 'You tell me about your project. I ask questions, understand the vision.' },
  { step: '02', title: 'PROPOSAL', sub: 'Day 3–5', text: 'I send a detailed proposal with timeline and cost. No commitment yet — just clarity.' },
  { step: '03', title: 'AGREEMENT', sub: 'Day 5–7', text: 'We agree on scope, sign contract, and set milestones. 50% deposit to begin.' },
  { step: '04', title: 'BUILD', sub: 'Week 1–N', text: 'I build. You get progress updates every 3 days. Regular check-ins. No surprises.' },
  { step: '05', title: 'DELIVERY', sub: 'Final week', text: 'Final delivery, testing together, handoff. Remaining 50% on delivery.' },
  { step: '06', title: 'SUPPORT', sub: '30 days', text: 'Post-launch support included. Bugs fixed free. New features: new quote.' },
];

const WHY = [
  { icon: '⚡', title: 'FAST', text: 'I respect deadlines like they\'re laws of physics.' },
  { icon: '🧠', title: 'SMART', text: 'I solve the problem behind the problem.' },
  { icon: '🤝', title: 'HONEST', text: "If I can't do it, I'll tell you — and find someone who can." },
];

export default function HirePage() {
  return (
    <PageLayout title="Hire Me" description="Work with Hamza — mobile apps, AI integration, web development.">
      <PageHero label="WORK WITH ME" title="Hire Me" subtitle="Let's build your vision" />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Availability banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-4"
          style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.25)' }}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
            <span className="font-display font-black text-sm text-[var(--success)] tracking-widest">CURRENTLY AVAILABLE</span>
          </div>
          <p className="font-accent text-sm text-[var(--text-muted)]">Taking on new projects — response within 24 hours</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-display font-black text-3xl mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map(s => (
              <div key={s.title} className="glass-card rounded-2xl p-6 hover:border-[rgba(0,240,255,0.25)] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{s.icon}</div>
                  <div className="text-right">
                    <div className="font-display font-black text-xl" style={{ color: s.color }}>from {s.price}</div>
                    <div className="font-mono text-xs text-[var(--text-muted)]">{s.timeline}</div>
                  </div>
                </div>
                <h3 className="font-display font-black text-lg text-[var(--text-primary)] mb-4">{s.title}</h3>
                <ul className="space-y-2 mb-5">
                  {s.items.map(item => (
                    <li key={item} className="flex gap-2 text-sm text-[var(--text-muted)]">
                      <span style={{ color: s.color }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block w-full text-center py-2.5 rounded-xl font-display text-xs font-black text-[#04040a] tracking-widest transition-all hover:brightness-110"
                  style={{ background: s.color }}>
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* How we work */}
        <div>
          <h2 className="font-display font-black text-3xl mb-8 text-center">How We Work Together</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.step} className="glass-card rounded-xl p-5 relative">
                <div className="font-display font-black text-4xl opacity-10 absolute top-4 right-4">{step.step}</div>
                <div className="font-mono text-xs text-[var(--neon-cyan)] mb-1">{step.sub}</div>
                <div className="font-display font-black text-sm text-[var(--text-primary)] mb-2">{step.title}</div>
                <p className="font-accent text-xs text-[var(--text-muted)] leading-relaxed">{step.text}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[var(--neon-cyan)] text-lg z-10">›</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why hire me */}
        <div>
          <h2 className="font-display font-black text-3xl mb-6 text-center">Why Hire Me</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {WHY.map(w => (
              <div key={w.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{w.icon}</div>
                <div className="font-display font-black text-sm text-[var(--neon-cyan)] tracking-widest mb-2">{w.title}</div>
                <p className="font-accent text-sm text-[var(--text-muted)] italic">"{w.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-10 text-center">
          <h2 className="font-display font-black text-3xl text-[var(--text-primary)] mb-3">Ready to start building?</h2>
          <p className="font-accent text-[var(--text-muted)] mb-8">Let's turn your idea into reality.</p>
          <Link href="/contact"
            className="inline-block px-10 py-4 rounded-2xl font-display font-black text-[#04040a] text-lg tracking-widest transition-all hover:brightness-110 hover:scale-105"
            style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))', boxShadow: '0 0 40px rgba(0,240,255,0.3)' }}>
            CONTACT ME NOW →
          </Link>
          <p className="font-mono text-xs text-[var(--text-muted)] mt-5">Or email directly: hello@hamzapowerplayer.com</p>
        </div>
      </div>
    </PageLayout>
  );
}
