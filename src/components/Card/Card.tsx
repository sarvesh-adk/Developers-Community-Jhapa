import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "bg-[#eeeeee] rounded-lg p-6 shadow-sm",
        " hover:shadow transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
