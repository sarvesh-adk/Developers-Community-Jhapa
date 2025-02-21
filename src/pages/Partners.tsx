import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import { partners } from "@/data/partners";

const Partners = () => {
  return (
    <div>
      <section className="mt-10 pb-20 bg-white min-h-[60vh] " id="partners">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-[#022623] text-nowrap"
          >
            Our Partners
          </motion.h2>
          <div className="md:flex  justify-center grid  gap-10 w-full px-5">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center "
              >
                <Card className="p-6 w-[260px] h-[280px] mx-auto">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-md font-bold mb-2  text-[#022623]">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600  text-left text-sm">{partner.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
