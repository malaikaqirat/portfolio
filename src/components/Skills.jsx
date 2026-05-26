import React from "react";
import { Cpu, Layout, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={20} className="text-neon-blue" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      color: "from-neon-blue/20 to-transparent",
      borderColor: "hover:border-neon-blue/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
    },
    {
      title: "Generative AI Integration",
      icon: <Cpu size={20} className="text-neon-purple" />,
      skills: [
        "OpenAI API",
        "LangChain",
        "Prompt Engineering",
        "AI Chatbot Development",
        "RAG Basics",
      ],
      color: "from-neon-purple/20 to-transparent",
      borderColor: "hover:border-neon-purple/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(189,0,255,0.15)]",
    },
    {
      title: "Backend Setup & UI",
      icon: <Database size={20} className="text-neon-pink" />,
      skills: ["Python", "FastAPI", "Streamlit"],
      color: "from-neon-pink/20 to-transparent",
      borderColor: "hover:border-neon-pink/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]",
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} className="text-slate-400" />,
      skills: ["Git & GitHub", "VS Code", "Postman", "Vercel"],
      color: "from-slate-500/10 to-transparent",
      borderColor: "hover:border-slate-400/20",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 bg-dark-bg">
      {/* Background soft light grid orbs */}
      <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-glow-orb-3 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs text-neon-purple font-bold tracking-[0.25em] uppercase mb-2">02 // KNOWLEDGEBASE</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Skills & Tech Stack</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 rounded-2xl glassmorphism border-white/5 transition-all duration-500 ${cat.borderColor} ${cat.glowColor} flex flex-col justify-between overflow-hidden hover:-translate-y-2`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Subtle top background gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h4 className="text-white text-sm font-extrabold tracking-wide text-left">
                    {cat.title}
                  </h4>
                </div>

                {/* List of Skills with neon dot indicators */}
                <div className="flex flex-col gap-3 text-left">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 group/skill text-slate-300 hover:text-white transition-colors duration-200 text-xs font-semibold"
                    >
                      {/* Interactive responsive neon dot indicator */}
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-neon-blue group-hover/skill:bg-neon-blue transition-colors duration-200" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal dynamic system badge */}
              <div className="mt-8 border-t border-white/5 pt-4 text-left">
                <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">
                  ACTIVE_SYSTEM_LOADED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
