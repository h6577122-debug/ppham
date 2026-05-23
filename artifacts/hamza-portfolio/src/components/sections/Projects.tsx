import { ScrollReveal } from '../effects/ScrollReveal';
import { TiltCard } from '../effects/TiltCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "TOOLBOX MASTER",
    type: "Productivity App",
    desc: "An all-in-one developer toolkit with 20+ built-in tools for everyday development tasks. Built for speed.",
    accent: "#00f0ff",
    badge: "LAUNCHED",
    tech: ["React Native", "TypeScript", "Node.js"]
  },
  {
    title: "DAYPILOT",
    type: "AI Productivity",
    desc: "AI-powered daily planner that learns your habits and optimizes your schedule for peak performance.",
    accent: "#7c3aed",
    badge: "LAUNCHED",
    tech: ["OpenAI", "React", "Python"]
  },
  {
    title: "LOCKBOX PRO",
    type: "Security App",
    desc: "Military-grade encrypted vault for passwords, notes, and sensitive data. Zero-knowledge architecture.",
    accent: "#f5c518",
    badge: "LAUNCHED",
    tech: ["Swift", "Cryptography", "C++"]
  },
  {
    title: "FUTURE AI PROJECT",
    type: "AI · Coming Soon",
    desc: "Something big is coming. An AI-powered experience that will redefine how developers work.",
    accent: "#ff2d55",
    badge: "IN DEVELOPMENT",
    tech: ["AI Agents", "Rust", "WebGPU"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-violet)] font-bold mb-4">[ PROJECTS ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Things I've Built</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-8 pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
            {projects.map((proj, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                <TiltCard className="p-8 h-full flex flex-col group" style={{ '--card-accent': proj.accent } as React.CSSProperties}>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div 
                      className="px-3 py-1 text-xs font-bold font-accent tracking-wider border"
                      style={{ color: proj.accent, borderColor: `${proj.accent}40`, backgroundColor: `${proj.accent}10` }}
                    >
                      [ {proj.badge} ]
                    </div>
                    <button className="w-10 h-10 rounded-full border border-[var(--border-glow)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--card-accent)] group-hover:border-[var(--card-accent)] transition-all interactive">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <div className="font-accent text-sm text-[var(--text-muted)] mb-2 uppercase tracking-widest">{proj.type}</div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4" style={{ textShadow: `0 0 20px ${proj.accent}40` }}>
                    {proj.title}
                  </h3>
                  
                  <p className="font-body text-[var(--text-muted)] mb-8 flex-grow leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-xs font-body text-[var(--text-primary)] rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
