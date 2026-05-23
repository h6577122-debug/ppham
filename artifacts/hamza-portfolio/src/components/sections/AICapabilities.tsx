import { ScrollReveal } from '../effects/ScrollReveal';

const HEXES = [
  { icon: '🤖', title: 'LLM INTEGRATION', body: 'Connecting apps to GPT, Claude, Gemini, and custom models' },
  { icon: '✍️', title: 'PROMPT ENGINEERING', body: 'Designing precise system prompts that make AI behave exactly as intended' },
  { icon: '⚡', title: 'AI AUTOMATION', body: 'Workflows that run themselves — triggered, smart, unstoppable' },
  { icon: '🔍', title: 'VECTOR SEARCH', body: 'Semantic search and RAG systems for intelligent information retrieval' },
  { icon: '🕵️', title: 'AI AGENTS', body: 'Autonomous systems that plan, execute, and report back' },
  { icon: '🎓', title: 'FINE-TUNING', body: 'Teaching models new tricks on domain-specific datasets' },
];

const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

export function AICapabilities() {
  return (
    <section id="ai" className="py-32 relative z-10" style={{ background: 'linear-gradient(to bottom, var(--bg-base), #02020a, var(--bg-base))' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-cyan)] font-bold mb-4">[ AI POWERS ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Where I Meet Artificial Intelligence</h2>
        </ScrollReveal>

        {/* Honeycomb grid */}
        <div className="flex flex-col items-center gap-2 mb-16">
          {/* Row 1: 3 hexes */}
          <div className="flex gap-4">
            {HEXES.slice(0, 3).map((hex, i) => (
              <HexCard key={i} hex={hex} />
            ))}
          </div>
          {/* Row 2: 3 hexes, offset */}
          <div className="flex gap-4" style={{ marginTop: -32 }}>
            {HEXES.slice(3, 6).map((hex, i) => (
              <HexCard key={i + 3} hex={hex} />
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <ScrollReveal className="text-center">
          <p className="font-display text-2xl md:text-4xl font-black text-[var(--text-primary)] tracking-wider"
            style={{ textShadow: '0 0 30px rgba(0,240,255,0.3)' }}>
            THE FUTURE RUNS ON AI. SO DO I.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function HexCard({ hex }: { hex: typeof HEXES[0] }) {
  return (
    <ScrollReveal>
      <div
        className="group relative cursor-default"
        style={{ width: 180, height: 200 }}
      >
        {/* Hex shape */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            clipPath: HEX_CLIP,
            background: 'rgba(0,240,255,0.03)',
            border: '1px solid rgba(0,240,255,0.15)',
          }}
        />
        {/* Hover glow layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: HEX_CLIP,
            background: 'rgba(0,240,255,0.08)',
            boxShadow: 'inset 0 0 30px rgba(0,240,255,0.2)',
          }}
        />
        {/* Circuit trace border on hover */}
        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 180 200" fill="none">
          <polygon
            points="90,0 180,50 180,150 90,200 0,150 0,50"
            stroke="var(--neon-cyan)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="600"
            strokeDashoffset="600"
            className="group-hover:stroke-dashoffset-0"
            style={{ animation: 'circuit-trace 1.5s linear infinite' }}
          />
        </svg>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center z-10">
          <span className="text-2xl">{hex.icon}</span>
          <h3 className="font-display font-bold text-[10px] text-[var(--neon-cyan)] tracking-wider leading-tight">{hex.title}</h3>
          <p className="font-body text-[8px] text-[var(--text-muted)] leading-relaxed">{hex.body}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
