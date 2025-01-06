import logo from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 bg-white text-black border-t  mx-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Brand Info */}
          <Link
            to="/"
            aria-label="Go to Home"
            className="flex items-center space-x-4"
          >
            <img
              src={logo}
              alt="Developer Community of Jhapa Logo"
              className="h-20 w-auto"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl font-semibold text-[#022623] dark:text-white">
                Developer Community of Jhapa
              </span>
              <span className="text-sm text-[#575757] dark:text-gray-300">
               Code • Create • Connect
              </span>
            </div>
          </Link>

          {/* Copyright Info */}
          <div className="text-sm font-normal text-[#575757] dark:text-gray-300">
            © {currentYear} Developer Community of Jhapa. <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
