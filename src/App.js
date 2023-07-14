import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Link, Element } from "react-scroll";
import { useEffect } from "react";
import { debounce } from "lodash";

function App() {
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const windowsHeight = window.innerHeight;
      const threshold = currentScrollPos + windowsHeight;
      const sections = Array.from(document.querySelector('.section'));

      const positions = sections.map((section) => ({
        name: section.getAttribute('name'),
        position: section.offsetTop,
      }));

      const nextSection = positions.find(
        (pos) => pos.position >= threshold
      );

      if(nextSection){
        Link.scrollTo(nextSection.name, {
          duration: 500,
          smooth: true,
        });
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <SocialLinks/>

      <Element className="section" name="Home">
        <Home/>
      </Element>

      <Element className="section" name="About">
        <About/>
      </Element>

      <Element className="section" name="Portfolio">
        <Portfolio/>
      </Element>

      <Element className="section" name="Experience">
        <Experience/>
      </Element>

      <Element className="section" name="Skills">
        <Skills/>
      </Element>

      <Element className="section" name="Contact">
        <Contact/>
      </Element>
    </div>
  );
}

export default App;
