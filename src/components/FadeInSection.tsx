
import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  threshold?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseClasses = 'transition-all duration-700';
    const delayClass = delay ? `delay-[${delay}ms]` : '';
    
    switch (direction) {
      case 'up':
        return `${baseClasses} ${delayClass} animate-fade-in`;
      case 'down':
        return `${baseClasses} ${delayClass} translate-y-[-10px] animate-fade-in`;
      case 'left':
        return `${baseClasses} ${delayClass} animate-fade-in-left`;
      case 'right':
        return `${baseClasses} ${delayClass} animate-fade-in-right`;
      case 'none':
        return `${baseClasses} ${delayClass} opacity-100 transition-opacity`;
      default:
        return `${baseClasses} ${delayClass} animate-fade-in`;
    }
  };

  return (
    <div 
      ref={domRef}
      className={`${getAnimationClass()} ${className} ${!isVisible ? 'opacity-0' : ''}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
