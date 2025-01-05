import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AutoScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function AutoScroll({
  children,
  direction = 'left',
  speed = 20,
  className = '',
}: AutoScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(scrollRef);

  useEffect(() => {
    if (!isInView) return;

    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const viewportWidth = scrollRef.current?.offsetWidth || 0;
    const distance = scrollWidth - viewportWidth;

    controls.start({
      x: direction === 'left' ? -distance : distance,
      transition: {
        duration: distance / speed,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      },
    });
  }, [controls, direction, isInView, speed]);

  return (
    <div ref={scrollRef} className={`overflow-hidden ${className}`}>
      <motion.div
        animate={controls}
        className="inline-flex"
      >
        {children}
      </motion.div>
    </div>
  );
}