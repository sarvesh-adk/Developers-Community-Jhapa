import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "bg-white border rounded-lg p-6 shadow-sm",
        "hover:shadow transition-colors",
        className
      )}
      onClick={onClick} // Pass the onClick prop here
    >
      {children}
    </motion.div>
  );
}