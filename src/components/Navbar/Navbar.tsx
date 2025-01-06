import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo/logo.png"; // Ensure your logo is imported correctly
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SPEAKERS", href: "/speakers" },
    { name: "TEAM", href: "/team" },
    { name: "PARTNERS", href: "/partners" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Brand Info */}
          <Link to="/">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                className="h-20 w-auto"
                alt="Developer Community of Jhapa Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#022623] dark:text-white">
                  Developer Community of Jhapa
                </span>
                <span className="text-sm text-[#575757] dark:text-gray-300">
                  Code • Create • Connect
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 dark:text-gray-200 font-semibold text-sm hover:text-[#022623] dark:hover:text-white transition-colors"
                aria-label={`Go to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 rounded-lg shadow-md"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#022623] dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
