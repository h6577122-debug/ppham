import { useEffect, useState } from 'react';

const COUNTRIES = [
  'Japan', 'Germany', 'USA', 'Canada', 'UK', 'Australia', 'France', 'Brazil', 
  'India', 'Singapore', 'UAE', 'Netherlands', 'Sweden', 'South Korea', 
  'Switzerland', 'New Zealand', 'Norway', 'Denmark', 'Finland', 'Ireland'
];

const MESSAGES = [
  "🚀 New project in development...",
  "⚡ AI system: fully operational",
  "💡 Idea #47 logged successfully",
  "🔥 Build streak: 847 days",
  "✅ Code deployed to production",
  "🌐 Visitor from {country} connected"
];

export function ToastNotifications() {
  const [toast, setToast] = useState<{ id: number; message: string; visible: boolean } | null>(null);

  useEffect(() => {
    let timeoutId: number;
    let hideTimeoutId: number;
    const shownMessages = new Set<string>();
    let idCounter = 0;

    const showNextToast = () => {
      const availableMessages = MESSAGES.filter(m => !shownMessages.has(m));
      const messageTemplate = availableMessages.length > 0 
        ? availableMessages[Math.floor(Math.random() * availableMessages.length)]
        : MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

      if (availableMessages.length > 0) {
        shownMessages.add(messageTemplate);
      } else {
        shownMessages.clear();
      }

      const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
      const message = messageTemplate.replace('{country}', country);

      const currentId = ++idCounter;
      setToast({ id: currentId, message, visible: true });

      hideTimeoutId = window.setTimeout(() => {
        setToast(prev => prev?.id === currentId ? { ...prev, visible: false } : prev);
      }, 4000);

      const nextDelay = 12000 + Math.random() * 6000;
      timeoutId = window.setTimeout(showNextToast, nextDelay);
    };

    const initialDelay = 5000 + Math.random() * 5000;
    timeoutId = window.setTimeout(showNextToast, initialDelay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(hideTimeoutId);
    };
  }, []);

  if (!toast) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[8000] glass-card w-[280px] p-4 border-l-2 border-l-[var(--neon-cyan)] rounded-r-lg font-accent text-sm flex gap-3 shadow-lg transition-all duration-400`}
      style={{
        transform: toast.visible ? 'translateY(0)' : 'translateY(120%)',
        opacity: toast.visible ? 1 : 0
      }}
    >
      <span className="text-[var(--text-primary)]">{toast.message}</span>
    </div>
  );
}
