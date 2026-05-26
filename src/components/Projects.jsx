import React from "react";
import { ExternalLink, Cpu, Bot, FileText, Bookmark } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI Social Media Agents",
      desc: "A multi-agent AI system designed to coordinate content research, drafting, copywriting, graphic outlines, and auto-scheduling posts across platform channels.",
      tech: ["Python", "LangChain", "OpenAI API", "FastAPI", "Streamlit"],
      icon: <Bot size={22} className="text-neon-blue" />,
      github: "https://github.com",
      live: "https://vercel.com",
      borderGlow: "group-hover:border-neon-blue/30",
      glowColor: "rgba(0, 240, 255, 0.15)",
    },
    {
      title: "RAG System",
      desc: "Retrieval-Augmented Generation chatbot enabling secure, context-rich Q&A over local uploaded PDF/TXT documents utilizing vector database semantic matches.",
      tech: ["LangChain", "ChromaDB", "OpenAI API", "Streamlit", "Python"],
      icon: <Cpu size={22} className="text-neon-purple" />,
      github: "https://github.com",
      live: "https://vercel.com",
      borderGlow: "group-hover:border-neon-purple/30",
      glowColor: "rgba(189, 0, 255, 0.15)",
    },
    {
      title: "Face Mask Detection",
      desc: "A low-latency deep learning computer vision system utilizing live video streams to instantly classify face mask compliance with high prediction accuracy.",
      tech: ["Python", "OpenCV", "TensorFlow/Keras", "CNN", "Streamlit"],
      icon: <FileText size={22} className="text-neon-pink" />,
      github: "https://github.com",
      live: "https://vercel.com",
      borderGlow: "group-hover:border-neon-pink/30",
      glowColor: "rgba(255, 0, 127, 0.15)",
    },
  ];


  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-dark-bg">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-[40%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-glow-orb-2 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs text-neon-blue font-bold tracking-[0.25em] uppercase mb-2">03 // CREATIONS</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Featured Projects</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-2xl glassmorphism border-white/5 transition-all duration-500 ${proj.borderGlow} hover:-translate-y-2`}
              style={{
                boxShadow: `0 0 0 transparent`,
              }}
              whileHover={{
                boxShadow: `0 10px 30px ${proj.glowColor}`,
              }}
            >
              {/* Outer Card Top Right Diagonal Border Trail Effect */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-white/10 rounded-tr-2xl transition-all duration-300" />
              
              <div className="flex flex-col h-full justify-between">
                
                {/* Main Header Row */}
                <div className="text-left">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {proj.icon}
                    </div>
                    
                    {/* Source/Live CTA actions */}
                    <div className="flex gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                        title="View Github Source"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                        title="View Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {proj.title}
                  </h4>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {proj.desc}
                  </p>
                </div>

                {/* Badges and tags */}
                <div className="border-t border-white/5 pt-4 text-left">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono tracking-wide font-semibold uppercase hover:bg-white/10 hover:text-white transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
