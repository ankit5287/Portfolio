'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationName = 'fadeInUp' | 'fadeIn';

type ScrollAnimationProps = {
  children: ReactNode;
  animation?: AnimationName;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
};

export default function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  className,
  delay = 0,
  triggerOnce = true,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce]);

  const animationClasses: Record<AnimationName, string> = {
    fadeInUp: 'animate-fade-in-up',
    fadeIn: 'animate-fade-in',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
