import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';

type Filter = 'ALL' | 'MOBILE' | 'WEB' | 'AI' | 'UTILITY';

const APPS = [
  { id: 'toolbox', name: 'ToolBox Master', category: 'PRODUCTIVITY', filters: ['MOBILE', 'UTILITY'], platform: ['Android', 'Web'], rating: 4.9, reviews: 127, tech: ['Flutter', 'Dart', 'Firebase'], status: 'LIVE', color: 'from-cyan-500/20 to-cyan-900/20', accent: 'var(--neon-cyan)', desc: 'An all-in-one productivity toolkit packed with 30+ essential utilities — unit converter, QR generator, password manager, and more. Built for power users who demand speed and simplicity.' },
  { id: 'daypilot', name: 'DayPilot', category: 'AI PRODUCTIVITY', filters: ['MOBILE', 'AI'], platform: ['Android'], rating: 4.8, reviews: 89, tech: ['Flutter', 'Claude AI', 'Firebase'], status: 'LIVE', color: 'from-violet-500/20 to-violet-900/20', accent: 'var(--neon-violet)', desc: 'AI-powered daily planner that learns your habits and suggests the optimal schedule for your day. Smart task prioritization, focus mode, and Claude AI integration.' },
  { id: 'lockbox', name: 'LockBox Pro', category: 'SECURITY', filters: ['MOBILE', 'UTILITY'], platform: ['Android'], rating: 5.0, reviews: 203, tech: ['Flutter', 'AES-256', 'Biometrics'], status: 'LIVE', color: 'from-yellow-500/20 to-yellow-900/20', accent: 'var(--gold)', desc: 'Military-grade encrypted vault for your most sensitive files and notes. AES-256 encryption, biometric authentication, zero-knowledge architecture. Your data stays yours.' },
  { id: 'marya', name: 'Marya AI Companion', category: 'AI', filters: ['MOBILE', 'AI'], platform: ['Android (Coming)'], rating: 0, reviews: 0, tech: ['Expo', 'Claude', 'Gemini'], status: 'DEV', progress: 45, color: 'from-pink-500/20 to-violet-900/20', accent: '#e040fb', desc: 'An intelligent AI companion with personality, memory, and emotion awareness. Built on Claude and Gemini APIs, Marya remembers your conversations and grows with you.' },
  { id: 'subsight', name: 'SubSight', category: 'FINANCE', filters: ['MOBILE', 'UTILITY'], platform: ['Android'], rating: 4.7, reviews: 54, tech: ['Flutter', 'Firebase'], status: 'LIVE', color: 'from-green-500/20 to-green-900/20', accent: 'var(--success)', desc: 'Track all your subscriptions in one place. Get alerts before renewals, analyze spending patterns, and discover unused subscriptions draining your wallet.' },
  { id: 'fantasy', name: 'Fantasy Text Pro', category: 'CREATIVE', filters: ['MOBILE', 'UTILITY'], platform: ['Android'], rating: 4.6, reviews: 78, tech: ['Flutter', 'Dart'], status: 'LIVE', color: 'from-orange-500/20 to-red-900/20', accent: '#ff6b35', desc: 'Transform plain text into 100+ stylish unicode fonts, symbols, and art styles. Perfect for social media bios, usernames, and creative content.' },
  { id: 'timestamp', name: 'TimestampCam Pro', category: 'PHOTOGRAPHY', filters: ['MOBILE', 'UTILITY'], platform: ['Android'], rating: 4.8, reviews: 112, tech: ['Flutter', 'Camera API'], status: 'LIVE', color: 'from-blue-500/20 to-blue-900/20', accent: '#4fc3f7', desc: 'Add beautiful timestamp watermarks to your photos. GPS location, weather, custom formats. The professional way to timestamp your memories.' },
  { id: 'budget', name: 'Budget Tracker', category: 'FINANCE', filters: ['MOBILE', 'UTILITY'], platform: ['Android'], rating: 4.7, reviews: 67, tech: ['Flutter', 'SQLite', 'Firebase'], status: 'LIVE', color: 'from-teal-500/20 to-teal-900/20', accent: '#26c6da', desc: 'Simple but powerful budget tracker with income/expense categories, monthly reports, and smart alerts when you\'re approaching your budget limits.' },
];

