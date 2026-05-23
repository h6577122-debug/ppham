import { useEffect, useState } from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

const FEED_ITEMS = [
  { time: '09:14', icon: '✅', text: 'Pushed commit: "feat: AI response optimizer v2"' },
  { time: '09:31', icon: '🔥', text: 'App store review: ★★★★★ "Best app I\'ve used"' },
  { time: '10:02', icon: '💡', text: 'Idea saved: "Voice-controlled dev assistant"' },
  { time: '10:17', icon: '⚙️', text: 'Running build: DayPilot v3.1.0' },
  { time: '10:44', icon: '🚀', text: 'Deployed update to ToolBox Master' },
  { time: '11:00', icon: '🤖', text: 'Training new AI model checkpoint' },
  { time: '11:22', icon: '📱', text: 'UI prototype: 14 screens complete' },
  { time: '11:39', icon: '💬', text: 'Client feedback: "Ship it"' },
  { time: '12:05', icon: '🧠', text: 'Research: LLM fine-tuning methods' },
];

function LiveCounter() {
  const BASE_DAYS = 847;
  const BASE_HOURS = 12;
  const BASE_MINS = 33;

  const [mins, setMins] = useState(BASE_MINS);
  const [hours, setHours] = useState(BASE_HOURS);
  const [days, setDays] = useState(BASE_DAYS);

  useEffect(() => {
    const interval = setInterval(() => {
      setMins(m => {
        if (m >= 59) {
          setHours(h => {
            if (h >= 23) {
              setDays(d => d + 1);
              return 0;
            }
            return h + 1;
          });
          return 0;
        }
        return m + 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-body text-[var(--neon-cyan)] font-bold">
      {days}d {String(hours).padStart(2, '0')}h {String(mins).padStart(2, '0')}m
    </span>
  );
}

export function LiveActivity() {
  const allItems = [...FEED_ITEMS, ...FEED_ITEMS];

  return (
    <section id="activity" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="font-accent text-sm tracking-widest text-[var(--success)] font-bold mb-4">[ LIVE ACTIVITY ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Currently Operating</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Feed — 60% */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-2xl overflow-hidden" style={{ height: 420 }}>
              <div className="p-4 border-b border-[var(--border-glow)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_8px_#00ff88]" />
                <span className="font-accent text-xs tracking-widest text-[var(--text-muted)] font-bold">LIVE FEED</span>
              </div>
              <div className="overflow-hidden" style={{ height: 370 }}>
                <div className="activity-feed">
                  {allItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 px-4 py-3 border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(0,240,255,0.03)] transition-colors"
                    >
                      <span className="font-body text-xs text-[var(--text-muted)] mt-0.5 shrink-0 w-12">{item.time}</span>
                      <span className="text-sm shrink-0">{item.icon}</span>
                      <span className="font-body text-xs text-[var(--text-primary)] leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Status Widgets — 40% */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Build Mode */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_16px_#00ff88] shrink-0" />
              <div>
                <div className="font-display font-bold text-sm text-[var(--text-primary)] tracking-wider">BUILD MODE</div>
                <div className="font-body text-xs text-[var(--success)] tracking-widest mt-1">ACTIVE</div>
              </div>
            </div>

            {/* Creativity Bar */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-accent text-xs tracking-widest text-[var(--text-muted)] font-bold">CREATIVITY</span>
                <span className="font-body text-xs text-[var(--neon-cyan)] font-bold">94%</span>
              </div>
              <div className="w-full bg-[rgba(255,255,255,0.05)] rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full relative overflow-hidden"
                  style={{
                    width: '94%',
                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      animation: 'shimmer 2s linear infinite',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Uptime */}
            <div className="glass-card rounded-2xl p-6">
              <div className="font-accent text-xs tracking-widest text-[var(--text-muted)] font-bold mb-2">ONLINE</div>
              <div className="font-display text-xl font-bold">
                <LiveCounter />
              </div>
              <div className="font-body text-xs text-[var(--text-muted)] mt-1">uninterrupted dev streak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
