import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo/logo.png";

export function Welcome() {
  return (
    <section
      className="min-h-[35rem] flex items-center justify-center px-4 py-20 max-w-7xl mx-auto"
      id="home"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-6 w-full md:w-2/3 px-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-[#022623] leading-tight"
          >
            Developers Community of Jhapa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-xl text-justify"
          >
            Join Jhapa’s largest tech community. Collaborate, innovate, and grow
            with developers, designers, and tech enthusiasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#022623] hover:bg-[#033835] text-white px-8 py-6 text-lg rounded-xl">
                Register as Member <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section (Logo) */}
        <div className="hidden md:flex items-center justify-center flex-1 w-full md:w-1/3">
          <img
            src={logo}
            alt="Developer Community Jhapa Logo"
            className="h-80 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
