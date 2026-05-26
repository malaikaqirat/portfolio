import React, { useState } from "react";
import { Send, CheckCircle, Mail, Smartphone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-dark-bg">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-[20%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-glow-orb-3 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs text-neon-blue font-bold tracking-[0.25em] uppercase mb-2">05 // CONVERSE</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Get In Touch</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column - Social Link cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
              Let's create something futuristic.
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Have an idea, project, or open vacancy? Send me a message and I will respond to you within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              
              <a
                href="mailto:malaikaqirat@example.com"
                className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 hover:border-neon-blue/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-neon-blue/10 transition-colors duration-300">
                  <Mail size={18} className="text-neon-blue" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-bold">Mail Address</div>
                  <div className="text-xs text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">malaika.qirat@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 hover:border-neon-purple/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-neon-purple/10 transition-colors duration-300">
                  <FaLinkedin size={18} className="text-neon-purple" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-bold">LinkedIn Profile</div>
                  <div className="text-xs text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">linkedin.com/in/malaika-qirat</div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 hover:border-neon-pink/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-neon-pink/10 transition-colors duration-300">
                  <FaGithub size={18} className="text-neon-pink" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-bold">GitHub Showcase</div>
                  <div className="text-xs text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">github.com/malaika-qirat</div>
                </div>
              </a>


            </div>
          </div>

          {/* Right Column - Premium Glow Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 md:p-8 rounded-2xl glassmorphism border-white/5">
              
              {/* Form border neon glow accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    disabled={status === "sending"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bold">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    disabled={status === "sending"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_15px_rgba(189,0,255,0.1)] transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bold">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can collaborate..."
                    disabled={status === "sending"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-pink/50 focus:shadow-[0_0_15px_rgba(255,0,127,0.1)] transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Button Action */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:shadow-none disabled:hover:translate-y-0"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Transmit Message
                        <Send size={12} />
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Transmitting...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-glow-blue"
                      >
                        Transmission Successful
                        <CheckCircle size={14} className="text-emerald-400" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
