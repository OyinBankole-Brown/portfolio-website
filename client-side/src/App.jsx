import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero className="section" />
      <Projects className="section" />
      <Skills className="section" />
      <Contact className="section" />
      <Footer className="section" />
    </>
  );
}

export default App;
