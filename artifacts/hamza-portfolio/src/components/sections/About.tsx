import { ScrollReveal } from '../effects/ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-32 relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal className="flex justify-center order-2 md:order-1">
            <div className="relative w-80 h-80 flex items-center justify-center interactive group">
              {/* Outer Rings */}
              <div className="absolute inset-[-20%] border border-[var(--neon-cyan)] opacity-20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10%] border border-[var(--neon-violet)] opacity-30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Core Box */}
              <div className="w-full h-full relative z-10 bg-[var(--bg-surface)] border border-[var(--border-glow)] flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] opacity-10 group-hover:opacity-20 transition-opacity" />
                <span className="font-display text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] neon-text-glow">HP</span>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--bg-surface)] border border-[var(--success)] px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,136,0.1)] z-20">
                <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_8px_#00ff88]" />
                <span className="font-accent text-xs font-bold tracking-wider text-[var(--success)]">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 md:order-2 flex flex-col gap-6">
            <div className="font-accent text-sm tracking-widest text-[var(--neon-violet)] font-bold">[ ABOUT ME ]</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Young Developer.<br />Big Vision.
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
