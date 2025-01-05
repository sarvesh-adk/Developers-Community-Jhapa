import { motion } from 'framer-motion';
import { AutoScroll } from '@/components/AutoScroll/AutoScroll';
import { ExecutiveCard } from '@/components/ExecutiveCard/ExecutiveCard';

const executives = [
  {
    name: 'John Doe',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Jane Smith',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Mike Johnson',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarah Wilson',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'David Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Emily Brown',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Alex Turner',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

export function ExecutiveTeam() {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#022623] dark:text-white"
        >
          Our Executive Team
        </motion.h2>
        <AutoScroll className="py-4">
          {executives.map((exec) => (
            <ExecutiveCard
              key={exec.name}
              name={exec.name}
              role={exec.role}
              image={exec.image}
              social={exec.social}
            />
          ))}
        </AutoScroll>
      </div>
    </section>
  );
}