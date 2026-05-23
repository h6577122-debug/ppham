import { ScrollReveal } from '../effects/ScrollReveal';

const CARDS = [
  {
    title: 'OBSESSION OVER BALANCE',
    body: "I don't believe in half-built things. Every project gets everything I have until it's something I'm genuinely proud of.",
  },
  {
    title: 'SIMPLICITY IS HARD',
    body: "The best interfaces feel effortless. That effortlessness takes hundreds of hours of obsessive refinement to achieve.",
  },
  {
    title: 'BUILD FOR TOMORROW',
    body: "I'm not solving today's problems. I'm building for the version of the world that arrives in five years.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 relative z-10 overflow-hidden">
      {/* Background marquee text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black whitespace-nowrap text-[var(--text-primary)]"
          style={{ fontSize: '8vw', opacity: 0.04, letterSpacing: '0.2em' }}
        >
          BUILD · SHIP · REPEAT · BUILD · SHIP · REPEAT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--gold)] font-bold mb-4">[ PHILOSOPHY ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">How I Think</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title}>
              <div
                className="glass-card rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 cursor-default h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.02) translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(245,197,24,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <div
                  className="font-display font-black leading-none"
                  style={{ fontSize: '4rem', color: 'var(--gold)', opacity: 0.6, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-wider">{card.title}</h3>
                <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed flex-1">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
