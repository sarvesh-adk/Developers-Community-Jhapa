import { motion } from 'framer-motion';
import { AutoScroll } from '@/components/AutoScroll/AutoScroll';
import { ExecutiveCard } from '@/components/ExecutiveCard/ExecutiveCard';
import br1Image from '../assets/images/br1.jpg';
const executives = [
  {
    name: 'Bhaskar Rijal',
    role: 'Principal Advisor',
    br1Image: 'br1.jpg',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Arjun Tiwari',
    role: 'Advisor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarveshwar Adhikari',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Prabin Thakur',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Kaushal Rijal',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Awashar Poudel',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sohan Dhakal',
    role: 'Senior Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Hridayadev Dhungana',
    role: 'Senior Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Samir Niroula',
    role: 'Senior Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Rabin Dahal',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Piyush Karn',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Rabin Dahal',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Alwin Bhandari',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: ' Anisha Bhandari',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Namita Parajuli',
    role: ' Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Radhika Basnet',
    role: ' Executive',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
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