import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Copy, Check, Clock } from 'lucide-react';
import { SiGithub, SiX, SiInstagram, SiYoutube, SiWhatsapp } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/layout/PageHero';
import { Link } from 'wouter';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Message too short'),
  source: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function PakistanClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(now);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-xs text-[var(--neon-cyan)]">🕐 PKT: {time}</span>;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText('powerplayer3748@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all"
      style={{ background: copied ? 'rgba(0,255,136,0.15)' : 'rgba(0,240,255,0.08)', color: copied ? 'var(--success)' : 'var(--neon-cyan)', border: `1px solid ${copied ? 'rgba(0,255,136,0.3)' : 'rgba(0,240,255,0.2)'}` }}>
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setSubmitting(true);
    const typeMap: Record<string, string> = { app: '📱 Mobile App', web: '🌐 Web Development', ai: '🤖 AI Integration', design: '🎨 UI/UX Design', consult: '💼 Business Consultation', collab: '🤝 Collaboration', other: '❓ Other' };
    const subject = encodeURIComponent(`[Portfolio] ${typeMap[data.projectType] ?? data.projectType} from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Hamza,\n\nName: ${data.name}\nEmail: ${data.email}\nProject: ${typeMap[data.projectType] ?? data.projectType}\n${data.budget ? `Budget: ${data.budget}\n` : ''}${data.timeline ? `Timeline: ${data.timeline}\n` : ''}${data.source ? `Found via: ${data.source}\n` : ''}\nMessage:\n${data.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:powerplayer3748@gmail.com?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 6000);
    }, 700);
  };

  const inputCls = 'w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(0,240,255,0.12)] rounded-xl px-4 py-3 font-body text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-[rgba(255,255,255,0.2)]';
  const selectCls = `${inputCls} cursor-pointer`;

  return (
    <PageLayout title="Contact" description="Get in touch with Hamza to start building together.">
      <PageHero label="GET IN TOUCH" title="Contact" subtitle="Let's build something together" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Status */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-[var(--success)]" style={{ animation: 'ai-pulse 1.5s ease infinite' }} />
                <span className="font-display font-black text-sm text-[var(--success)] tracking-widest">AVAILABLE FOR PROJECTS</span>
              </div>
              <p className="font-body text-xs text-[var(--text-muted)] mb-3">Response time: usually within 24 hours</p>
              <PakistanClock />
            </div>

            {/* Email */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} className="text-[var(--neon-cyan)]" />
                <span className="font-display text-xs text-[var(--neon-cyan)] tracking-widest">EMAIL</span>
              </div>
              <p className="font-mono text-xs text-[var(--text-primary)] mb-2">powerplayer3748@gmail.com</p>
              <CopyEmail />
              <p className="font-body text-xs text-[var(--text-muted)] mt-2">Best for: Project inquiries, collabs</p>
            </div>

            {/* WhatsApp */}
            <div className="glass-card rounded-2xl p-5" style={{ borderColor: 'rgba(37,211,102,0.2)' }}>
              <div className="flex items-center gap-2 mb-3">
                <SiWhatsapp size={16} style={{ color: '#25d366' }} />
                <span className="font-display text-xs tracking-widest" style={{ color: '#25d366' }}>WHATSAPP</span>
              </div>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded-xl font-display text-xs font-bold text-[#04040a] tracking-widest transition-all hover:brightness-110"
                style={{ background: '#25d366' }}>
                Message on WhatsApp
              </a>
              <p className="font-body text-xs text-[var(--text-muted)] mt-2">Best for: Quick questions</p>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-[var(--neon-cyan)]" />
                <span className="font-display text-xs text-[var(--neon-cyan)] tracking-widest">LOCATION</span>
              </div>
              <p className="font-body text-sm text-[var(--text-primary)]">Lahore, Pakistan 🇵🇰</p>
              <p className="font-body text-xs text-[var(--text-muted)] mt-1">Available for remote work worldwide</p>
            </div>

            {/* Socials */}
            <div className="glass-card rounded-2xl p-5">
              <div className="font-display text-xs text-[var(--neon-cyan)] tracking-widest mb-3">SOCIAL</div>
              <div className="flex flex-wrap gap-3">
                {[SiGithub, Linkedin, SiX, SiInstagram, SiYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-all">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* What to include */}
            <div className="glass-card rounded-2xl p-5">
              <div className="font-display text-xs text-[var(--gold)] tracking-widest mb-3">WHAT TO INCLUDE</div>
              <ul className="space-y-1.5 text-xs font-body text-[var(--text-muted)]">
                {['Your project idea or requirement', 'Your timeline / deadline', 'Your budget range (if applicable)', 'Where you heard about me'].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[var(--success)]">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }} />
              <h2 className="font-display font-black text-xl mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Full Name *</label>
                  <input {...register('name')} className={inputCls} placeholder="Your full name" />
                  {errors.name && <p className="text-xs text-[var(--danger)] mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Email Address *</label>
                  <input {...register('email')} className={inputCls} placeholder="your@email.com" />
                  {errors.email && <p className="text-xs text-[var(--danger)] mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Project Type *</label>
                  <select {...register('projectType')} className={selectCls}>
                    <option value="">Select project type...</option>
                    <option value="app">📱 Mobile App Development</option>
                    <option value="web">🌐 Web Development</option>
                    <option value="ai">🤖 AI Integration</option>
                    <option value="design">🎨 UI/UX Design</option>
                    <option value="consult">💼 Business Consultation</option>
                    <option value="collab">🤝 Collaboration / Partnership</option>
                    <option value="other">❓ Other</option>
                  </select>
                  {errors.projectType && <p className="text-xs text-[var(--danger)] mt-1">{errors.projectType.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Budget</label>
                    <select {...register('budget')} className={selectCls}>
                      <option value="">Select budget...</option>
                      <option value="under500">Under $500</option>
                      <option value="500-1k">$500 – $1,000</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k+">$10,000+</option>
                      <option value="discuss">To be discussed</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Timeline</label>
                    <select {...register('timeline')} className={selectCls}>
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP (within 1 week)</option>
                      <option value="2-4w">2–4 weeks</option>
                      <option value="1-2m">1–2 months</option>
                      <option value="3m+">3+ months</option>
                      <option value="flex">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">Message *</label>
                  <textarea {...register('message')} rows={6} className={`${inputCls} resize-none`} placeholder="Tell me about your project, idea, or question..." />
                  {errors.message && <p className="text-xs text-[var(--danger)] mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <label className="font-display text-[10px] text-[var(--neon-cyan)] tracking-widest uppercase block mb-1.5">How did you find me?</label>
                  <input {...register('source')} className={inputCls} placeholder="YouTube, Google, friend, etc." />
                </div>

                <button type="submit" disabled={submitting}
                  className="w-full py-4 rounded-xl font-display font-black text-sm text-[#04040a] tracking-widest transition-all hover:brightness-110 disabled:opacity-60 mt-2"
                  style={{ background: success ? 'linear-gradient(90deg, var(--success), #00c853)' : 'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))' }}>
                  {submitting ? 'OPENING EMAIL...' : success ? '✓ EMAIL CLIENT OPENED!' : 'SEND MESSAGE →'}
                </button>

                {success && (
                  <p className="text-center text-xs font-mono text-[var(--success)]">
                    Your email client opened with everything pre-filled. Just hit Send!
                  </p>
                )}

                <p className="text-center text-xs font-body text-[var(--text-muted)] opacity-60 flex items-center justify-center gap-1.5 mt-2">
                  🔒 Your information is safe. I never share your data.{' '}
                  <Link href="/privacy" className="text-[var(--neon-cyan)] hover:underline">Privacy Policy</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
