import { useState, useEffect, useRef } from 'react';

export function TiltCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // tiltX = (mouseY - centerY) / height * 15
    const tiltX = ((mouseY - centerY) / rect.height) * 15;
    // tiltY = (mouseX - centerX) / width * -15
    const tiltY = ((mouseX - centerX) / rect.width) * -15;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-xl transition-all duration-200 ease-out interactive relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateZ(20px)' : 'translateZ(0)'}`,
        boxShadow: isHovered ? '0 20px 40px rgba(0,240,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' : undefined,
        borderColor: isHovered ? 'rgba(0,240,255,0.3)' : 'rgba(0,240,255,0.12)',
        ...style
      }}
    >
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        />
      )}
      {children}
    </div>
  );
}
