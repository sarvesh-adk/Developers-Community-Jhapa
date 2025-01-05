import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-20 bg-[#022623] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-center"
        >
          Developers Community Jhapa is a thriving tech ecosystem spanning across 8 Municipalities 
          and 7 Rural Municipalities in Jhapa district, Nepal. We're committed to fostering 
          innovation, knowledge sharing, and professional growth in the tech community.
        </motion.p>
      </div>
    </section>
  );
}