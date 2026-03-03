import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Results from './components/Results';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(255,95,31,0.18),_transparent_24%),radial-gradient(circle_at_12%_18%,_rgba(255,209,102,0.18),_transparent_28%),radial-gradient(circle_at_78%_42%,_rgba(255,61,127,0.14),_transparent_28%),linear-gradient(180deg,_#fff8ef_0%,_#fff4e8_34%,_#ffffff_68%,_#fff0df_100%)] text-slate-950">
      <Hero />
      <About />
      <Services />
      <Team />
      <Results />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
