import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Code, BookOpen, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Counter({ endValue, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, endValue, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const cards = [
    {
      icon: <Code size={20} className="text-neon-blue" />,
      title: "Frontend Engineering",
      desc: "Deep love for clean, modular React architectures, smooth responsive layouts, dynamic animations, and state-of-the-art UI aesthetics.",
    },
    {
      icon: <Sparkles size={20} className="text-neon-purple" />,
      title: "Generative AI Integration",
      desc: "Orchestrating LLM APIs, building reactive context chatbots, experimenting with LangChain, ChromaDB, RAG applications, and automation systems.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs text-neon-blue font-bold tracking-[0.25em] uppercase mb-2">01 // IDENTITY</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">About Malaika</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h4 className="text-xl md:text-2xl font-bold text-white leading-snug">
              Bridging elegant visual interfaces with interactive artificial intelligence.
            </h4>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              I am a dedicated Computer Science student with a passionate drive for modern frontend development and interactive web systems. Rather than focusing on low-level machine learning models, I channel my creativity into integrating modern Generative AI features (like custom assistants, document summarizers, and RAG systems) into high-fidelity web experiences.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Equipped with a solid base from Gomal University affiliated WCA College, my target is to continuously refine high-quality frontend performance while discovering how lightweight API setups and automation can make web tools smarter.
            </p>

            {/* Stats counters grid */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-neon-blue/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-extrabold text-neon-blue mb-1">
                  <Counter endValue="12" />+
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-widest uppercase">Projects Completed</div>
              </div>
              <div className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-neon-purple/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-extrabold text-neon-purple mb-1">
                  <Counter endValue="15" />+
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-widest uppercase">Techs & Libraries</div>
              </div>
            </div>

          </div>

          {/* Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl glassmorphism border-white/5 hover:border-neon-blue/20 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Glowing neon top right border line */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-neon-blue/40 rounded-tr-2xl transition-all duration-300" />
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-neon-blue/10 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h5 className="text-white font-bold text-sm mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {card.title}
                    </h5>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
