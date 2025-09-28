'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;
};

export default function TypewriterEffect({ text, speed = 150, className, loop = false }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      } else {
        if (displayedText.length < text.length) {
          setDisplayedText((prev) => prev + text.charAt(displayedText.length));
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, speed, loop]);

  return (
    <span className={cn(className, 'min-h-[1.2em] inline-block')}>{displayedText}&nbsp;</span>
  );
}
