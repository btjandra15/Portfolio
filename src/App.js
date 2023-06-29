import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SocialLinks/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
