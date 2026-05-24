import { ScrollReveal } from '../effects/ScrollReveal';
import { SpinningGlobe } from '../effects/SpinningGlobe';
import { NeonLabel } from '../effects/NeonLabel';

export function About() {
  return (
    <section id="about" className="py-[clamp(60px,10vh,140px)] relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <ScrollReveal className="flex justify-center order-2 md:order-1">
            <div className="relative flex flex-col items-center">
              <SpinningGlobe />
              {/* Available badge */}
              <div className="mt-6 bg-[var(--bg-surface)] border border-[var(--success)] px-5 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_8px_#00ff88]" />
                <span className="font-accent text-xs font-bold tracking-wider text-[var(--success)]">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 md:order-2 flex flex-col gap-6">
            <NeonLabel color="var(--neon-violet)">[ ABOUT ME ]</NeonLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              <span className="text-[var(--gold)]" style={{ fontSize: '120%' }}>Y</span>oung Developer.<br />Big Vision.
            </h2>
            <p className="font-body text-lg text-[var(--text-muted)] leading-relaxed">
              I'm Hamza — a Pakistani developer obsessed with building things that matter. From powerful mobile apps to intelligent AI tools, I create digital experiences that push the limits of what's possible. Every line of code I write is a step toward the future I'm building.
            </p>
            <div className="p-4 border-l-2 border-[var(--neon-cyan)] bg-[rgba(0,240,255,0.05)] mt-4">
              <span className="font-body text-[var(--neon-cyan)] font-medium">2+ Years Building | 8+ Apps Shipped | ∞ Ideas Pending</span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
