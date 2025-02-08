import { Speaker } from "@/components/Speaker/Speaker";
import { speakers } from "../data/speakers";

// Define the type for a speaker
interface SpeakerType {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
}

const Speakers: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 max-w-7xl ">
      <section className=" pb-20  mt-10 " id="speakers">
        <div className="max-w-7xl mx-auto   flex flex-col justify-center items-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#022623]">
            Recent Speakers
          </h2>

          {/* Grid Layout for Speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8  w-full max-w-7xl mx-auto px-5 ">
            {speakers.map((speaker: SpeakerType, index) => (
              <Speaker
                key={index}
                name={speaker.name}
                role={speaker.role}
                image={speaker.image}
                social={{
                  linkedin:
                    speaker.linkedin !== "#" ? speaker.linkedin : undefined,
                  github: speaker.github !== "#" ? speaker.github : undefined,
                  facebook:
                    speaker.facebook !== "#" ? speaker.facebook : undefined,
                  instagram:
                    speaker.instagram !== "#" ? speaker.instagram : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
