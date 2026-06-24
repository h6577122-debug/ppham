import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';

const COOKIE_TABLE = [
  { name: 'session_id', purpose: 'Keep you logged in', duration: 'Session', type: 'Essential' },
  { name: 'theme_pref', purpose: 'Remember dark mode', duration: '1 year', type: 'Preference' },
  { name: 'lang_pref', purpose: 'Language setting', duration: '1 year', type: 'Preference' },
  { name: 'analytics_*', purpose: 'Site improvement (anonymized)', duration: '30 days', type: 'Analytics' },
  { name: 'hp_cookie_consent', purpose: 'Remember your cookie choice', duration: '1 year', type: 'Essential' },
];

const typeColor: Record<string, string> = {
  Essential: 'var(--neon-cyan)', Preference: 'var(--neon-violet)', Analytics: 'var(--gold)',
};

export default function CookiesPage() {
  return (
    <PageLayout title="Cookie Policy" description="What cookies HAMZA POWERPLAYER uses and why.">
      <PageHero label="LEGAL" title="Cookie Policy" subtitle="What cookies we use and why" />

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 font-body text-[rgba(240,240,255,0.85)] leading-[1.8]">
        <div className="flex justify-end">
          <div className="glass-card px-4 py-2 rounded-full font-mono text-xs text-[var(--text-muted)]">Last Updated: June 2026</div>
        </div>

        {/* Summary */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-display font-black text-xl text-[var(--neon-cyan)] mb-3">Quick Summary</h2>
          <p className="text-sm text-[var(--text-muted)]">I use the minimum cookies necessary to make the website function. No tracking cookies. No ad cookies. No selling your data. Just the basics.</p>
        </div>

        {/* Cookie table */}
        <div>
          <h2 className="font-display font-black text-xl mb-4">Cookies We Use</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(0,240,255,0.06)', borderBottom: '1px solid rgba(0,240,255,0.1)' }}>
                  {['Cookie Name', 'Purpose', 'Duration', 'Type'].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-display text-[10px] text-[var(--neon-cyan)] tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COOKIE_TABLE.map(row => (
                  <tr key={row.name} className="border-t border-[rgba(255,255,255,0.05)]">
                    <td className="px-4 py-3 font-mono text-xs text-[var(--text-primary)]">{row.name}</td>
                    <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{row.purpose}</td>
                    <td className="px-4 py-3 font-mono text-xs text-[var(--text-muted)]">{row.duration}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: typeColor[row.type] ?? 'var(--text-muted)', background: `${typeColor[row.type] ?? '#fff'}15`, border: `1px solid ${typeColor[row.type] ?? '#fff'}25` }}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Do NOT use */}
        <div>
          <h2 className="font-display font-black text-xl mb-4">Cookies I Do NOT Use</h2>
          <div className="space-y-2">
            {['Advertising cookies', 'Social media tracking cookies', 'Third-party marketing cookies', 'Fingerprinting technologies'].map(i => (
              <div key={i} className="flex gap-3 glass-card rounded-lg px-4 py-2.5">
                <span className="text-[var(--danger)]">✗</span>
                <span className="text-sm text-[var(--text-muted)]">{i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Managing cookies */}
        <div>
          <h2 className="font-display font-black text-xl mb-4">Managing Cookies</h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">You can disable cookies in your browser settings. Some features may not work without essential cookies.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Chrome', 'Firefox', 'Safari', 'Edge'].map(b => (
              <div key={b} className="glass-card rounded-xl px-4 py-3 text-center">
                <div className="font-display font-black text-xs text-[var(--neon-cyan)] mb-1">{b}</div>
                <div className="font-body text-[10px] text-[var(--text-muted)]">Settings → Privacy → Cookies</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
