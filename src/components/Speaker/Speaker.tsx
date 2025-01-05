import { Card } from '../Card/Card';
import { motion } from 'framer-motion';

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
}

export function Speaker({ name, role, image }: SpeakerProps) {
  return (
    <Card className="w-[300px] mx-4">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <motion.h3
        className="text-xl font-bold font-montserrat text-[#1f1f1f] mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {name}
      </motion.h3>
      <p className="text-[#575757] font-roboto font-light">{role}</p>
    </Card>
  );
}