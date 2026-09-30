import { useRef, useEffect, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet = ({
  children,
  className = '',
  padding: _padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / strength;
      const deltaY = (e.clientY - centerY) / strength;

      setTransform({ x: deltaX, y: deltaY });
      element.style.transition = activeTransition;
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
      if (element) {
        element.style.transition = inactiveTransition;
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [activeTransition, inactiveTransition, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform',
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isHovering ? activeTransition : inactiveTransition,
      }}
    >
      {children}
    </div>
  );
};