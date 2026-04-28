import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import FloatingToTopButton from './components/FloatingToTopButton';

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f6efe5_0%,_#f3ebdf_18%,_#fbf7f1_42%,_#f0e6d7_68%,_#fbf7f1_100%)] text-slate-950">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <FloatingToTopButton />
    </div>
  );
}

export default App;
