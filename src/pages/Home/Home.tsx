import { About } from "@/pages/Home/About";

import { Welcome } from "@/pages/Home/Welcome";
import CoreValues  from "./CoreValues";

const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
    <CoreValues />
    </div>
  );
};

export default Home;
