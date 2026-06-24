import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';

type Cat = 'ALL' | 'DEV JOURNEY' | 'TUTORIALS' | 'AI' | 'APPS' | 'PRODUCTIVITY';

const POSTS = [
  { id: 1, title: 'How I Built 3 Apps While Still in School', cat: 'DEV JOURNEY', color: 'from-cyan-500/20 to-blue-900/20', date: 'June 2026', read: '8 min', excerpt: 'Building apps while juggling school isn\'t easy. But it taught me more than any classroom ever could. Here\'s the honest story.', featured: true },
  { id: 2, title: 'Why I Chose Flutter Over React Native', cat: 'TUTORIALS', color: 'from-violet-500/20 to-violet-900/20', date: 'May 2026', read: '6 min', excerpt: 'Both are great. But only one felt right for how I build. Here\'s my honest comparison after using both in production.' },
  { id: 3, title: 'Building AI Apps Without a CS Degree', cat: 'AI', color: 'from-pink-500/20 to-purple-900/20', date: 'May 2026', read: '10 min', excerpt: 'I don\'t have a computer science degree. But I\'ve shipped AI-powered apps. Here\'s the exact path I followed.' },
  { id: 4, title: 'My App Got 1000 Downloads — Here\'s How', cat: 'APPS', color: 'from-green-500/20 to-teal-900/20', date: 'April 2026', read: '7 min', excerpt: 'From zero to 1000 downloads with zero marketing budget. The strategies that actually moved the needle.' },
  { id: 5, title: 'The Best Free Tools for Indie Developers', cat: 'PRODUCTIVITY', color: 'from-yellow-500/20 to-orange-900/20', date: 'April 2026', read: '5 min', excerpt: 'A curated list of free tools I use daily to design, build, test, and ship apps without spending a cent.' },
  { id: 6, title: 'How to Publish Your First App on Google Play', cat: 'TUTORIALS', color: 'from-blue-500/20 to-indigo-900/20', date: 'March 2026', read: '12 min', excerpt: 'Step-by-step guide: from a Flutter project to live on Google Play. Every step, every pitfall, every tip.' },
  { id: 7, title: 'What I Learned From My First App Failure', cat: 'DEV JOURNEY', color: 'from-red-500/20 to-red-900/20', date: 'March 2026', read: '9 min', excerpt: 'My first app crashed, had zero users, and got a 1-star review. Here\'s everything I learned from that painful experience.' },
  { id: 8, title: 'Using Claude API to Build Smart Features', cat: 'AI', color: 'from-orange-500/20 to-red-900/20', date: 'February 2026', read: '8 min', excerpt: 'Claude API is a game-changer for indie developers. Here\'s how I integrate it into Flutter apps practically.' },
  { id: 9, title: "Pakistan's Rising Developer Community", cat: 'DEV JOURNEY', color: 'from-teal-500/20 to-cyan-900/20', date: 'January 2026', read: '6 min', excerpt: 'Something incredible is happening in Pakistan\'s tech scene. I\'m documenting the rise of a generation of builders.' },
];

const CATS: Cat[] = ['ALL', 'DEV JOURNEY', 'TUTORIALS', 'AI', 'APPS', 'PRODUCTIVITY'];

export default function BlogPage() {
  const [active, setActive] = useState<Cat>('ALL');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featured = POSTS.find(p => p.featured);
  const posts = POSTS.filter(p => !p.featured && (active === 'ALL' || p.cat === active));

  return (
    <PageLayout title="Blog" description="Insights, tutorials and dev journey from HAMZA POWERPLAYER.">
      <PageHero label="THOUGHTS" title="Blog" subtitle="Insights from the build" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Featured post */}
        {featured && (
          <div className="glass-card rounded-2xl overflow-hidden mb-10 group hover:border-[rgba(0,240,255,0.25)] transition-all">
            <div className={`h-40 bg-gradient-to-r ${featured.color} flex items-end p-6`}>
              <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(245,197,24,0.2)', color: 'var(--gold)', border: '1px solid rgba(245,197,24,0.3)' }}>
                ★ FEATURED
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,240,255,0.08)', color: 'var(--neon-cyan)' }}>{featured.cat}</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">{featured.read} read</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">{featured.date}</span>
              </div>
              <h2 className="font-display font-black text-2xl text-[var(--text-primary)] mb-3">{featured.title}</h2>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-4">{featured.excerpt}</p>
              <button className="px-5 py-2 rounded-xl font-display text-xs font-black text-[#04040a] tracking-widest transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
                Read Article →
              </button>
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className="px-4 py-1.5 rounded-full font-display text-[10px] font-bold tracking-widest transition-all"
              style={active === c
                ? { background: 'var(--neon-cyan)', color: '#04040a', boxShadow: '0 0 16px rgba(0,240,255,0.3)' }
                : { background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(0,240,255,0.1)' }}>
              {c}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {posts.map(post => (
            <div key={post.id} className="glass-card rounded-2xl overflow-hidden hover:border-[rgba(0,240,255,0.2)] transition-all flex flex-col">
              <div className={`h-24 bg-gradient-to-r ${post.color}`} />
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(0,240,255,0.08)', color: 'var(--neon-cyan)' }}>{post.cat}</span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">{post.read}</span>
                </div>
                <h3 className="font-display font-black text-sm text-[var(--text-primary)] mb-2 leading-snug">{post.title}</h3>
                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed flex-1 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center font-display font-black text-[10px] text-[var(--neon-cyan)]"
                      style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)' }}>HP</div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">{post.date}</span>
                  </div>
                  <button className="font-display text-[10px] text-[var(--neon-cyan)] hover:underline tracking-widest">Read →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-8 text-center max-w-xl mx-auto">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-black text-xl text-[var(--text-primary)] mb-1">GET THE LATEST ARTICLES</h3>
          <p className="font-body text-sm text-[var(--text-muted)] mb-5">New posts every week. No spam. Unsubscribe anytime.</p>
          {subscribed ? (
            <p className="font-mono text-sm text-[var(--success)]">✓ You're subscribed! Check your inbox.</p>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex gap-3">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com"
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.12)] rounded-xl px-4 py-3 font-body text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-cyan)] placeholder:text-[rgba(255,255,255,0.2)]" />
              <button type="submit" className="px-5 py-3 rounded-xl font-display text-xs font-black text-[#04040a] tracking-widest whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
                SUBSCRIBE
              </button>
            </form>
          )}
          <p className="font-mono text-xs text-[var(--text-muted)] mt-3 opacity-60">Join 000+ developers already subscribed</p>
        </div>
      </div>
    </PageLayout>
  );
}
