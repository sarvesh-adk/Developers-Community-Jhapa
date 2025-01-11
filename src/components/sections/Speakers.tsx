import { motion } from "framer-motion";
import { AutoScroll } from "@/components/AutoScroll/AutoScroll";
import { Speaker } from "@/components/Speaker/Speaker";

const speakers = [
  {
    name: "Swikar Sharma",
    role: "Software Engineer | TEDx Speaker | Content Creator",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGrewpQBj8ESA/feedshare-shrink_800/feedshare-shrink_800/0/1722245215331?e=2147483647&v=beta&t=wOQyKBIcjwvVGrNsE4_pSsCsO7ccOZstxuHYkYQH1FM",
  },
  {
    name: "Siddhartha Ghimire",
    role: "Robotics Engineer | Content Creator",
    image:
      "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/318311092_2157036501134772_6190539364176794189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LZOLkf20XZQQ7kNvgHLlUqi&_nc_zt=23&_nc_ht=scontent.fixc4-1.fna&_nc_gid=A7kgtmiuC7LufmmxiNCxQk4&oh=00_AYBWVUQyMTEc7HML_z4R1ZZUD077ZffDd055Swg7cyDZCA&oe=677FFFAD",
  },
  {
    name: "Arjun Tiwari",
    role: "CEO at Astral TechSoft | Professor",
    image:
      "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/393743354_6735167199910986_792954933038599466_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R03SusRuAEcQ7kNvgG7z37z&_nc_zt=23&_nc_ht=scontent.fixc4-3.fna&_nc_gid=Ah-LfBTiKkqJhjuA3X9i28E&oh=00_AYAFj-udMApXvVBIZ4xTTkXp089GEd1hXjxiN7qo0511Nw&oe=67800996",
  },
];

export function Speakers() {
  return (
    <section className="py-20 bg-white" id="speakers">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#022623]"
        >
          Recent Speakers
        </motion.h2>
        <AutoScroll className="py-4" direction="right">
          {speakers.map((speaker) => (
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
  );
}
