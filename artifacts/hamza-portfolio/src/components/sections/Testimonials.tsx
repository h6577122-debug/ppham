import { ScrollReveal } from '../effects/ScrollReveal';

const TESTIMONIALS = [
  {
    tall: true,
    quote: "Hamza doesn't just build apps — he builds experiences. The attention to detail in his work is something you usually only see from senior devs with 10+ years of experience.",
    name: "Alex M.",
    role: "Product Manager",
    dir: -1,
  },
  {
    tall: false,
    quote: "Shipped faster than anyone I've worked with. Quality was off the charts.",
    name: "Sarah K.",
    role: "Startup Founder",
    dir: 1,
  },
  {
    tall: false,
    quote: "The AI tools he built saved our team 6 hours per week. Instantly.",
    name: "Anonymous",
    role: "Dev Team Lead",
    dir: -1,
  },
  {
    tall: true,
    quote: "I gave him a rough idea and a deadline. He came back with something better than I imagined. That's the kind of developer you never let go.",
    name: "Omar R.",
    role: "Tech Entrepreneur",
    dir: 1,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--gold)] font-bold mb-4">[ RECOGNITION ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">What People Say</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal
              key={i}
              className={t.tall ? 'row-span-2' : ''}
            >
              <div
                className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 relative overflow-hidden"
                style={{ minHeight: t.tall ? 300 : 180 }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'scale(1.02)';
                  el.style.boxShadow = '0 0 40px rgba(245,197,24,0.15)';
                  el.style.borderColor = 'rgba(245,197,24,0.3)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = '';
                  el.style.boxShadow = '';
                  el.style.borderColor = '';
                }}
              >
                {/* Big quote mark */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 left-6 font-display font-black pointer-events-none select-none transition-colors duration-300"
                  style={{ fontSize: '6rem', lineHeight: 1, color: 'var(--gold)', opacity: 0.25 }}
                >
                  "
                </div>
                <div className="relative z-10 pt-10 flex flex-col gap-4 h-full">
                  <p className="font-body text-sm text-[var(--text-primary)] leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="border-t border-[var(--border-glow)] pt-4">
                    <div className="font-accent font-bold text-sm text-[var(--text-primary)]">{t.name}</div>
                    <div className="font-body text-xs text-[var(--text-muted)] mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
