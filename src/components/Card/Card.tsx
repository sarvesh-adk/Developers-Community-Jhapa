import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
export function Card({ children, className }: CardProps): JSX.Element {
=======
export function Card({ children, className }: CardProps) {
>>>>>>> 863c7b7825502a3d44ccda8f7c31ebc418b48984
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "bg-white border rounded-lg p-6 shadow-sm",
        " hover:shadow transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
