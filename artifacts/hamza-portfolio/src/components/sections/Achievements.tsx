import { ScrollReveal } from '../effects/ScrollReveal';
import { Counter } from '../effects/Counter';

export function Achievements() {
  const stats = [
    { target: 12, suffix: "+", label: "Projects" },
    { target: 8, suffix: "+", label: "Apps Built" },
    { target: 50, suffix: "+", label: "Ideas Born" },
    { target: "∞", suffix: "", label: "Future Goals" }
  ];

  return (
    <section className="py-24 relative z-10 w-full bg-[var(--bg-surface)] border-y border-[var(--border-glow)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,240,255,0.05)] via-transparent to-[rgba(124,58,237,0.05)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)]">By The Numbers</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} className="text-center">
              <Counter target={stat.target} suffix={stat.suffix} />
              <div className="font-accent text-sm md:text-base font-bold text-[var(--text-muted)] tracking-widest mt-4 uppercase">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
