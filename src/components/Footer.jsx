import React, { useState, useEffect } from "react";
import { ArrowUp, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/5 bg-[#030010]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand/Signature */}
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-neon-blue" />
          <span className="text-xs text-slate-400 font-semibold tracking-widest font-mono">
            MALAIKA QIRAT // PORTFOLIO © {new Date().getFullYear()}
          </span>
        </div>

        {/* Credentials */}
        <div className="text-center md:text-right text-[10px] text-slate-500 font-mono tracking-wider">
          <span>BS COMPUTER SCIENCE • WCA COLLEGE (GOMAL UNIVERSITY)</span>
        </div>

      </div>

      {/* Dynamic Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full glassmorphism border-neon-blue/20 hover:border-neon-blue/60 text-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
