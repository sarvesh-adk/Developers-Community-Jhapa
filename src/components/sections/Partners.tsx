import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const partners = [
  {
    name: 'TechCorp Nepal',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Leading technology solutions provider'
  },
  {
    name: 'Digital Innovators',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop',
    description: 'Innovation hub for digital transformation'
  }
];

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#022623]"
        >
          Community Partners
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-[#022623]">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}