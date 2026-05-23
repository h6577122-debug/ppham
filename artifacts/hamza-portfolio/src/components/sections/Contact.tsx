import { useState } from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { MagneticButton } from '../effects/MagneticButton';
import { SiGithub, SiX, SiInstagram } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Globe } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-32 relative z-10 parallax-layer" data-speed="0.9">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="font-accent text-sm tracking-widest text-[var(--gold)] font-bold mb-4">[ CONTACT ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Let's Build Something</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal className="flex flex-col justify-center">
            <h3 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Have an idea? A project? A vision? Let's turn it into reality together.
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--border-glow)] flex items-center justify-center text-[var(--neon-cyan)]">
                  <Mail size={18} />
                </div>
                <span className="font-body">powerplayer3748@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--border-glow)] flex items-center justify-center text-[var(--neon-cyan)]">
                  <MapPin size={18} />
                </div>
                <span className="font-body">Pakistan</span>
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--border-glow)] flex items-center justify-center text-[var(--neon-cyan)]">
                  <Globe size={18} />
                </div>
                <span className="font-body">Available Worldwide</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[SiGithub, Linkedin, SiX, SiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all interactive">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] opacity-50" />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-[var(--text-muted)] text-xs font-bold tracking-wider uppercase">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" className="bg-[rgba(255,255,255,0.02)] border-[var(--border-glow)] text-[var(--text-primary)] focus-visible:ring-[var(--neon-cyan)] font-body py-6" {...field} />
                        </FormControl>
                        <FormMessage className="text-[var(--danger)] text-xs font-body" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-[var(--text-muted)] text-xs font-bold tracking-wider uppercase">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" className="bg-[rgba(255,255,255,0.02)] border-[var(--border-glow)] text-[var(--text-primary)] focus-visible:ring-[var(--neon-cyan)] font-body py-6" {...field} />
                        </FormControl>
                        <FormMessage className="text-[var(--danger)] text-xs font-body" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-[var(--text-muted)] text-xs font-bold tracking-wider uppercase">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[rgba(255,255,255,0.02)] border-[var(--border-glow)] text-[var(--text-primary)] focus:ring-[var(--neon-cyan)] font-body py-6 h-auto">
                              <SelectValue placeholder="Select type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[var(--bg-surface)] border-[var(--border-glow)] font-body">
                            <SelectItem value="app" className="focus:bg-[rgba(0,240,255,0.1)] focus:text-[var(--neon-cyan)] cursor-pointer">App Development</SelectItem>
                            <SelectItem value="web" className="focus:bg-[rgba(0,240,255,0.1)] focus:text-[var(--neon-cyan)] cursor-pointer">Web Development</SelectItem>
                            <SelectItem value="ai" className="focus:bg-[rgba(0,240,255,0.1)] focus:text-[var(--neon-cyan)] cursor-pointer">AI Integration</SelectItem>
                            <SelectItem value="other" className="focus:bg-[rgba(0,240,255,0.1)] focus:text-[var(--neon-cyan)] cursor-pointer">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-[var(--danger)] text-xs font-body" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-[var(--text-muted)] text-xs font-bold tracking-wider uppercase">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your vision..." className="bg-[rgba(255,255,255,0.02)] border-[var(--border-glow)] text-[var(--text-primary)] focus-visible:ring-[var(--neon-cyan)] font-body min-h-[120px] resize-none" {...field} />
                        </FormControl>
                        <FormMessage className="text-[var(--danger)] text-xs font-body" />
                      </FormItem>
                    )}
                  />

                  <MagneticButton className="w-full mt-4" variant="primary" onClick={() => {}}>
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-[#04040a] border-t-transparent rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <span className="text-[#04040a]">MESSAGE SENT!</span>
                    ) : (
                      "SEND MESSAGE →"
                    )}
                  </MagneticButton>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
