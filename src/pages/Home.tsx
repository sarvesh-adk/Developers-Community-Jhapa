import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Partners } from "@/components/sections/Partners";
import { Speakers } from "@/components/sections/Speakers";
import { Welcome } from "@/components/sections/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Speakers />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
