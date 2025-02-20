import { Card } from "../Card/Card";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

interface ExecutiveCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  onClick?: () => void;
}

export function ExecutiveCard({
  name,
  role,
  image,
  social,
  onClick
}: ExecutiveCardProps) {
  return (
    <Card className="w-[280px] mx-4 text-center" onClick={onClick}>
      {/* Profile Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#1f1f1f]">{name}</h3>

      {/* Role */}
      <p className="text-sm text-[#575757] mb-3">{role}</p>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        {social.github && (
          <motion.a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={18} />
          </motion.a>
        )}
        {social.linkedin && (
          <motion.a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={18} />
          </motion.a>
        )}
        {social.twitter && (
          <motion.a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#575757] hover:text-[#1f1f1f]"
            whileHover={{ scale: 1.1 }}
          >
            <Twitter size={18} />
          </motion.a>
        )}
      </div>
    </Card>
  );
}
