import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'left' | 'right'; // Animation direction
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect after triggering once for performance
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { 
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: "0px 0px -50px 0px" 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Cleanup (though disconnect usually handles it)
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Calculate transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-12';
        case 'left': return '-translate-x-12';
        case 'right': return 'translate-x-12';
        default: return 'translate-y-12';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};