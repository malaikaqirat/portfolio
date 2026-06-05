import React, { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glassmorphism-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white font-bold text-lg tracking-wider"
          >
            <div className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-neon-purple to-neon-blue p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-bg rounded-[7px] flex items-center justify-center">
                <Cpu size={15} className="text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-blue opacity-50 blur-sm -z-10 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-sans font-extrabold tracking-widest bg-gradient-to-r from-white via-slate-200 to-neon-blue bg-clip-text text-transparent group-hover:text-glow-blue duration-300">
              MALAIKA<span className="text-neon-purple text-glow-purple">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-slate-400 font-medium hover:text-white transition-colors duration-200 uppercase tracking-widest text-[11px] group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side CTA or socials */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/malaikaqirat"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-neon-blue transition-colors duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/malaika-qirat575"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-neon-purple transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#contact"
              className="relative px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 hover:bg-neon-blue/10 text-xs text-neon-blue font-semibold tracking-wider transition-all duration-300 hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden glassmorphism border-b border-white/5 py-8 px-6 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-neon-blue font-semibold tracking-widest text-sm uppercase py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex gap-4 items-center justify-between pt-4">
              <div className="flex gap-4">
                <a href="https://github.com/malaikaqirat" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-blue">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/malaika-qirat575" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-purple">
                  <FaLinkedin size={20} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-xs text-white font-bold tracking-wider"
              >
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

