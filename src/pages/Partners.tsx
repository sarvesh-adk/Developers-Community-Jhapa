import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "MMC B.Sc. CSIT Association",
    logo: "https://scontent.fbir7-1.fna.fbcdn.net/v/t39.30808-6/278579753_321328573474135_6013647613153262779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LI3602uR2-IQ7kNvgELcaJl&_nc_oc=AdgXnmsA_YG8RY9tdIEw75arOkXQM3AjmPbkATOq_9TST6RRB2ZoKtjXHwlcc_Lvcoc&_nc_zt=23&_nc_ht=scontent.fbir7-1.fna&_nc_gid=AOdYx3-tT-fDc3t_PZNw3ff&oh=00_AYBH0GPGgM62JpQ0gVcHUUtasjEw0c0XWzaRKl2_tmj3Yg&oe=67B151B5",
    description:
      "MMC B.Sc. CSIT Association is an independent & non-political student governing body of B.Sc. CSIT, TU IOST Mechi Multiple Campus.",
  },
  {
    name: "Geek Room",
    logo: "data:image/jpeg;base64,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",
    description:
      "Geek Room is a 25,000+ member coding community focused on collaboration and innovation.",
  },
];
const Partners = () => {
  return (
    <div>
      <section className="mt-10 pb-20 bg-white min-h-[60vh] " id="partners">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-[#022623] text-nowrap"
          >
            Community Partners
          </motion.h2>
          <div className="grid gap-8">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Card className="p-6 w-[260px] mx-auto">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#022623]">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
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
