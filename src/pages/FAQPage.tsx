import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';
import { Plus, X } from 'lucide-react';

type Cat = 'GENERAL' | 'APPS' | 'HIRING' | 'TECH' | 'PRIVACY';

const FAQS: { cat: Cat; q: string; a: string }[] = [
  { cat: 'GENERAL', q: 'Who is HAMZA POWERPLAYER?', a: "I'm Hamza, a Pakistani app developer and AI builder. I build mobile apps, web tools, and AI-powered experiences. I document my journey on YouTube and GitHub." },
  { cat: 'GENERAL', q: 'Where are you based?', a: "I'm based in Lahore, Pakistan 🇵🇰 and work remotely with clients worldwide." },
  { cat: 'GENERAL', q: 'How long have you been coding?', a: "I've been building seriously for 2+ years, starting with web development and moving into mobile and AI." },
  { cat: 'GENERAL', q: 'Can I follow your work?', a: "Yes! Subscribe on YouTube, follow on GitHub, and check this website for updates." },
  { cat: 'APPS', q: 'Are your apps free?', a: "Most apps have a free version. Some have premium features. Check each app's page for pricing details." },
  { cat: 'APPS', q: 'Which platforms are your apps on?', a: "Currently Google Play (Android). iOS is planned." },
  { cat: 'APPS', q: 'How do I report a bug?', a: "Use the contact form or email bugs@hamzapowerplayer.com with your device info and what happened." },
  { cat: 'APPS', q: 'Can I request a feature?', a: "Absolutely. I love feature requests. Use the contact form and select 'Feature Request' as the type." },
  { cat: 'APPS', q: 'Is my data safe in your apps?', a: "Yes. I use AES-256 encryption, Firebase security rules, and zero-knowledge architecture in sensitive apps." },
  { cat: 'HIRING', q: 'Are you available for freelance work?', a: "Yes, I'm currently available for select projects. See the Hire Me page for details and rates." },
  { cat: 'HIRING', q: 'What kind of projects do you take?', a: "Mobile apps (Flutter), web projects, AI integrations, and UI/UX design. Minimum project: $500." },
  { cat: 'HIRING', q: 'How fast do you work?', a: "Depends on scope. Simple apps: 2–4 weeks. Complex apps: 1–3 months. Rush available." },
  { cat: 'HIRING', q: 'Do you sign NDAs?', a: "Yes. I'm happy to sign NDAs before project discussions." },
  { cat: 'TECH', q: "What's your main tech stack?", a: "Flutter · Dart · Firebase · Python · AI APIs · React" },
  { cat: 'TECH', q: 'Do you do backend development?', a: "Yes. Node.js, Firebase Functions, Supabase, REST APIs." },
  { cat: 'TECH', q: 'Can you add AI to my existing app?', a: "Yes. I integrate GPT-4, Claude, Gemini, and custom LLM solutions into existing projects." },
  { cat: 'PRIVACY', q: 'How is my data handled?', a: "Your data is stored securely using AES-256 encryption on Firebase infrastructure, which is GDPR compliant. I never sell or share your data." },
  { cat: 'PRIVACY', q: 'What cookies do you use?', a: "Only essential cookies — no tracking, no advertising cookies. See the Cookie Policy for full details." },
];

const CATS: Cat[] = ['GENERAL', 'APPS', 'HIRING', 'TECH', 'PRIVACY'];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[rgba(0,240,255,0.03)]">
        <span className="font-display font-black text-sm text-[var(--text-primary)] pr-4">{q}</span>
        <span className="shrink-0 text-[var(--neon-cyan)]">{open ? <X size={16} /> : <Plus size={16} />}</span>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p className="px-5 pb-4 font-body text-sm text-[var(--text-muted)] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [active, setActive] = useState<Cat>('GENERAL');
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(f => {
    const matchCat = f.cat === active;
    const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageLayout title="FAQ" description="Frequently asked questions about HAMZA POWERPLAYER.">
      <PageHero label="ANSWERS" title="FAQ" subtitle="Everything you wanted to know" />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="relative mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm">🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..."
            className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.12)] rounded-xl pl-10 pr-4 py-3 font-body text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-cyan)] placeholder:text-[rgba(255,255,255,0.25)]" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className="px-4 py-1.5 rounded-full font-display text-[10px] font-bold tracking-widest transition-all"
              style={active === c
                ? { background: 'var(--neon-cyan)', color: '#04040a' }
                : { background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(0,240,255,0.1)' }}>
              {c}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 mb-12">
          {filtered.length > 0
            ? filtered.map(f => <AccordionItem key={f.q} q={f.q} a={f.a} />)
            : <p className="text-center font-body text-sm text-[var(--text-muted)] py-8">No matching questions found.</p>}
        </div>

        {/* Still have questions */}
        <div className="glass-card rounded-2xl p-8 text-center">
          <h3 className="font-display font-black text-xl text-[var(--text-primary)] mb-2">Didn't find your answer?</h3>
          <p className="font-body text-sm text-[var(--text-muted)] mb-5">Ask me directly — I reply to everything.</p>
          <Link href="/contact" className="inline-block px-6 py-3 rounded-xl font-display text-sm font-black text-[#04040a] tracking-widest transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
            Ask Me Directly →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
