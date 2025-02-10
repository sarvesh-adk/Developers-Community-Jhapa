import { Card } from "../Card/Card";
import { motion } from "framer-motion";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
}

export function SpeakerCard({ name, role, image, linkedin, github, facebook, instagram }: SpeakerProps) {
  // Social Links Mapping
  const socialLinks = [
    { href: linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: github, icon: Github, label: "GitHub" },
    { href: facebook, icon: Facebook, label: "Facebook" },
    { href: instagram, icon: Instagram, label: "Instagram" },
  ].filter(link => link.href); // Remove undefined links

  return (
    <Card className="w-full sm:w-[300px] md:w-[280px] text-center p-6 rounded-xl hover:shadow-md transition-shadow duration-300 mx-auto">
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
      {socialLinks.length > 0 && (
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-red-600"
              whileHover={{ scale: 1.1 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      )}
    </Card>
  );
}