import { useState, useEffect } from "react";
import Navbar from "./components/NAvbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9ff]">

      {/* Navbar */}
      <Navbar />
      <Intro />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;