const STATS = [
  { val: '8+', label: 'Apps Built' },
  { val: '2', label: 'Platforms' },
  { val: '4.9★', label: 'Avg Rating' },
  { val: '10K+', label: 'Downloads' },
];

const FILTERS: Filter[] = ['ALL', 'MOBILE', 'WEB', 'AI', 'UTILITY'];

export default function AppsPage() {
  const [active, setActive] = useState<Filter>('ALL');

  const filtered = active === 'ALL' ? APPS : APPS.filter(a => a.filters.includes(active));

  return (
    <PageLayout title="Apps" description="Mobile apps and web tools built by HAMZA POWERPLAYER.">
      <PageHero label="MY WORK" title="Apps" subtitle="Built from scratch, shipped to the world" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full font-display text-xs font-bold tracking-widest transition-all"
              style={active === f
                ? { background: 'var(--neon-cyan)', color: '#04040a', boxShadow: '0 0 20px rgba(0,240,255,0.4)' }
                : { background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(0,240,255,0.1)' }}>
              {f}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map(s => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
              <div className="font-display font-black text-3xl text-[var(--neon-cyan)] mb-1">{s.val}</div>
              <div className="font-accent text-xs text-[var(--text-muted)] tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* App cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(app => (
            <div key={app.id} className="glass-card rounded-2xl overflow-hidden hover:border-[rgba(0,240,255,0.25)] transition-all group">
              {/* Header banner */}
              <div className={`h-20 bg-gradient-to-r ${app.color} flex items-center px-6 gap-4`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-xl"
                  style={{ background: 'rgba(0,0,0,0.4)', color: app.accent, border: `1px solid ${app.accent}40` }}>
                  HP
                </div>
                <div>
                  <div className="font-display font-black text-base text-[var(--text-primary)]">{app.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded" style={{ background: `${app.accent}20`, color: app.accent }}>{app.category}</span>
                    {app.status === 'LIVE' ? (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(0,255,136,0.15)', color: 'var(--success)' }}>✓ LIVE</span>
                    ) : (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(255,100,0,0.15)', color: '#ff6400' }}>🔥 IN DEV</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {app.platform.map(p => (
                    <span key={p} className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>{p}</span>
                  ))}
                </div>

                {/* Rating */}
                {app.rating > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: i < Math.floor(app.rating) ? 'var(--gold)' : 'rgba(255,255,255,0.1)' }}>{s}</span>)}</div>
                    <span className="font-mono text-xs text-[var(--gold)]">{app.rating}</span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">({app.reviews} reviews)</span>
                  </div>
                )}

                <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-4">{app.desc}</p>

                {/* Progress bar for dev apps */}
                {app.status === 'DEV' && app.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between font-mono text-xs text-[var(--text-muted)] mb-1.5">
                      <span>Development Progress</span><span style={{ color: app.accent }}>{app.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${app.progress}%`, background: `linear-gradient(90deg, ${app.accent}, var(--neon-violet))` }} />
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {app.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(0,240,255,0.06)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,240,255,0.15)' }}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {app.status === 'DEV' ? (
                    <Link href="/contact" className="flex-1 py-2 rounded-lg font-display text-xs font-bold text-center tracking-widest transition-all"
                      style={{ background: `${app.accent}20`, color: app.accent, border: `1px solid ${app.accent}40` }}>
                      Join Waitlist
                    </Link>
                  ) : (
                    <>
                      <button className="flex-1 py-2 rounded-lg font-display text-xs font-bold text-[#04040a] tracking-widest"
                        style={{ background: app.accent }}>View App</button>
                      <button className="flex-1 py-2 rounded-lg font-display text-xs font-bold tracking-widest transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        Google Play
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* "Your next app?" card */}
          <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center" style={{ border: '2px dashed rgba(0,240,255,0.2)', background: 'rgba(0,240,255,0.02)' }}>
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-display font-black text-xl text-[var(--text-primary)] mb-2">Your Next App?</h3>
            <p className="font-body text-sm text-[var(--text-muted)] mb-5">Have an idea? I can build it.</p>
            <Link href="/hire" className="px-6 py-3 rounded-xl font-display text-sm font-black text-[#04040a] tracking-widest transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
              Hire Me →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
