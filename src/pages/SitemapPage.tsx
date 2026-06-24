import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';

const MAIN_PAGES = [
  { icon: '🏠', label: 'Home', href: '/' },
  { icon: '🙋', label: 'About', href: '/about' },
  { icon: '📱', label: 'Apps', href: '/apps' },
  { icon: '📝', label: 'Blog', href: '/blog' },
  { icon: '🛠', label: 'Tools', href: '/tools' },
  { icon: '❓', label: 'FAQ', href: '/faq' },
  { icon: '📞', label: 'Contact', href: '/contact' },
  { icon: '💼', label: 'Hire Me', href: '/hire' },
];

const LEGAL_PAGES = [
  { icon: '🔒', label: 'Privacy Policy', href: '/privacy' },
  { icon: '📜', label: 'Terms of Service', href: '/terms' },
  { icon: '🍪', label: 'Cookie Policy', href: '/cookies' },
  { icon: '⚠️', label: 'Disclaimer', href: '/disclaimer' },
];

function downloadSitemap() {
  const now = new Date().toISOString().split('T')[0];
  const allPages = [...MAIN_PAGES, ...LEGAL_PAGES];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(p => `<url>
    <loc>https://hamzapowerplayer.com${p.href}</loc>
    <lastmod>${now}</lastmod>
    <priority>${p.href === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n  ')}
</urlset>`;
  const blob = new Blob([xml], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'sitemap.xml'; a.click();
  URL.revokeObjectURL(url);
}

export default function SitemapPage() {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <PageLayout title="Sitemap" description="Every page on HAMZA POWERPLAYER website, organized.">
      <PageHero label="NAVIGATION" title="Sitemap" subtitle="Every page, organized" />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-end mb-6">
          <div className="glass-card px-4 py-2 rounded-full font-mono text-xs text-[var(--text-muted)]">Generated: {today}</div>
        </div>

        {/* Main pages */}
        <h2 className="font-display font-black text-xl text-[var(--text-primary)] mb-4">Main Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {MAIN_PAGES.map(p => (
            <Link key={p.href} href={p.href}
              className="glass-card rounded-xl p-5 text-center hover:border-[rgba(0,240,255,0.3)] hover:text-[var(--neon-cyan)] transition-all group">
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="font-display font-black text-sm text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">{p.label}</div>
            </Link>
          ))}
        </div>

        {/* Legal pages */}
        <h2 className="font-display font-black text-xl text-[var(--text-muted)] mb-4">Legal Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {LEGAL_PAGES.map(p => (
            <Link key={p.href} href={p.href}
              className="glass-card rounded-xl p-4 text-center hover:border-[rgba(0,240,255,0.2)] transition-all group opacity-75 hover:opacity-100">
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="font-body text-xs text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)] transition-colors">{p.label}</div>
            </Link>
          ))}
        </div>

        {/* Download */}
        <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display font-black text-sm text-[var(--text-primary)] mb-1">SEO Sitemap</div>
            <div className="font-mono text-xs text-[var(--text-muted)]">XML sitemap for search engines · Last generated: {today}</div>
          </div>
          <button onClick={downloadSitemap}
            className="px-5 py-2.5 rounded-xl font-display text-xs font-black text-[#04040a] tracking-widest whitespace-nowrap transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
            Download sitemap.xml
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
