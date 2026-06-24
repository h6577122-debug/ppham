import { Link } from 'wouter';

interface Props {
  label: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export function PageHero({ label, title, subtitle, breadcrumb }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ minHeight: 280, paddingTop: 40, paddingBottom: 40 }}>
      {/* bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(0,240,255,0.08) 0%, transparent 70%)' }} />
        <div className="grid-overlay opacity-30" />
      </div>

      <div className="relative z-10" style={{ animation: 'fadeIn 0.6s ease' }}>
        <div className="font-accent text-xs font-bold tracking-[6px] text-[var(--neon-cyan)] uppercase mb-4">
          [ {label} ]
        </div>
        <h1 className="font-display font-black mb-3"
          style={{ fontSize: 'clamp(2.2rem,6vw,3.5rem)', textShadow: '0 0 30px rgba(0,240,255,0.3)', animation: 'slideDown 0.6s ease' }}>
          {title}
        </h1>
        <p className="font-accent text-[var(--text-muted)] text-lg mb-6 max-w-xl">{subtitle}</p>
        {/* breadcrumb */}
        <div className="flex items-center gap-2 justify-center font-mono text-xs text-[var(--text-muted)] opacity-60">
          <Link href="/" className="hover:text-[var(--neon-cyan)] transition-colors">Home</Link>
          <span>›</span>
          <span>{breadcrumb || title}</span>
        </div>
      </div>

      {/* gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-violet), transparent)' }} />
    </div>
  );
}
