import About from './Components/About';
// import './App.css';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import '@picocss/pico'

function App() {
  return (
    <>
      <main className="container">
        <NavBar />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>

  );
}

export default App;
