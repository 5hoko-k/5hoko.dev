import About from './Components/About';
import './App.css';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-margin">
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
