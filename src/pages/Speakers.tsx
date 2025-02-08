import { SpeakerCard } from "@/components/Speaker/SpeakerCard";
import { speakers } from "@/data/speakers";

// Define the type for speakers
interface SpeakerType {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
}

const Speakers: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 max-w-7xl">
      <section className="pb-20 mt-10" id="speakers">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#022623]">
            Recent Speakers
          </h2>

          {/* Grid Layout for Speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-5">
            {speakers.map((speaker: SpeakerType, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
