import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f6efe5_0%,_#f3ebdf_18%,_#fbf7f1_42%,_#f0e6d7_68%,_#fbf7f1_100%)] text-slate-950">
      <Hero />
      <About />
      <Services />
      <Results />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
