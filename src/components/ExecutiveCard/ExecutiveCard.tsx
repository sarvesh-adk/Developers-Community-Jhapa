import { Card } from '../Card/Card';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface ExecutiveCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function ExecutiveCard({ name, role, image, social }: ExecutiveCardProps) {
  return (
    <Card className="w-[280px] mx-4">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <motion.h3
        className="text-xl font-bold font-montserrat text-[#1f1f1f] mb-2 text-center"
        whileHover={{ scale: 1.1 }}
      >
        {name}
      </motion.h3>
      <p className="text-[#575757] font-roboto font-light text-center mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        {social.github && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
          >
            <Github size={20} />
          </motion.a>
        )}
        {social.linkedin && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
          >
            <Linkedin size={20} />
          </motion.a>
        )}
        {social.twitter && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
          >
            <Twitter size={20} />
          </motion.a>
        )}
      </div>
    </Card>
  );
}