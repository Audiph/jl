import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
