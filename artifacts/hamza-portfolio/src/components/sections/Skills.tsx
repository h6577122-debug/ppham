import { ScrollReveal } from '../effects/ScrollReveal';
import { TiltCard } from '../effects/TiltCard';

const skills = [
  { icon: "🤖", title: "AI Development", desc: "Building smart tools with LLMs & APIs", progress: 90 },
  { icon: "📱", title: "App Development", desc: "Native & cross-platform mobile apps", progress: 85 },
  { icon: "🌐", title: "Web Engineering", desc: "Modern web with cutting-edge stacks", progress: 88 },
  { icon: "🎨", title: "UI/UX Design", desc: "Interfaces that feel inevitable", progress: 80 },
  { icon: "⚙️", title: "Automation", desc: "Systems that work while you sleep", progress: 92 },
  { icon: "🚀", title: "Creative Building", desc: "Turning wild ideas into real products", progress: 95 }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-cyan)] font-bold mb-4">[ SKILLS & EXPERTISE ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">What I Build</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <TiltCard key={i} className="p-8 group">
                <div className="text-4xl mb-6">{skill.icon}</div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">{skill.title}</h3>
                <p className="font-body text-sm text-[var(--text-muted)] mb-8 h-10">{skill.desc}</p>
                
                <div className="w-full h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)]"
                    style={{ width: `${skill.progress}%`, transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s' }}
                  />
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
