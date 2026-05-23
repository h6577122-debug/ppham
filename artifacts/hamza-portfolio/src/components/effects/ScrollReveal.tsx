import { useEffect, useRef, ReactNode } from 'react';

export function ScrollReveal({ 
  children, 
  className = "",
  staggerBase = 0.12
}: { 
  children: ReactNode;
  className?: string;
  staggerBase?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];
            children.forEach((child, i) => {
              child.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerBase}s`;
              child.style.transform = 'translateY(0)';
              child.style.opacity = '1';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      // Initialize states
      const children = Array.from(containerRef.current.children) as HTMLElement[];
      children.forEach(child => {
        child.style.transform = 'translateY(60px)';
        child.style.opacity = '0';
      });
    }

    return () => observer.disconnect();
  }, [staggerBase]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
