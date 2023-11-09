import About from './About';
import './App.css';
import Contact from './Contact';
import NavBar from './NavBar';
import Particulars from './Particulars'
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>

  );
}

export default App;
