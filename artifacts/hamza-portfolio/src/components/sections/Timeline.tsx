import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

const nodes = [
  { title: "LEARNING", desc: "Discovered the power of code. Started with the basics, fell in love with the craft." },
  { title: "BUILDING", desc: "First apps. First failures. First breakthroughs. Every bug was a lesson." },
  { title: "PUBLISHING", desc: "Shipped to the world. Real users. Real feedback. Real growth." },
  { title: "SCALING", desc: "Growing the portfolio. Larger projects. Deeper expertise. Higher standards." },
  { title: "FUTURE", desc: "AI. Automation. Impact at scale. The biggest chapter hasn't been written yet." }
];

export function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far down the screen the timeline is
      const topOffset = windowHeight * 0.5; // Starts drawing when it reaches halfway
      if (rect.top > topOffset) {
        setProgress(0);
      } else if (rect.bottom < topOffset) {
        setProgress(100);
      } else {
        const total = rect.height;
        const current = topOffset - rect.top;
        setProgress((current / total) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-32 relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="font-accent text-sm tracking-widest text-[var(--neon-cyan)] font-bold mb-4">[ JOURNEY ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">The Road So Far</h2>
        </ScrollReveal>

        <div className="relative py-10" ref={lineRef}>
          {/* Background line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[rgba(255,255,255,0.05)] transform md:-translate-x-1/2" />
          
          {/* Animated line */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[var(--neon-cyan)] to-[var(--neon-violet)] transform md:-translate-x-1/2 transition-all duration-300 ease-out"
            style={{ height: `${progress}%`, boxShadow: '0 0 10px rgba(0,240,255,0.5)' }}
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {nodes.map((node, i) => {
              const isEven = i % 2 === 0;
              const isFilled = progress > (i / (nodes.length - 1)) * 100;
              
              return (
                <ScrollReveal key={i} className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle */}
                  <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-[var(--bg-base)] transition-all duration-500 z-20 ${isFilled ? 'border-[var(--neon-cyan)] shadow-[0_0_15px_#00f0ff] scale-125' : 'border-[var(--border-glow)]'}`}>
                    {isFilled && <div className="absolute inset-1 rounded-full bg-[var(--neon-cyan)]" />}
                  </div>

                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="glass-card p-6 rounded-xl hover:border-[var(--neon-cyan)] transition-colors duration-300 group">
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-cyan)] transition-colors tracking-wide">◉ {node.title}</h3>
                      <p className="font-body text-[var(--text-muted)] leading-relaxed">{node.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
