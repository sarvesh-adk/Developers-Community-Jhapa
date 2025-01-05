import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Welcome() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-center mb-6 text-[#022623]"
      >
        Developers Community Jhapa
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl mb-8 text-center max-w-2xl text-gray-600"
      >
        Join the largest tech community in Jhapa, Nepal. Building the future together.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button 
          className="bg-[#022623] hover:bg-[#033835] text-white px-8 py-6 text-lg rounded-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register as Member <ArrowRight className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}