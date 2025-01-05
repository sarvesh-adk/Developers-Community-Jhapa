import { Navbar } from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Corrected import
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Footer from "./components/Footer/Footer";
import Speakers from "./pages/Speakers";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    const loadPoppins = async () => {
      await import("@fontsource/poppins/400.css");
      await import("@fontsource/poppins/700.css");
      document.body.style.fontFamily = "'Poppins', sans-serif";
    };
    loadPoppins();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
