import { useRef, useState, ReactNode, MouseEvent } from 'react';

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary"
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Max translation: 12px
    const maxDistance = 12;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const moveX = (distanceX / (rect.width / 2)) * maxDistance;
    const moveY = (distanceY / (rect.height / 2)) * maxDistance;
    
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-accent font-bold tracking-wider transition-all duration-300 ease-out flex items-center justify-center overflow-hidden interactive";
  const variants = {
    primary: "bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] text-[#04040a] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-transparent",
    secondary: "bg-transparent text-[var(--text-primary)] border border-[var(--border-glow)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--neon-cyan)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 1.05 : 1})`,
      }}
      data-testid={`button-magnetic-${variant}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && isHovered && (
        <div className="absolute inset-0 bg-white/20 blur-md pointer-events-none transition-opacity duration-300" />
      )}
    </button>
  );
}
