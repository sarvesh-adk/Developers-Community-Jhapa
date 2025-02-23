import { motion } from "framer-motion";
import unity from "@/assets/welcome/Unity.jpg";
import collab from "@/assets/welcome/Collab.jpg";
import creativity from "@/assets/welcome/Creativity.jpg";
const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Unity",
      description:
        "At Developer Association Jhapa, we foster an inclusive space where IT students collaborate and grow together.",
      image: unity,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the strength of teamwork, where sharing knowledge and ideas unlocks limitless potential.",
      image: collab,
    },
    {
      title: "Creativity",
      description:
        "Innovation thrives in our community, with hackathons and projects that encourage pushing the boundaries of technology.",
      image: creativity,
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-[#022623] mb-5 text-center px-4"
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <motion.div
              key={value.title}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center border border-gray-200 rounded-2xl shadow-sm p-6 bg-white  transition-shadow"
            >
              <img
                src={value.image}
                alt={value.title}
                className="w-32 h-32 object-cover rounded-full mb-6"
              />
              <h3 className="text-2xl font-bold text-[#022623] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
