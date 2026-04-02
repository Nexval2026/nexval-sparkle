import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Prime from '@/components/Prime';
import Projects from '@/components/Projects';
import Comparison from '@/components/Comparison';
import Process from '@/components/Process';
import Requirements from '@/components/Requirements';
import Transact from '@/components/Transact';
import Ops from '@/components/Ops';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <Prime />
      <Projects />
      <Comparison />
      <Process />
      <Requirements />
      <Transact />
      <Ops />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
