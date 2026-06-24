import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';

const SECTIONS = [
  { id: 'intro', label: '1. Introduction' },
  { id: 'collect', label: '2. Information We Collect' },
  { id: 'use', label: '3. How We Use It' },
  { id: 'storage', label: '4. Data Storage & Security' },
  { id: 'third', label: '5. Third-Party Services' },
  { id: 'rights', label: '6. Your Rights' },
  { id: 'cookies', label: '7. Cookies' },
  { id: 'children', label: "8. Children's Privacy" },
  { id: 'changes', label: '9. Changes' },
  { id: 'contact', label: '10. Contact' },
];

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy" description="How HAMZA POWERPLAYER handles your data.">
      <PageHero label="LEGAL" title="Privacy Policy" subtitle="How we handle your data" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-end mb-6">
          <div className="glass-card px-4 py-2 rounded-full font-mono text-xs text-[var(--text-muted)]">Last Updated: June 2026</div>
        </div>

        <div className="flex gap-8">
          {/* TOC sidebar */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="glass-card rounded-xl p-4 sticky top-24">
              <div className="font-display text-xs text-[var(--neon-cyan)] tracking-widest mb-3">CONTENTS</div>
              <nav className="space-y-1">
                {SECTIONS.map(s => (
                  <a key={s.id} href={`#${s.id}`}
                    className="block font-body text-xs text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors py-1 pl-2 border-l border-transparent hover:border-[var(--neon-cyan)]">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-10 font-body text-[rgba(240,240,255,0.85)] leading-[1.8]">

            <div id="intro" className="glass-card rounded-2xl p-6" style={{ borderLeft: '3px solid var(--neon-cyan)' }}>
              <h2 className="font-display font-black text-xl text-[var(--neon-cyan)] mb-3">1. Introduction</h2>
              <p>Welcome to HAMZA POWERPLAYER. I am Hamza, an independent app developer based in Pakistan. This Privacy Policy explains how I collect, use, and protect your personal information when you use my website, apps, and services.</p>
            </div>

            <div id="collect">
              <h2 className="font-display font-black text-xl mb-4">2. Information I Collect</h2>
              <div className="space-y-4">
                <div className="glass-card rounded-xl p-4">
                  <h3 className="font-display text-sm text-[var(--neon-cyan)] mb-2">a) Information You Provide</h3>
                  <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                    <li>• Name, email, message (via contact form)</li>
                    <li>• Account details (if you sign up for apps)</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <h3 className="font-display text-sm text-[var(--neon-cyan)] mb-2">b) Automatically Collected</h3>
                  <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                    <li>• Device type, browser, operating system</li>
                    <li>• Pages visited, time spent (analytics only)</li>
                    <li>• IP address (anonymized)</li>
                  </ul>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }}>
                  <h3 className="font-display text-sm text-[var(--success)] mb-2">c) What I Do NOT Collect</h3>
                  <ul className="space-y-1 text-sm" style={{ color: 'var(--success)' }}>
                    <li>✓ I do NOT sell your data</li>
                    <li>✓ I do NOT share data with advertisers</li>
                    <li>✓ I do NOT store payment information</li>
                    <li>✓ I do NOT collect data from children under 13</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="use">
              <h2 className="font-display font-black text-xl mb-3">3. How I Use Your Information</h2>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {['To respond to your messages and inquiries', 'To improve my apps and website experience', 'To send updates you explicitly requested', 'To analyze usage patterns (anonymized only)'].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[var(--neon-cyan)]">→</span> {i}</li>
                ))}
              </ul>
            </div>

            <div id="storage">
              <h2 className="font-display font-black text-xl mb-3">4. Data Storage & Security</h2>
              <p className="text-sm text-[var(--text-muted)] mb-4">Your data is stored securely using industry-standard encryption. I use Firebase (Google) infrastructure for app data, which is GDPR compliant.</p>
              <div className="flex flex-wrap gap-3">
                {['🔒 AES-256', '🛡️ HTTPS Only', '🔐 Zero-Knowledge'].map(b => (
                  <span key={b} className="glass-card px-3 py-1.5 rounded-full font-mono text-xs text-[var(--neon-cyan)]">{b}</span>
                ))}
              </div>
            </div>

            <div id="third">
              <h2 className="font-display font-black text-xl mb-3">5. Third-Party Services</h2>
              <div className="glass-card rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(0,240,255,0.06)', borderBottom: '1px solid rgba(0,240,255,0.1)' }}>
                      {['Service', 'Purpose', 'Privacy'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-display text-xs text-[var(--neon-cyan)] tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Firebase', 'App Backend', 'Google Privacy'],
                      ['Google Analytics', 'Website Analytics', 'GA Privacy'],
                      ['ElevenLabs', 'Voice Services', 'EL Privacy'],
                      ['Anthropic API', 'AI Features', 'Anthropic Privacy'],
                    ].map(([s, p, l]) => (
                      <tr key={s} className="border-t border-[rgba(255,255,255,0.05)]">
                        <td className="px-4 py-3 font-mono text-xs text-[var(--text-primary)]">{s}</td>
                        <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{p}</td>
                        <td className="px-4 py-3 text-xs text-[var(--neon-cyan)] hover:underline cursor-pointer">{l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="rights">
              <h2 className="font-display font-black text-xl mb-3">6. Your Rights (GDPR / Pakistan PDPA)</h2>
              <div className="space-y-2">
                {[
                  ['🔍', 'Right to Access', 'Request your data'],
                  ['✏️', 'Right to Correct', 'Fix inaccurate data'],
                  ['🗑️', 'Right to Delete', 'Request data removal'],
                  ['📤', 'Right to Export', 'Get your data in JSON'],
                  ['🚫', 'Right to Object', 'Opt out of processing'],
                ].map(([icon, right, desc]) => (
                  <div key={right} className="flex items-center gap-3 glass-card rounded-lg px-4 py-3">
                    <span>{icon}</span>
                    <span className="font-display text-xs text-[var(--neon-cyan)] w-36">{right}</span>
                    <span className="font-body text-sm text-[var(--text-muted)]">{desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-4">Contact: privacy@hamzapowerplayer.com</p>
            </div>

            <div id="cookies">
              <h2 className="font-display font-black text-xl mb-3">7. Cookies</h2>
              <p className="text-sm text-[var(--text-muted)]">I use minimal, essential cookies only. No tracking cookies. No advertising cookies.{' '}<Link href="/cookies" className="text-[var(--neon-cyan)] hover:underline">See the Cookie Policy for details →</Link></p>
            </div>

            <div id="children">
              <h2 className="font-display font-black text-xl mb-3">8. Children's Privacy</h2>
              <p className="text-sm text-[var(--text-muted)]">My services are not directed at children under 13. I do not knowingly collect data from minors.</p>
            </div>

            <div id="changes">
              <h2 className="font-display font-black text-xl mb-3">9. Changes to This Policy</h2>
              <p className="text-sm text-[var(--text-muted)]">I will notify you of significant changes via the website. Continued use after changes means acceptance.</p>
            </div>

            <div id="contact" className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-black text-xl mb-4">10. Contact</h2>
              <div className="space-y-2 text-sm">
                <p className="text-[var(--text-muted)]">📧 <span className="text-[var(--neon-cyan)]">privacy@hamzapowerplayer.com</span></p>
                <p className="text-[var(--text-muted)]">📍 Pakistan</p>
                <p className="text-[var(--text-muted)]">Response time: within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
