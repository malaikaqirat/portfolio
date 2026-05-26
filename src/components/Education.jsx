import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const timelineData = [
    {
      degree: "BS Computer Science",
      institution: "WCA College",
      affiliation: "Affiliated with Gomal University",
      period: "2023 - Present",
      location: "Pakistan",
      highlights: [
        "Focused on modern frontend engineering, UI designs, and algorithm analysis.",
        "Deeply involved in college tech clubs, AI webinars, and student projects.",
        "Actively building portfolio applications using OpenAI API, FastAPI, and React.",
      ],
      icon: <GraduationCap className="text-neon-blue" size={20} />,
      color: "border-neon-blue",
      glowColor: "shadow-[0_0_15px_rgba(0,240,255,0.2)]",
    },
  ];

  return (
    <section id="education" className="relative py-24 px-6 md:px-12 bg-dark-bg">
      {/* Dynamic light backdrop orb */}
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-glow-orb-1 blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs text-neon-pink font-bold tracking-[0.25em] uppercase mb-2">04 // KNOWLEDGE TIMELINE</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Education Path</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Vertical central tracking line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent -translate-x-1/2 -z-10" />

          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full flex flex-col sm:flex-row items-start sm:justify-between group mb-12"
            >
              
              {/* Timeline Center Bullet Pin */}
              <div 
                className={`absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-dark-bg border-2 ${item.color} ${item.glowColor} flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Space filler for standard symmetric layout */}
              <div className="hidden sm:block w-[45%]" />

              {/* Glassmorphism content card */}
              <div className="w-full sm:w-[45%] pl-12 sm:pl-0 text-left">
                <div className="glassmorphism p-6 md:p-8 rounded-2xl border-white/5 group-hover:border-neon-blue/20 transition-all duration-300 relative">
                  
                  {/* Subtle triangle arrow pointing to central line */}
                  <div className="hidden sm:block absolute top-7 -right-2 w-4 h-4 bg-transparent border-t border-r border-white/5 rotate-45 backdrop-filter backdrop-blur-lg" />
                  
                  {/* Category highlights */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 text-[10px] text-neon-blue font-mono tracking-wider font-semibold bg-neon-blue/5 px-2.5 py-1 rounded-md border border-neon-blue/10">
                      <Calendar size={10} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono tracking-wider font-semibold bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <MapPin size={10} />
                      {item.location}
                    </span>
                  </div>

                  {/* Degree title */}
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors duration-300">
                    {item.degree}
                  </h4>
                  
                  {/* Institution details */}
                  <div className="text-xs text-slate-400 font-bold mb-6 flex flex-col gap-0.5">
                    <span>{item.institution}</span>
                    <span className="text-neon-purple font-semibold text-[10px] tracking-wide uppercase">{item.affiliation}</span>
                  </div>

                  {/* Highlight bullets */}
                  <ul className="flex flex-col gap-2 border-t border-white/5 pt-4">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start text-xs text-slate-400 leading-relaxed font-semibold">
                        <Award size={14} className="text-neon-purple shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
