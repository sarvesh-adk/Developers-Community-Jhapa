import { Speaker } from "@/components/Speaker/Speaker";
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
      <section className=" pb-20 bg-white mt-10" id="speakers">
        <div className="max-w-6xl mx-auto px-4  flex flex-col justify-center items-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#022623]">
            Recent Speakers
          </h2>

          {/* Grid Layout for Speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 r gap-8  ">
            {speakers.map((speaker: SpeakerType) => (
              <Speaker
                key={speaker.name}
                name={speaker.name}
                role={speaker.role}
                image={speaker.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
