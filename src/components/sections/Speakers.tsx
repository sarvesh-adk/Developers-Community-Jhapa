import { motion } from 'framer-motion';
import { AutoScroll } from '@/components/AutoScroll/AutoScroll';
import { Speaker } from '@/components/Speaker/Speaker';

const speakers = [
  {
    name: 'Sarah Wilson',
    role: 'Modern Web Development',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'AI in Practice',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Emily Brown',
    role: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

export function Speakers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#022623]"
        >
          Recent Speakers
        </motion.h2>
        <AutoScroll className="py-4" direction="right">
          {speakers.map((speaker) => (
            <Speaker
              key={speaker.name}
              name={speaker.name}
              role={speaker.role}
              image={speaker.image}
            />
          ))}
        </AutoScroll>
      </div>
    </section>
  );
}