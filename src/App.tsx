import { Navbar } from '@/components/Navbar/Navbar';
import { Welcome } from '@/components/sections/Welcome';
import { About } from '@/components/sections/About';
import { ExecutiveTeam } from '@/components/sections/ExecutiveTeam';
import { Speakers } from '@/components/sections/Speakers';
import { Partners } from '@/components/sections/Partners';
import { Contact } from '@/components/sections/Contact';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const loadPoppins = async () => {
      await import('@fontsource/poppins/400.css');
      await import('@fontsource/poppins/700.css');
      document.body.style.fontFamily = "'Poppins', sans-serif";
    };
    loadPoppins();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Welcome />
        <About />
        <ExecutiveTeam />
        <Speakers />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}