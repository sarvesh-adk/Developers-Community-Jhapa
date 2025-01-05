import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-[#d4d4d4] rounded-lg p-6 shadow-lg',
        'hover:bg-[#999999] hover:shadow-xl transition-colors',
        className
      )}
    >
      {children}
    </motion.div>
  );
}