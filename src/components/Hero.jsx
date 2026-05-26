import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OrbCanvas from "./OrbCanvas";

export default function Hero() {
  const titles = [
    "Frontend Developer",
    "Generative AI Enthusiast",
    "Computer Science Student",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Dynamic Glowing background orbs */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-glow-orb-1 blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-glow-orb-2 blur-[140px] pointer-events-none -z-10 animate-pulse duration-[10000ms]" />
      <div className="absolute top-[40%] left-[35%] w-[35vw] h-[35vw] rounded-full bg-glow-orb-3 blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-20"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism border-white/5 text-[11px] tracking-widest uppercase text-neon-blue font-bold mb-6 hover:border-neon-blue/30 transition-all duration-300"
          >
            <Terminal size={12} className="animate-pulse" />
            <span>PORTFOLIO // SYSTEM ACTIVE</span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Malaika Qirat
          </motion.h1>

          {/* Rotating Subtitles */}
          <div className="h-12 md:h-16 flex items-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-wide bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
              >
                {titles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Authentic professional intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-10 font-medium"
          >
            A Computer Science student at WCA College (affiliated with Gomal University). Passionate about crafting high-performance, responsive frontends and orchestrating conversational interfaces with modern Generative AI tooling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 glassmorphism border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Contact Me
            </a>
          </motion.div>

        </div>

        {/* Right Side 3D Interactive Orb Canvas */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full"
          >
            {/* Embedded custom interactive canvas */}
            <OrbCanvas />
            
            {/* Tech tag floating labels for visual depth */}
            <div className="absolute top-1/4 right-4 glassmorphism border-neon-blue/20 px-3 py-1.5 rounded-full text-[10px] text-neon-blue tracking-widest font-mono select-none animate-bounce duration-[3000ms]">
              REACT.JS
            </div>
            <div className="absolute bottom-1/4 left-4 glassmorphism border-neon-purple/20 px-3 py-1.5 rounded-full text-[10px] text-neon-purple tracking-widest font-mono select-none animate-bounce duration-[4000ms]">
              LANGCHAIN
            </div>
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase mb-1">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-slate-500 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-neon-blue rounded-full" 
            />
          </div>
        </a>
      </div>
    </section>
  );
}
