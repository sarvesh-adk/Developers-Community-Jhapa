import { motion } from 'framer-motion';
import { AutoScroll } from '@/components/AutoScroll/AutoScroll';
import { ExecutiveCard } from '@/components/ExecutiveCard/ExecutiveCard';
import bhaskar  from '@/assets/bhaskar.jpg';
import arjun  from '@/assets/arjun.jpg';
import sarvesh  from '@/assets/sarvesh.jpg';
import prabin  from '@/assets/prabin.png';
import kaushal  from '@/assets/kaushal.png';
import awashar  from '@/assets/awashar.png';
import sohan  from '@/assets/sohan.png';
import hridayadev  from '@/assets/hridayadev.png';
import samir  from '@/assets/samir.png';
import rabin  from '@/assets/rabin.png';
import piyush from '@/assets/piyush.png';
import subham from '@/assets/subham.png';
import alwin  from '@/assets/alwin.png';
import anisha  from '@/assets/anisha.png';
import radhika  from '@/assets/namita.jpg';
import namita  from '@/assets/radhika.png';


const executives = [
  {
    name: 'Bhaskar Rijal',
    role: 'Principal Advisor',
    image: bhaskar,
    social: { linkedin: 'https://www.linkedin.com/in/bhaskarrijal/', twitter: 'https://x.com/bhaskarrijal', github: 'https://github.com/bhaskarijal' }
  },
  {
    name: 'Arjun Tiwari',
    role: 'Advisor',
    image: arjun,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarveshwar Adhikari',
    role: 'President',
    image: sarvesh,
    social: { linkedin: 'https://www.linkedin.com/in/sarvesh-adk', twitter: 'https://x.com/sarvesh_adk_', github: 'https://github.com/sarvesh-adk' }
  },
  {
    name: 'Prabin Thakur',
    role: 'Vice President',
    image: prabin,
    social: { linkedin: '#', twitter: '#', github: 'https://github.com/sarvesh-adk' }
  },
  {
    name: 'Kaushal Rijal',
    role: 'Secretary',
    image: kaushal,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Awashar Poudel',
    role: 'Secretary',
    image: awashar,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sohan Dhakal',
    role: 'Senior Executive',
    image: sohan,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Hridayadev Dhungana',
    role: 'Senior Executive',
    image: hridayadev,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Samir Niroula',
    role: 'Senior Executive',
    image: samir,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Rabin Dahal',
    role: 'Executive',
    image: rabin,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Piyush Karn',
    role: 'Executive',
    image:  piyush,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Subham Bista',
    role: 'Executive',
    image:  subham,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Alwin Bhandari',
    role: 'Executive',
    image: alwin,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: ' Anisha Bhandari',
    role: 'Executive',
    image: anisha,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Namita Parajuli',
    role: ' Executive',
    image: namita,
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Radhika Basnet',
    role: ' Executive',
    image: radhika,
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