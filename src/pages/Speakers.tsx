import { AutoScroll } from "@/components/AutoScroll/AutoScroll";
import { Speaker } from "@/components/Speaker/Speaker";
import { motion } from "framer-motion";
import { speakers } from "../data/speakers";

// Define the type for a speaker
interface SpeakerType {
  name: string;
  role: string;
  image: string;
}

const Speakers: React.FC = () => {
  return (
    <div className="min-h-[80vh]">
      <section className="py-20 bg-white mt-10" id="speakers">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-[#022623]"
          >
            Recent Speakers
          </motion.h2>

          {/* Speakers AutoScroll */}
          <AutoScroll className="py-4" direction="right">
            {speakers.map((speaker: SpeakerType) => (
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
    </div>
  );
};

export default Speakers;
