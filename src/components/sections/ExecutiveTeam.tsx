import { motion } from "framer-motion";
import { ExecutiveCard } from "@/components/ExecutiveCard/ExecutiveCard";
import { executives } from "../../data/executivesData";
import { advisors } from "./advisorsData";

interface Executive {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    [key: string]: string | undefined;
  };
}

export function ExecutiveTeam() {
  return (
    <section id="team" className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl  font-bold text-center mb-12 text-[#022623] dark:text-white line-clamp-1 "
        >
          Our Advisors
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advisors.map((exec: Executive) => (
            <ExecutiveCard
              key={exec.name}
              name={exec.name}
              role={exec.role}
              image={exec.image}
              social={exec.social}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl  font-bold text-center mb-12 text-[#022623] dark:text-white line-clamp-1 "
        >
          Our Executive team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {executives.map((exec: Executive) => (
            <ExecutiveCard
              key={exec.name}
              name={exec.name}
              role={exec.role}
              image={exec.image}
              social={exec.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
