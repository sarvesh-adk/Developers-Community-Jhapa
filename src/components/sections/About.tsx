import { motion } from "framer-motion";

export function About() {
  return (
    <section
      className="py-20 bg-white text-black w-full max-w-7xl mx-auto flex  px-8"
      id="about"
    >
      <div className="max-w-7xl w-2/3 mx-auto px-4  space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-[#022623] leading-tight"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl text-justify"
        >
          Developer Community Jhapa is a thriving tech ecosystem spanning across
          8 Municipalities and 7 Rural Municipalities in Jhapa district, Nepal.
          We're committed to fostering innovation, knowledge sharing, and
          professional growth in the tech community.
        </motion.p>
      </div>
      <div className="w-1/3 ">{/**/}</div>
    </section>
  );
}
