import { Button } from "@/components/ui/button";
import logo from "../../assets/logo/logo.png";

export function Welcome() {
  return (
    <section
      className=" flex items-center justify-center   py-20 max-w-7xl mx-auto "
      id="home"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 w-full md:w-2/3 px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#022623] leading-tight">
            Developers Association Jhapa
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-xl text-justify ">
            Join Jhapa’s largest tech association. Collaborate, innovate, and grow
            with developers, designers, and tech enthusiasts.
          </p>

          <div>
            <Button className="bg-[#e22323] hover:bg-[#033835] text-white px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-lg rounded-xl">
              <a href="https://forms.gle/iJMQKju19zBqiaWb8" target="_blank">
                {" "}
                Register as Member{" "}
              </a>
            </Button>
          </div>
        </div>

        {/* Right Section (Logo) */}
        <div className="hidden md:flex items-center justify-center flex-1 w-full md:w-1/3">
          <img
            src={logo}
            alt="Developer Community Jhapa Logo"
            className="h-64 sm:h-80 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
