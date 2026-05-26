import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 overflow-hidden font-sans antialiased select-none">
      
      {/* Premium responsive custom cursor indicator */}
      <CustomCursor />
      
      {/* Main futuristic background lines & pattern glows */}
      <div className="absolute inset-0 bg-[#030014] -z-30" />
      
      {/* Sticky futuristic top navigation bar */}
      <Navbar />

      {/* Main core layout components */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer system details and top trigger scroll */}
      <Footer />

    </div>
  );
}
