import { Card } from "../Card/Card";
import { motion } from "framer-motion";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
}

export function Speaker({ name, role, image, social }: SpeakerProps) {
  return (
    <Card className="w-[280px] mx-4 text-center p-6 rounded-xl  hover:shadow-sm transition-shadow duration-300">
      {/* Profile Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#1f1f1f]">{name}</h3>

      {/* Role */}
      <p className="text-sm text-[#575757] mb-4 h-16">{role}</p>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        {social.linkedin && (
          <motion.a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={20} />
          </motion.a>
        )}
        {social.github && (
          <motion.a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={20} />
          </motion.a>
        )}
        {social.facebook && (
          <motion.a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <Facebook size={20} />
          </motion.a>
        )}
        {social.instagram && (
          <motion.a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram size={20} />
          </motion.a>
        )}
      </div>
    </Card>
  );
}
